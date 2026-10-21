<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const shop = useShop()
const search = ref('')

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Shop All',
    to: '/shop',
    icon: 'i-lucide-house'
  },
  {
    label: 'Men',
    to: '/men'
  },
  {
    label: 'Women',
    to: '/women'
  },
  {
    label: 'Accessories',
    to: '/accessories'
  },
  {
    label: 'New In',
    to: '/new-arrivals'
  }
])

function submitSearch() {
  const query = search.value.trim()

  navigateTo({
    path: '/search',
    query: query ? { q: query } : {}
  })
}
</script>

<template>
  <UHeader>
    <template #title>
      <NuxtLink to="/" aria-label="VY Clothing Store home">
        <img
          src="/logo.png"
          alt="VY Clothing Store"
          class="h-12 w-auto max-w-[150px] object-contain sm:h-14"
        >
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="items"
      :ui="{
        link: 'rounded-sm hover:bg-red-800',
        linkLabel: 'text-pink-700'
      }"
    />

    <template #right>
      <!-- Desktop search -->
      <form
        class="hidden w-full max-w-[210px] items-center xl:flex"
        @submit.prevent="submitSearch"
      >
        <UInput
          v-model="search"
          size="sm"
          icon="i-lucide-search"
          placeholder="Search products..."
          aria-label="Search products"
          class="w-full"
        />
      </form>

      <!-- Mobile search -->
      <UButton
        to="/search"
        icon="i-lucide-search"
        color="neutral"
        variant="ghost"
        class="xl:hidden"
        aria-label="Search"
      />

      <!-- Color mode -->
      <UColorModeButton />

      <!-- Account -->
      <UButton
        to="/account"
        icon="i-lucide-user-round"
        color="neutral"
        variant="ghost"
        aria-label="Account"
      />

      <!-- Shopping cart -->
      <UChip
        :text="String(shop.cartCount)"
        :show="shop.cartCount > 0"
        color="primary"
      >
        <UButton
          to="/cart"
          icon="i-lucide-shopping-cart"
          color="primary"
          variant="outline"
          aria-label="Shopping cart"
        />
      </UChip>
    </template>
  </UHeader>
</template>
