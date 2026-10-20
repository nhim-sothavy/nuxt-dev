<script setup lang="ts">
import type { Product } from "~/types/shop";
defineProps<{ products: Product[] }>();
</script>
<template>
  <div
    v-if="products.length"
    class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-4 lg:gap-y-10"
  >
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
  <div v-else class="rounded-3xl bg-mist px-6 py-16 text-center">
    <div class="text-3xl">⌕</div>
    <h3 class="mt-3 text-lg font-bold">No pieces found</h3>
    <p class="mt-2 text-sm text-gray-500">
      Try changing your search or filters.
    </p>
    <NuxtLink
      to="/shop"
      class="mt-5 inline-flex rounded-full bg-ink px-5 py-3 text-xs font-bold uppercase tracking-wider text-white"
      >Explore all pieces</NuxtLink
    >
  </div>
</template>
