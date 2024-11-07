<template>
  <div class="rounded-lg shadow-lg p-6 w-full max-w-md border border-gray-500">
    <div class="mb-6">
      <h2 class="text-2xl font-bold text-white">{{ title }}</h2>
    </div>
    <form>
      <div class="mb-4">
        <input
            type="text"
            placeholder="Username"
            class="bg-background border border-gray-100 rounded-lg px-4 py-2 text-white w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div class="mb-4">
        <input
            type="password"
            placeholder="Password"
            class="bg-background border border-gray-100 rounded-lg px-4 py-2 text-white w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div class="mb-4">
        <button
            type="submit"
            class="bg-violet-700 hover:bg-violet-800 rounded-lg px-4 py-2 text-white w-full focus:outline-none focus:ring-2 focus:ring-violet-500"
        >
          Login
        </button>
      </div>
    </form>
    <div class="flex justify-between items-center">
      <a href="#" class="text-violet-400 hover:text-violet-300 hover:underline">Forgot Password?</a>
    </div>
  </div>
</template>

<script setup>
const title = 'Login'
</script>