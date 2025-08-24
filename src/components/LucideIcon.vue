<template>
  <component :is="iconComponent" v-bind="iconProps" class="lucide-icon" />
</template>

<script setup>
import { computed } from 'vue'
import * as lucideIcons from 'lucide-vue-next'
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: [String, Number],
    default: '1em',
  },
  color: {
    type: String,
    default: 'currentColor',
  },
})
const iconComponent = computed(() => lucideIcons[props.name])

const iconProps = computed(() => ({
  size: props.size,
  color: props.color,
  strokeWidth: 1.5,
}))
</script>

<style scoped>
.lucide-icon {
  display: inline-block;
  vertical-align: middle;
}
</style>
