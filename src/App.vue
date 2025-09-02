<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AnimateWrapper from './components/AnimateWrapper.vue'
</script>

<template>
  <AnimateWrapper>
    <main class="container-fluid min-h-screen bg-gray-900 py-6">
      <AppHeader />
      <RouterView class="px-6" />
      <AppFooter />
    </main>
  </AnimateWrapper>
</template>

<style scoped></style>
