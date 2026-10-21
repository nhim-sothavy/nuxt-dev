
<script setup lang="ts">
import { ref } from 'vue'

const productName = ref('')
const price = ref<number | undefined>(undefined)

const emit = defineEmits<{
  submit: [product: { name: string; price: number }]
}>()

function handleSubmit() {
  if (!productName.value.trim() || price.value == null || price.value < 0) {
    return
  }

  emit('submit', {
    name: productName.value.trim(),
    price: price.value
  })
}
</script>

<template>
  <form
    class="space-y-5 rounded-xl border border-gray-200 bg-white p-6"
    @submit.prevent="handleSubmit"
  >
    <h2 class="text-xl font-bold text-gray-900">
      Add Product
    </h2>

    <div>
      <label for="product-name" class="mb-2 block text-sm font-medium">
        Product Name
      </label>
      <input
        id="product-name"
        v-model="productName"
        type="text"
        required
        placeholder="Enter product name"
        class="w-full rounded-lg border border-gray-300 px-4 py-3"
      />
    </div>

    <div>
      <label for="product-price" class="mb-2 block text-sm font-medium">
        Price ($)
      </label>
      <input
        id="product-price"
        v-model.number="price"
        type="number"
        min="0"
        step="0.01"
        required
        placeholder="0.00"
        class="w-full rounded-lg border border-gray-300 px-4 py-3"
      />
    </div>

    <button
      type="submit"
      class="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
    >
      Save Product
    </button>
  </form>
</template>
