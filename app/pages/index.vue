<script setup lang="ts">
  const shop = useShop();
  const newProducts = computed(() =>
    shop.products.filter((p) => p.isNew).slice(0, 4),
  );
  const bestProducts = computed(() =>
    shop.products.filter((p) => p.isBestSeller).slice(0, 4),
  );
  useSeoMeta({
    title: "VY Clothing Store — Everyday, elevated",
    description: "Discover modern essentials and thoughtful everyday fashion.",
  });
  const items = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSGMBR3SY-mf-qrEiminCWS4sGuNuvdYg8SGuFP9Nsvg&s=10',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
]
</script>
<template>
  <div>
  <section class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 sm:py-20 overflow-hidden lg:py-0">
    <UCarousel
      v-slot="{ item }"
      :items="items"
      loop
      arrows
      :autoplay="{ delay: 2000 }"
      wheel-gestures
      :prev="{ variant: 'solid' }"
      :next="{ variant: 'solid' }"
      :ui="{
        item: 'ps-0 w-full',
        prev: 'sm:start-8',
        next: 'sm:end-8',
        container: 'ms-0'
      }"
      class="w-auto"
    >
      <img
        :src="item"
        alt="Featured clothing collection"
        class="block h-[400px] w-full object-cover sm:h-[500px] lg:h-[600px]"
      />
    </UCarousel>
  </section>

    <section class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 sm:py-20">
      <div class="mb-7 flex items-end justify-between">
        <div>
          <h2 class="mt-2 text-3xl font-semibold tracking-[-.05em] sm:text-4xl">
            Shop by mood.
          </h2>
        </div>
        <NuxtLink
          to="/shop"
          class="hidden text-xs font-bold uppercase tracking-wider hover:text-brand sm:block"
          >All collections ↗</NuxtLink
        >
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <NuxtLink
          v-for="cat in [
            {
              title: 'For her',
              sub: 'Easy pieces, endless ways',
              to: '/women',
              img: 'photo-1483985988355-763728e1935b',
            },
            {
              title: 'For him',
              sub: 'Everyday, well considered',
              to: '/men',
              img: 'photo-1515886657613-9f3515b0c78f',
            },
            {
              title: 'The finishing touch',
              sub: 'Accessories that do more',
              to: '/accessories',
              img: 'photo-1490481651871-ab68de25d43d',
            },
          ]"
          :key="cat.to"
          :to="cat.to"
          class="group relative h-[280px] overflow-hidden rounded-2xl bg-mist sm:h-[340px]"
          ><img
            :src="`https://images.unsplash.com/${cat.img}?auto=format&fit=crop&w=900&q=85`"
            :alt="cat.title"
            class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"
          ></div>
          <div class="absolute bottom-6 left-6 text-white">
            <h3 class="text-2xl font-semibold">{{ cat.title }}</h3>
            <p class="mt-1 text-xs text-white/80">{{ cat.sub }}</p>
            <span
              class="mt-4 inline-block text-xs font-bold uppercase tracking-wider"
              >Explore collection ↗</span
            >
          </div></NuxtLink
        >
      </div>
    </section>
    <section class="bg-mist py-16 sm:py-20">
      <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8 flex items-end justify-between">
          <div>
            <p
              class="text-[10px] font-bold uppercase tracking-[.2em] text-brand"
            >
              Just landed
            </p>
            <h2
              class="mt-2 text-3xl font-semibold tracking-[-.05em] sm:text-4xl"
            >
              New in, naturally.
            </h2>
          </div>
          <NuxtLink
            to="/new-arrivals"
            class="text-xs font-bold uppercase tracking-wider hover:text-brand"
            >View all ↗</NuxtLink
          >
        </div>
        <ProductGrid :products="newProducts" />
      </div>
    </section>
    <section class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div class="mb-8 flex items-end justify-between">
        <div>
          <p class="text-[10px] font-bold uppercase tracking-[.2em] text-brand">
            Loved on repeat
          </p>
          <h2 class="mt-2 text-3xl font-semibold tracking-[-.05em] sm:text-4xl">
            The good stuff.
          </h2>
        </div>
        <NuxtLink
          to="/best-sellers"
          class="text-xs font-bold uppercase tracking-wider hover:text-brand"
          >Best sellers ↗</NuxtLink
        >
      </div>
      <ProductGrid :products="bestProducts" />
    </section>
    <section class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
      <div class="grid overflow-hidden rounded-3xl bg-[#e7eaff] md:grid-cols-2">
        <div class="flex flex-col justify-center p-8 sm:p-12">
          <p class="text-[10px] font-bold uppercase tracking-[.2em] text-brand">
            Your new uniform
          </p>
          <h2
            class="mt-3 text-4xl font-semibold leading-tight tracking-[-.06em] sm:text-5xl"
          >
            Good style.<br />Zero effort.
          </h2>
          <p class="mt-4 max-w-sm text-sm leading-6 text-gray-600">
            Build a wardrobe that works as hard as you do with versatile pieces
            made for real life.
          </p>
          <NuxtLink
            to="/shop"
            class="mt-7 inline-flex w-fit rounded-full bg-ink px-6 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand"
            >Find your staples ↗</NuxtLink
          >
        </div>
        <div class="min-h-[260px]">
          <img
            src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=85"
            alt="Minimal modern outfit"
            class="h-full max-h-[460px] w-full object-cover"
          />
        </div>
      </div>
    </section>
    <section class="bg-mist py-14">
      <div
        class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"
      >
        <div>
          <p class="text-[10px] font-bold uppercase tracking-[.2em] text-brand">
            A little note from VY
          </p>
          <h2 class="mt-2 text-2xl font-semibold tracking-tight">
            Good things, occasionally.
          </h2>
          <p class="mt-2 text-sm text-gray-500">
            Get style notes and new drops. Demo form only—no email will be sent.
          </p>
        </div>
        <NewsletterForm />
      </div>
    </section>
  </div>
</template>
