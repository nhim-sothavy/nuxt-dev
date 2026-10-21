
<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'default'
})

const email = ref('')
const password = ref('')

function handleLogin() {
  console.log('Login submitted:', email.value)
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-50 px-4">
    <div class="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
      <h1 class="mb-2 text-3xl font-bold text-gray-900">
        Welcome Back
      </h1>

      <p class="mb-8 text-gray-500">
        Sign in to your account
      </p>

      <form class="space-y-5" @submit.prevent="handleLogin">
        <div>
          <label for="email" class="mb-2 block text-sm font-medium">
            Email Address
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            placeholder="you@example.com"
            class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label for="password" class="mb-2 block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            placeholder="Enter your password"
            class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          class="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>

      <p class="mt-6 text-center text-sm text-gray-500">
        Don't have an account?
        <NuxtLink to="/register" class="font-semibold text-blue-600 hover:underline">
          Register
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
