<template>
  <section class="my-12">
    <!-- <h5 class="text-2xl mb-4">Contact</h5> -->
    <AnimateWrapper name="zoom">
      <div
        class="flex justify-center items-center flex-wrap gap-8 py-6 text-white border-y border-gray-700"
      >
        <div
          v-ripple
          v-for="contact in profile.personalInfo.contacts"
          :key="contact.type"
          class="flex flex-col justify-center items-center gap-6 p-6 bg-gray-700/30 rounded-lg drop-shadow-md drop-shadow-gray-700/40 transition w-64"
        >
          <figure>
            <img
              loading="lazy"
              class="w-10 h-10"
              :src="contact.icon"
              :alt="`${contact.type} Icon`"
            />
          </figure>
          <p class="text-sm text-center">
            <a
              v-if="contact.link"
              :href="contact.link"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:underline text-base text-teal-400 font-medium"
            >
              {{ contact.value }}
            </a>
            <span class="text-teal-400 font-medium" v-else>{{ contact.value }}</span>
          </p>
        </div>
      </div>
    </AnimateWrapper>
  </section>
</template>

<script setup>
import AnimateWrapper from '@/components/AnimateWrapper.vue'
import { useProfileStore } from '../stores/userProfileStore'

const profile = useProfileStore()
</script>
