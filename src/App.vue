<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <main class="container-fluid min-h-screen bg-gray-900 py-6">
    <AppHeader />
    <RouterView class="px-6" />
    <AppFooter />
  </main>
</template>

<style scoped></style>
