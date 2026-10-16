import type { CartLine, DemoOrder, Product } from '~/types/shop'
import { products as seedProducts } from '~/data/products'

const STORAGE = { cart: 'vy-cart-v1', wishlist: 'vy-wishlist-v1', orders: 'vy-orders-v1', products: 'vy-products-v1', user: 'vy-user-v1', categories: 'vy-categories-v1' }

export function useShop() {
  const cart = useState<CartLine[]>('vy-cart', () => [])
  const wishlist = useState<string[]>('vy-wishlist', () => [])
  const orders = useState<DemoOrder[]>('vy-orders', () => [])
  const products = useState<Product[]>('vy-products', () => seedProducts.map(p => ({ ...p })))
  const user = useState<{ name: string; email: string } | null>('vy-user', () => null)
  const categories = useState<string[]>('vy-categories', () => ['Tops','T-shirts','Knitwear','Pants','Outerwear','Dresses','Shirts','Sweatshirts','Shorts','Loungewear','Bags','Shoes','Accessories','Jewelry'])
  const hydrated = useState<boolean>('vy-storage-hydrated', () => false)
  const notice = useState<{ text: string; kind: 'success'|'error'|'info' } | null>('vy-notice', () => null)

  if (import.meta.client && !hydrated.value) {
    try {
      const read = (key: string) => { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : null }
      cart.value = read(STORAGE.cart) ?? []
      wishlist.value = read(STORAGE.wishlist) ?? []
      orders.value = read(STORAGE.orders) ?? []
      products.value = read(STORAGE.products) ?? seedProducts.map(p => ({ ...p }))
      user.value = read(STORAGE.user) ?? null
      categories.value = read(STORAGE.categories) ?? categories.value
    } catch (e) { console.warn('Could not restore VY demo data', e) }
    hydrated.value = true
  }
  function persist(key: string, value: unknown) { if (import.meta.client) localStorage.setItem(key, JSON.stringify(value)) }
  function notify(text: string, kind: 'success'|'error'|'info' = 'success') { notice.value = { text, kind }; if (import.meta.client) window.setTimeout(() => { if (notice.value?.text === text) notice.value = null }, 2800) }
  function productById(id: string) { return products.value.find(p => p.id === id) }
  function productBySlug(slug: string) { return products.value.find(p => p.slug === slug) }
  function price(p: Product) { return p.salePrice ?? p.price }
  const cartCount = computed(() => cart.value.reduce((sum, line) => sum + line.quantity, 0))
  const cartSubtotal = computed(() => cart.value.reduce((sum, line) => sum + (productById(line.productId) ? price(productById(line.productId)!) * line.quantity : 0), 0))
  const wishlistProducts = computed(() => wishlist.value.map(productById).filter((p): p is Product => Boolean(p)))
  function saveCart() { persist(STORAGE.cart, cart.value) }
  function addToCart(product: Product, size?: string, color?: string, quantity = 1) {
    if (product.stock < 1) return notify('This item is currently out of stock.', 'error')
    const chosenSize = size || product.sizes[0] || 'One size'
    const chosenColor = color || product.colors[0] || 'Default'
    const key = `${product.id}::${chosenSize}::${chosenColor}`
    const existing = cart.value.find(line => line.key === key)
    const nextQuantity = (existing?.quantity ?? 0) + quantity
    if (nextQuantity > product.stock) return notify(`Only ${product.stock} available for this item.`, 'error')
    if (existing) existing.quantity = nextQuantity
    else cart.value.push({ key, productId: product.id, size: chosenSize, color: chosenColor, quantity })
    saveCart(); notify(`${product.name} added to your bag.`)
  }
  function updateQuantity(key: string, quantity: number) {
    const line = cart.value.find(item => item.key === key); if (!line) return
    if (quantity <= 0) { removeFromCart(key); return }
    const product = productById(line.productId)
    if (product && quantity > product.stock) return notify(`Only ${product.stock} available.`, 'error')
    line.quantity = quantity; saveCart()
  }
  function removeFromCart(key: string) { cart.value = cart.value.filter(line => line.key !== key); saveCart(); notify('Item removed from your bag.', 'info') }
  function clearCart() { cart.value = []; saveCart() }
  function toggleWishlist(id: string) {
    if (wishlist.value.includes(id)) { wishlist.value = wishlist.value.filter(item => item !== id); notify('Removed from wishlist.', 'info') }
    else { wishlist.value.push(id); notify('Added to wishlist.') }
    persist(STORAGE.wishlist, wishlist.value)
  }
  function placeOrder(customer: { name: string; email: string; address: string; city: string; phone: string }, coupon = '') {
    if (!cart.value.length) { notify('Your bag is empty.', 'error'); return null }
    const items = cart.value.map(line => { const p = productById(line.productId)!; return { ...line, productName: p.name, unitPrice: price(p) } })
    const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0)
    const discount = coupon.trim().toUpperCase() === 'VY10' ? subtotal * 0.1 : 0
    const shipping = subtotal - discount >= 75 ? 0 : 4.5
    const order: DemoOrder = { id: `VY-${Date.now().toString().slice(-8)}`, createdAt: new Date().toISOString(), status: 'Processing (demo)', customer, items, subtotal, shipping, discount, total: subtotal - discount + shipping }
    orders.value.unshift(order); persist(STORAGE.orders, orders.value); clearCart(); notify('Demo order placed successfully. No payment was taken.')
    return order
  }
  function saveProducts() { persist(STORAGE.products, products.value) }
  function saveCategories() { persist(STORAGE.categories, categories.value) }
  function saveUser() { persist(STORAGE.user, user.value) }
  function resetDemo() { cart.value=[]; wishlist.value=[]; orders.value=[]; products.value=seedProducts.map(p=>({...p})); user.value=null; categories.value=['Tops','T-shirts','Knitwear','Pants','Outerwear','Dresses','Shirts','Sweatshirts','Shorts','Loungewear','Bags','Shoes','Accessories','Jewelry']; Object.entries({cart:cart.value,wishlist:wishlist.value,orders:orders.value,products:products.value,user:user.value,categories:categories.value}).forEach(([k,v])=>persist(STORAGE[k as keyof typeof STORAGE],v)); notify('Demo data has been reset.') }
  return reactive({ cart, wishlist, orders, products, user, categories, notice, cartCount, cartSubtotal, wishlistProducts, productById, productBySlug, price, addToCart, updateQuantity, removeFromCart, clearCart, toggleWishlist, placeOrder, saveProducts, saveCategories, saveUser, notify, resetDemo })
}
