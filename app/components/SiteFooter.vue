<template>
  <footer class="mt-20 bg-[#101114] text-white">
    <UContainer>
         <div class=" grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
      <div class="sm:col-span-2 lg:col-span-1">
        <NuxtLink to="/" class="text-3xl font-extrabold tracking-[-.08em]"
          >VY<span class="text-blue-400">.</span></NuxtLink
        >
        <p class="mt-4 max-w-xs text-sm leading-6 text-gray-400">
          Thoughtful everyday pieces. A little less noise, a lot more style.
        </p>
        <p class="mt-5 text-xs uppercase tracking-[.2em] text-gray-500">
          Wear your everyday.
        </p>
      </div>
      <div>
        <h3 class="mb-4 text-xs font-bold uppercase tracking-[.18em]">
          Explore
        </h3>
        <div class="flex flex-col gap-3 text-sm text-gray-400">
          <NuxtLink to="/shop">Shop all</NuxtLink
          ><NuxtLink to="/new-arrivals">New arrivals</NuxtLink
          ><NuxtLink to="/best-sellers">Best sellers</NuxtLink
          ><NuxtLink to="/women">Women</NuxtLink
          ><NuxtLink to="/men">Men</NuxtLink
          ><NuxtLink to="/accessories">Accessories</NuxtLink>
        </div>
      </div>
      <div>
        <h3 class="mb-4 text-xs font-bold uppercase tracking-[.18em]">Help</h3>
        <div class="flex flex-col gap-3 text-sm text-gray-400">
          <NuxtLink to="/contact">Contact us</NuxtLink
          ><NuxtLink to="/faq">FAQs</NuxtLink
          ><NuxtLink to="/shipping-returns">Shipping & returns</NuxtLink
          ><NuxtLink to="/account/orders">Order history</NuxtLink>
        </div>
      </div>
      <div>
        <h3 class="mb-4 text-xs font-bold uppercase tracking-[.18em]">
          The fine print
        </h3>
        <div class="flex flex-col gap-3 text-sm text-gray-400">
          <NuxtLink to="/about">Our story</NuxtLink
          ><NuxtLink to="/privacy">Privacy policy</NuxtLink
          ><NuxtLink to="/terms">Terms & conditions</NuxtLink
          ><NuxtLink to="/admin">Admin demo ↗</NuxtLink>
        </div>
        <p class="mt-5 text-xs leading-5 text-gray-500">
          Demo store only. Orders and account details stay in this browser.
        </p>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div
        class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-between gap-2 py-5 text-xs text-gray-500 sm:flex-row"
      >
        <span>© {{ new Date().getFullYear() }} VY Clothing Store</span
        ><span>Made for everyday style · Frontend demo</span>
      </div>
    </div>

    </UContainer>
   
  </footer>
</template>
