<!-- components/ServerSideComponent.vue -->
<template>
    <div>
      <h1>Server-Side Rendered Component</h1>
      <p>Data: {{ data?.title }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useAsyncData } from 'nuxt/app'
  import { ref } from 'vue'
  
  const { data } = await useAsyncData('fetchData', () =>
    $fetch('https://jsonplaceholder.typicode.com/posts/1')
  )

  console.info("data", data)
  </script>
  
  