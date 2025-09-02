<template>
  <section class="flex flex-col-reverse lg:flex-row gap-6 my-6">
    <AnimateWrapper>
      <div class="flex flex-1/2 justify-center items-center">
        <figure class="h-auto rounded-full overflow-hidden shadow-gray-800">
          <img
            loading="lazy"
            class="w-100 h-auto object-cover"
            src="../assets/img/avtar.png"
            alt="profile image"
          />
        </figure>
      </div>
    </AnimateWrapper>
    <AnimateWrapper>
      <div class="flex flex-1/2 justify-center items-center text-center flex-col gap-5">
        <p class="text-3xl text-white font-light m-0">Hi, My name is</p>
        <h1 class="text-7xl text-white font-bold m-0">
          <span class="text-amber-500 my-2 block">
            {{ profile.firstName }}
          </span>
        </h1>
        <h2 class="text-3xl text-white font-light m-0">and I am a Passionate</h2>

        <!-- VueWriter replaces vue-typed-js -->
        <div>
          <VueWriter
            :array="[...titles]"
            :iterations="'1'"
            class="text-2xl text-amber-300 font-bold"
            :caret="cursor"
          />
        </div>

        <div class="flex justify-center items-center gap-3">
          <Button severity="secondary" label="Download Resume" @click="downloadResume" />
          <Button as="a" label="Visit GitHub" @click="openGitHub" />
        </div>
      </div>
    </AnimateWrapper>
  </section>
</template>

<script setup>
import AnimateWrapper from '@/components/AnimateWrapper.vue'
import { useProfileStore } from '@/stores/userProfileStore'
import { computed } from 'vue'
import { VueWriter } from 'vue-writer'

const store = useProfileStore()
const profile = store.personalInfo

const titles = computed(() => store.personalInfo?.titles ?? [])

const downloadResume = () => {
  window.open(profile.resume, '_blank')
}

const openGitHub = () => {
  window.open(profile.social.github, '_blank')
}
</script>

<style lang="scss" scoped></style>
