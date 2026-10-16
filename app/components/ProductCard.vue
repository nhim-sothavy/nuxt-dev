<script setup lang="ts">
import type { Product } from "~/types/shop";
const props = defineProps<{ product: Product }>();
const shop = useShop();
const currentPrice = computed(() => shop.price(props.product));
const saved = computed(() => shop.wishlist.includes(props.product.id));
</script>
<template>
  <article class="group min-w-0">
    <div class="relative overflow-hidden rounded-2xl bg-mist">
      <NuxtLink :to="`/products/${product.slug}`" class="block"
        ><img
          :src="product.images[0]"
          :alt="product.name"
          loading="lazy"
          class="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          @error="
            ($event.target as HTMLImageElement).src =
              'https://placehold.co/600x800/f2f2f2/333?text=VY+Studio'
          "
        /><span
          v-if="product.isNew"
          class="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[9px] font-bold uppercase tracking-[.16em]"
          >New</span
        ><span
          v-else-if="product.salePrice"
          class="absolute left-3 top-3 rounded-full bg-brand px-3 py-1 text-[9px] font-bold uppercase tracking-[.16em] text-white"
          >Sale</span
        ></NuxtLink
      >
    <button
        class="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-xl shadow-sm transition hover:scale-105"
        :class="{ 'text-red-500': saved, 'text-gray-600': !saved }"
        :aria-label="saved ? 'Remove from wishlist' : 'Add to wishlist'"
        @click="shop.toggleWishlist(product.id)"
        >
        {{ saved ? "♥" : "♡" }}
    </button>
        <button
        class="absolute bottom-3 left-3 right-3 translate-y-3 rounded-full bg-white/95 py-3 text-[10px] font-bold uppercase tracking-[.16em] opacity-0 shadow transition duration-200 hover:bg-ink hover:text-white group-hover:translate-y-0 group-hover:opacity-100 max-sm:static max-sm:mt-2 max-sm:translate-y-0 max-sm:opacity-100"
        @click="shop.addToCart(product)"
      >
        Quick add +
      </button>
    </div>
    <div class="pt-3">
      <div class="flex items-start justify-between gap-2">
        <NuxtLink
          :to="`/products/${product.slug}`"
          class="text-sm font-semibold leading-5 hover:text-brand"
          >{{ product.name }}</NuxtLink
        ><span class="shrink-0 text-xs text-gray-500"
          >★ {{ product.rating }}</span
        >
      </div>
      <p class="mt-1 text-[11px] text-gray-500">
        {{ product.category }} · {{ product.colors.length }} colors
      </p>
      <div class="mt-2 flex items-center gap-2">
        <span class="text-sm font-bold">${{ currentPrice.toFixed(2) }}</span
        ><span
          v-if="product.salePrice"
          class="text-xs text-gray-400 line-through"
          >${{ product.price.toFixed(2) }}</span
        >
      </div>
    </div>
  </article>
</template>
