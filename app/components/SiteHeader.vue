<script setup lang="ts">
const route = useRoute();
const shop = useShop();
const search = ref("");

const items = [
  { label: "Shop all", to: "/shop" },
  { label: "Men", to: "/men" },
  { label: "Women", to: "/women" },
  { label: "Accessories", to: "/accessories" },
  { label: "New in", to: "/new-arrivals" },
];

const navGradient =
  "linear-gradient(90deg, #00ffff 0%, #59b0ff 35%, #bb865c 70%, #fff6f6 100%)";

function isActive(path: string) {
  return (
    route.path === path ||
    (path !== "/shop" && route.path.startsWith(`${path}/`))
  );
}

function submitSearch() {
  const query = search.value.trim();

  navigateTo({
    path: "/search",
    query: query ? { q: query } : {},
  });
}
</script>

<template>
  <UHeader>
    <!-- Logo -->
    <template #title>
      <NuxtLink to="/" aria-label="VY Clothing Store home">
        <img
          src="/logo-2.png"
          alt="VY Clothing Store"
          class="h-12 w-auto max-w-[150px] object-contain sm:h-14"
        />
      </NuxtLink>
    </template>

    <!-- Navigation -->
    <nav class="hidden items-center gap-1 md:flex" aria-label="Main navigation">
      <NuxtLink
        v-for="item in items"
        :key="item.to"
        :to="item.to"
        class="group relative rounded-none px-3 py-3 text-xs font-semibold uppercase tracking-wider text-gray-700 transition-colors duration-300 hover:text-[#28937a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28937a] dark:text-gray-200"
        :aria-current="isActive(item.to) ? 'page' : undefined"
      >
        <!-- Gradient label -->
        <span
          class="transition-all duration-300 group-hover:bg-clip-text group-hover:text-red-500"
          :class="
            isActive(item.to) ? 'bg-clip-text text-transparent font-bold' : ''
          "
          :style="isActive(item.to) ? { backgroundImage: navGradient } : {}"
        >
          {{ item.label }}
        </span>

        <!-- Gradient underline -->
        <span
          class="absolute bottom-1 left-3 right-3 h-0.5 origin-left scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100"
          :class="isActive(item.to) ? 'scale-x-100' : ''"
          :style="{ backgroundImage: navGradient }"
        />
      </NuxtLink>
    </nav>

    <!-- Right-side actions -->
    <template #right>
      <!-- Desktop search -->
      <form
        class="hidden w-full max-w-[230px] items-center xl:flex"
        @submit.prevent="submitSearch"
      >
        <UInput
          v-model="search"
          size="sm"
          icon="i-lucide-search"
          placeholder="Search pieces..."
          aria-label="Search products"
          class="w-full"
        />
      </form>

      <!-- Mobile search -->
      <NuxtLink
        to="/search"
        class="inline-flex items-center justify-center rounded-full p-2 text-gray-700 transition-colors duration-300 hover:bg-gray-100 hover:text-[#28937a] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28937a] dark:text-gray-200 dark:hover:bg-gray-800 xl:hidden"
        aria-label="Search"
      >
        <UIcon name="i-lucide-search" class="size-5" />
      </NuxtLink>

      <UColorModeButton />

      <!-- Account -->
      <NuxtLink
        to="/account"
        class="hidden items-center justify-center rounded-full p-2 text-gray-700 transition-colors duration-300 hover:bg-gray-100 hover:text-[#28937a] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28937a] dark:text-gray-200 dark:hover:bg-gray-800 sm:inline-flex"
        aria-label="Account"
      >
        <UIcon name="i-lucide-user-round" class="size-5" />
      </NuxtLink>
      
<!-- Wishlist -->
<NuxtLink
  to="/wishlist"
  class="relative inline-flex items-center justify-center rounded-full p-2 text-gray-700 transition-colors duration-300 hover:bg-pink-50 hover:text-pink-600 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500 dark:text-gray-200 dark:hover:bg-gray-800"
  aria-label="Wishlist"
>
  <UIcon name="i-lucide-heart" class="size-5 transition-transform duration-300 hover:scale-110" />

  <!-- Wishlist count -->
  <span
    v-if="shop.wishlist?.length > 0"
    class="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-pink-600 text-[10px] font-bold leading-none text-white"
  >
    {{ shop.wishlist.length }}
  </span>
</NuxtLink>

      <!-- Shopping cart -->
      <NuxtLink
        to="/cart"
        class="relative inline-flex items-center justify-center rounded-full p-2 text-gray-700 transition-colors duration-300 hover:bg-gray-100 hover:text-[#28937a] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28937a] dark:text-gray-200 dark:hover:bg-gray-800"
        aria-label="Shopping bag"
      >
        <UIcon name="i-lucide-shopping-cart" class="size-5" />

        <span
          v-if="shop.cartCount > 0"
          class="absolute -right-1 -top-1 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-[#28937a] px-1 text-[10px] font-bold text-white"
        >
          {{ shop.cartCount }}
        </span>
      </NuxtLink>
    </template>
  </UHeader>
</template>
