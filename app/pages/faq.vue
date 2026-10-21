<script setup lang="ts">
const open = ref(0);
const faqs = [
  {
    q: "Is this a real online store?",
    a: "This version is a frontend-only demonstration. It uses local sample data and browser storage, and does not process real payments or shipments.",
  },
  {
    q: "How much is shipping?",
    a: "The demo uses a $4.50 standard shipping estimate, free on orders of $75 or more, and an $8 express option. These values are examples and can be changed.",
  },
  {
    q: "Can I save items for later?",
    a: "Yes. Select the heart icon on a product to add it to your wishlist. Your list is saved in this browser.",
  },
  {
    q: "How do I use a discount code?",
    a: "Enter VY10 in the cart to apply a 10% demo discount. The code has no real monetary value.",
  },
  {
    q: "Can I return an item?",
    a: "The policy page contains sample copy only. No real return request can be submitted in this demo.",
  },
  {
    q: "Where is my order history?",
    a: "After placing a demo checkout order, visit Account → Order history. Orders are saved locally in your browser.",
  },
];
</script>
<template>
  <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
    <p class="text-xs font-bold uppercase tracking-[.2em] text-brand">
      A few answers
    </p>
    <h1 class="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
      Frequently asked<span class="text-brand">.</span>
    </h1>
    <p class="mt-3 text-sm text-gray-500">
      Need something else?
      <NuxtLink to="/contact" class="font-semibold text-brand"
        >Contact us</NuxtLink
      >.
    </p>
    <div class="mt-8 divide-y divide-gray-100 border-y border-gray-100">
      <div v-for="(faq, i) in faqs" :key="faq.q" class="py-5">
        <button
          class="flex w-full items-center justify-between gap-4 text-left"
          @click="open = open === i ? -1 : i"
        >
          <span class="font-semibold">{{ faq.q }}</span
          ><span class="text-xl text-brand">{{ open === i ? "−" : "+" }}</span>
        </button>
        <p
          v-if="open === i"
          class="mt-3 max-w-2xl text-sm leading-7 text-gray-500"
        >
          {{ faq.a }}
        </p>
      </div>
    </div>
  </div>
</template>
