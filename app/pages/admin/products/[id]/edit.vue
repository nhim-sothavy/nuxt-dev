<script setup lang="ts">
const route = useRoute();
const shop = useShop();
const product = computed(() =>
  shop.products.find((p) => p.id === String(route.params.id)),
);
</script>
<template>
  <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
    <p class="text-xs font-bold uppercase tracking-[.2em] text-brand">
      Admin demo
    </p>
    <h1 class="mt-2 text-4xl font-semibold tracking-tight">
      Edit product<span class="text-brand">.</span>
    </h1>
    <AdminProductForm v-if="product" :product="product" /><EmptyState
      v-else
      title="Product not found"
      description="This product is not in the demo catalog."
      to="/admin/products"
      action-label="Back to products"
    />
  </div>
</template>
