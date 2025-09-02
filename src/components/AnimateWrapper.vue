<template>
  <Transition :name="name" :mode="mode" :appear="appear">
    <slot />
  </Transition>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: 'fade-slide', // default animation name
  },
  mode: {
    type: String,
    default: '', // e.g., 'out-in'
  },
  appear: {
    type: Boolean,
    default: true,
  },
})
</script>

<style scoped>
/* Fade Slide -------------------------------------- */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.8s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
/* ZOOM ---------------------------------------- */
.zoom-enter-active,
.zoom-leave-active {
  transition: all 0.6s ease;
}

.zoom-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.zoom-enter-to {
  opacity: 1;
  transform: scale(1);
}

/* Fade-in-Left -------------------------------*/
.fade-in-left-enter-active,
.fade-in-left-leave-active {
  transition: all 0.8s ease;
}

.fade-in-left-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.fade-in-left-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.fade-in-left-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.fade-in-left-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

/* Fade-in-Right -------------------------------*/
.fade-in-right-enter-active,
.fade-in-right-leave-active {
  transition: all 0.8s ease;
}
.fade-in-right-enter-from {
  opacity: 0;
  transform: translateX(50px);
}
.fade-in-right-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.fade-in-right-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.fade-in-right-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>
