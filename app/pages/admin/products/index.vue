
<script setup lang="ts">
const shop = useShop()

const q = ref('')
const category = ref('All')

const list = computed(() => {
  return shop.products.filter((p) => {
    const matchesSearch =
      !q.value ||
      p.name.toLowerCase().includes(q.value.toLowerCase())

    const matchesCategory =
      category.value === 'All' ||
      p.category === category.value

    return matchesSearch && matchesCategory
  })
})

function remove(id: string) {
  if (!confirm('Delete this demo product?')) {
    return
  }

  shop.products = shop.products.filter((p) => p.id !== id)
  shop.saveProducts()
  shop.notify('Demo product deleted.')
}
</script>

<template>
  <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
    <div class="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p class="text-xs font-bold uppercase tracking-[.2em] text-brand">
          Admin demo
        </p>

        <h1 class="mt-2 text-4xl font-semibold tracking-tight">
          Products<span class="text-brand">.</span>
        </h1>
      </div>

      <NuxtLink
        to="/admin/products/create"
        class="rounded-full bg-ink px-5 py-3 text-xs font-bold uppercase tracking-wider text-white"
      >
        + Add product
      </NuxtLink>
    </div>

    <div class="mt-6 flex flex-wrap gap-3">
      <input
        v-model="q"
        class="min-w-0 flex-1 rounded-full border border-gray-200 px-4 py-3 text-sm"
        placeholder="Search products"
      />

      <select
        v-model="category"
        class="rounded-full border border-gray-200 bg-white px-4 py-3 text-sm"
      >
        <option value="All">All</option>

        <option
          v-for="c in [...new Set(shop.products.map(p => p.category))]"
          :key="c"
          :value="c"
        >
          {{ c }}
        </option>
      </select>
    </div>

    <div class="mt-6 overflow-x-auto rounded-2xl border border-gray-100">
      <table class="w-full min-w-[760px] text-left text-sm">
        <thead class="bg-mist text-xs uppercase tracking-wider text-gray-500">
          <tr>
            <th class="p-4">Product</th>
            <th class="p-4">Category</th>
            <th class="p-4">Price</th>
            <th class="p-4">Stock</th>
            <th class="p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="p in list"
            :key="p.id"
            class="border-t border-gray-100"
          >
            <td class="p-4">
              <div class="flex items-center gap-3">
                <img
                  :src="p.images[0]"
                  :alt="p.name"
                  class="h-12 w-10 rounded-lg object-cover"
                />

                <div>
                  <p class="font-semibold">{{ p.name }}</p>
                  <p class="text-xs text-gray-400">{{ p.id }}</p>
                </div>
              </div>
            </td>

            <td class="p-4">{{ p.category }}</td>

            <td class="p-4">
              ${{ shop.price(p).toFixed(2) }}
            </td>

            <td
              class="p-4"
              :class="p.stock < 5 ? 'font-bold text-red-600' : ''"
            >
              {{ p.stock }}
            </td>

            <td class="p-4">
              <NuxtLink
                :to="`/admin/products/${p.id}/edit`"
                class="mr-3 font-semibold text-brand"
              >
                Edit
              </NuxtLink>

              <button
                type="button"
                class="text-red-600"
                @click="remove(p.id)"
              >
                Delete
              </button>
            </td>
          </tr>

          <tr v-if="list.length === 0">
            <td colspan="5" class="p-8 text-center text-gray-500">
              No products found.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="mt-3 text-xs text-gray-500">
      {{ list.length }} product(s) · Changes are saved to localStorage.
    </p>

    <NuxtLink
      to="/admin"
      class="mt-6 inline-block text-xs font-semibold text-gray-500"
    >
      ← Back to dashboard
    </NuxtLink>
  </div>
</template>
