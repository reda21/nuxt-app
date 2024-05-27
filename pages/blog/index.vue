<script setup lang="ts">
  import { ref } from 'vue'

  const count = ref(0)

  const increment = () => {
    count.value++
  }

  const decrement = () => {
    count.value--
  }
</script>

<template>
  <div class="bg-gray-200 p-4">
    <p class='mb-3'>Le nombre actuel est : {{ count }}</p>
    <button @click="increment" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Incrémenter</button>
    <button @click="decrement" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Décrémenter</button>
  </div>
</template>
