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
  'https://template.canva.com/EAE6-K3qkzk/2/0/1600w-xzuyujO7aVc.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHTDK3B5XO%2F20261020%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261020T024408Z&X-Amz-Expires=29544&X-Amz-Signature=8d2e56f950b9e673993188ac698229d6227927f2aa7f30fb6ea20e4d3550b706&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Tue%2C%2020%20Oct%202026%2010%3A56%3A32%20GMT',
  'https://template.canva.com/EAE-p1QPW_4/2/0/1600w-j-u1jFPylT4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHTDK3B5XO%2F20261019%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261019T214106Z&X-Amz-Expires=47062&X-Amz-Signature=b5f3c4a5ac152151f67fe1b8776c586c604dcc1a50b7bf07702a3d872d13e5ae&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Tue%2C%2020%20Oct%202026%2010%3A45%3A28%20GMT',
  'https://template.canva.com/EAFgoIbXL34/2/0/1600w-DWBM9PCn-0w.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHTDK3B5XO%2F20261019%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261019T133115Z&X-Amz-Expires=77869&X-Amz-Signature=23bd601351551b41ebbdd4a5596553753116155329c507a6fc07992d78827d96&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Tue%2C%2020%20Oct%202026%2011%3A09%3A04%20GMT',
]
</script>
<template>
  <div>
  
<section class="mx-auto w-full max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
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
      item: 'ps-0 basis-full',
      prev: 'sm:start-8',
      next: 'sm:end-8',
      container: 'ms-0'
    }"
    class="w-full"
  >
    <img
      :src="item"
      alt="Featured clothing collection"
      class="block h-[250px] w-full object-cover sm:h-[400px] lg:h-[600px]"
    />
  </UCarousel>
</section>
    <section class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 sm:py-8">
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
    <section class="bg-mist py-16 sm:py-10">
      <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8 flex items-end justify-between">
          <div>
            <h2
              class="mt-2 text-3xl font-semibold tracking-[-.05em] sm:text-4xl"
            >
              New in, naturally
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
    <section class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-10">
      <div class="mb-8 flex items-end justify-between">
        <div>
          <h2 class="mt-2 text-3xl font-semibold tracking-[-.05em] sm:text-4xl">
            The good stuff
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
