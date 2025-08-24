<template>
  <header class="px-6">
    <Menubar :model="items" v-ripple>
      <template #item="{ item, props }">
        <a
          v-bind="props.action"
          class="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 rounded"
        >
          <LucideIcon :name="item.icon" size="18" />
          <span>{{ item.label }}</span>
        </a>
      </template>
    </Menubar>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LucideIcon from './LucideIcon.vue'

const router = useRouter()

const items = ref([
  {
    label: 'Home',
    icon: 'Home',
    command: () => router.push('/'),
  },
  // {
  //   label: 'About',
  //   icon: 'User',
  //   command: () => router.push('/about'),
  // },
  {
    label: 'Skills',
    icon: 'Cog',
    command: () => router.push('/skills'),
  },
  {
    label: 'Projects',
    icon: 'Briefcase',
    command: () => router.push('/projects'),
  },
  {
    label: 'Contact',
    icon: 'MessageSquare',
    command: () => router.push('/contact'),
  },
])
</script>

<style scoped></style>
