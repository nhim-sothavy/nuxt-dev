export interface Product {
  id: string; slug: string; name: string; description: string; category: string; gender: 'Women' | 'Men' | 'Accessories'; brand: string;
  price: number; salePrice?: number; sizes: string[]; colors: string[]; stock: number; images: string[]; rating: number; reviews: number; isNew: boolean; isBestSeller: boolean;
}
export interface CartLine { key: string; productId: string; size: string; color: string; quantity: number }
export interface DemoOrder { id: string; createdAt: string; status: string; customer: { name: string; email: string; address: string; city: string; phone: string }; items: Array<CartLine & { productName: string; unitPrice: number }>; subtotal: number; shipping: number; discount: number; total: number }
