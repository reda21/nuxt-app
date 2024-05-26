<script setup lang="ts">
import Navbar from "~/components/Navbar.vue"

const count = ref(1) // ref is auto-imported

const inscrement = () => count.value++
</script>


<template>
  <div>
    <Navbar />   <!-- Affiche les pages définies par le routeur -->
    <NuxtPage />
  </div>
</template>
