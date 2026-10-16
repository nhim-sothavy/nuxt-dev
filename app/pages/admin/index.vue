<script setup lang="ts">
const shop = useShop();
const revenue = computed(() => shop.orders.reduce((s, o) => s + o.total, 0));
const stats = computed(() => [
  { label: "Products", value: shop.products.length, sub: "In demo catalog" },
  {
    label: "Demo orders",
    value: shop.orders.length,
    sub: "Saved in this browser",
  },
  {
    label: "Low stock",
    value: shop.products.filter((p) => p.stock < 5).length,
    sub: "Below 5 units",
  },
  {
    label: "Demo revenue",
    value: "$" + revenue.value.toFixed(2),
    sub: "Not real sales",
  },
]);
</script>
<template>
  <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
    <div class="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p class="text-xs font-bold uppercase tracking-[.2em] text-brand">
          Store management · Demo
        </p>
        <h1 class="mt-2 text-4xl font-semibold tracking-tight">
          Overview<span class="text-brand">.</span>
        </h1>
      </div>
      <button
        class="rounded-full border border-gray-200 px-4 py-3 text-xs font-bold uppercase tracking-wider"
        @click="shop.resetDemo()"
      >
        Reset demo data ↺
      </button>
    </div>
    <div
      class="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-amber-800"
    >
      Demo dashboard only. Changes are stored in this browser; there is no
      database, real access control, or shared inventory.
    </div>
    <div class="mt-7 grid grid-cols-2 gap-4 lg:grid-cols-4">
      <div
        v-for="s in stats"
        :key="s.label"
        class="rounded-2xl border border-gray-100 p-5"
      >
        <p class="text-xs text-gray-500">{{ s.label }}</p>
        <p class="mt-2 text-3xl font-semibold tracking-tight">{{ s.value }}</p>
        <p class="mt-2 text-[10px] text-gray-400">{{ s.sub }}</p>
      </div>
    </div>
    <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="link in [
          {
            to: '/admin/products',
            title: 'Products',
            desc: 'Edit the catalog and prices',
            icon: '◫',
          },
          {
            to: '/admin/orders',
            title: 'Orders',
            desc: 'Review demo orders and statuses',
            icon: '▤',
          },
          {
            to: '/admin/customers',
            title: 'Customers',
            desc: 'View demo customer records',
            icon: '♙',
          },
          {
            to: '/admin/categories',
            title: 'Categories',
            desc: 'Manage collection labels',
            icon: '◇',
          },
          {
            to: '/admin/inventory',
            title: 'Inventory',
            desc: 'Adjust stock counts',
            icon: '▦',
          },
        ]"
        :key="link.to"
        :to="link.to"
        class="rounded-2xl border border-gray-100 p-6 transition hover:-translate-y-1 hover:border-brand hover:shadow-lg"
        ><span class="text-2xl text-brand">{{ link.icon }}</span>
        <h2 class="mt-4 font-semibold">{{ link.title }} ↗</h2>
        <p class="mt-2 text-sm text-gray-500">{{ link.desc }}</p></NuxtLink
      >
    </div>
    <div class="mt-8">
      <h2 class="mb-4 text-xl font-semibold">Recent demo orders</h2>
      <div
        v-if="shop.orders.length"
        class="overflow-x-auto rounded-2xl border border-gray-100"
      >
        <table class="w-full min-w-[600px] text-left text-sm">
          <thead class="bg-mist text-xs uppercase tracking-wider text-gray-500">
            <tr>
              <th class="p-4">Order</th>
              <th class="p-4">Customer</th>
              <th class="p-4">Status</th>
              <th class="p-4">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="o in shop.orders.slice(0, 5)"
              :key="o.id"
              class="border-t border-gray-100"
            >
              <td class="p-4 font-semibold">{{ o.id }}</td>
              <td class="p-4">{{ o.customer.name }}</td>
              <td class="p-4">{{ o.status }}</td>
              <td class="p-4 font-semibold">${{ o.total.toFixed(2) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <EmptyState
        v-else
        title="No demo orders yet"
        description="Place a test order from the storefront to see it here."
        to="/shop"
        action-label="Test the store"
      />
    </div>
  </div>
</template>
