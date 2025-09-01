<template>
  <section>
    <div class="flex justify-around my-8 items-start pb-12 flex-wrap gap-6">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="flex flex-col justify-center items-center p-4 gap-6 rounded text-white border border-gray-700 max-w-xs max-h-2xs"
      >
        <!-- Project Image -->
        <figure class="m-0 w-full h-full bg-amber-100 rounded overflow-hidden">
          <img :src="project.image" alt="project image" class="w-full h-full object-cover" />
        </figure>

        <!-- Project Details -->
        <div class="flex flex-col justify-center items-center gap-6 text-center">
          <h5 class="text-xl font-semibold">{{ project.title }}</h5>
          <p class="text-gray-400 text-sm">{{ project.subtitle }}</p>

          <!-- Tags -->
          <div class="flex gap-2 flex-wrap">
            <Tag
              v-for="(tag, idx) in project.tags"
              :key="idx"
              :value="tag"
              :severity="getTagColor(tag)"
              rounded
            />
          </div>

          <!-- Description -->
          <p class="text-sm">{{ project.description }}</p>

          <!-- Buttons -->
          <div class="flex justify-between gap-3">
            <Button
              v-if="project.github"
              as="a"
              severity="secondary"
              :label="'Visit Github'"
              :href="project.github"
              target="_blank"
              outlined
            />
            <Button
              v-if="project.demo"
              text
              as="a"
              label="Live Demo"
              :href="project.demo"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useProfileStore } from '../stores/userProfileStore'
import { storeToRefs } from 'pinia'

const profileStore = useProfileStore()
const { projects } = storeToRefs(profileStore)

const getTagColor = (tag) => {
  const colorMap = {
    Python: 'success',
    Tkinter: 'secondary',
    MySQL: 'info',
    AI: 'danger',
    Web: 'primary',
    HTML: 'info',
    CSS: 'secondary',
    JavaScript: 'warn',
    Utility: 'danger', // red
  }
  return colorMap[tag] || 'info'
}
</script>
