<template>
  <section>
    <div class="flex justify-between my-12 items-center pb-12 flex-wrap">
      <div
        class="flex flex-col justify-center items-center p-4 gap-4 rounded text-white border border-gray-700 max-w-2xs"
      >
        <figure class="m-0 w-64 h-40 bg-amber-100 rounded">
          <img src="" />
        </figure>
        <div class="flex flex-col justify-center items-center gap-4">
          <h5 class="text-xl">Project Title</h5>
          <div class="flex gap-4">
            <Badge value="In Progress" severity="info" />
            <Badge value="In Progress" severity="info" />
          </div>
          <p class="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ullam suscipit
            iusto?
          </p>
          <div class="flex justify-between gap-3">
            <Button severity="secondary" label="Visit Github" />
            <Button label="Live Demo" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
