<template>
  <section>
    <div class="flex-col my-6 flex gap-4 rounded text-white">
      <div
        v-for="(category, i) in skills"
        :key="i"
        class="flex flex-col gap-6 p-4 text-white border-b-1 border-gray-700/50"
      >
        <h5 class="text-xl font-semibold">{{ category.title }}</h5>
        <div class="flex gap-4 justify-around flex-wrap p-3">
          <div
            v-for="(skill, j) in category.items"
            :key="j"
            class="flex flex-col justify-center items-center gap-2 p-4"
          >
            <figure class="m-0">
              <img class="w-10 h-10" :src="skill.image" :alt="skill.name" />
            </figure>
            <p>{{ skill.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useProfileStore } from '../stores/userProfileStore'

const { skills } = useProfileStore()
</script>

<style lang="scss" scoped></style>
