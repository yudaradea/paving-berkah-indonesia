<script setup>
const { title } = defineProps({
  title: String,
});
</script>

<template>
  <div class="text-center">
    <h1
      class="inline-flex text-xl md:text-3xl font-bold border-b-[3px] pb-1 border-primary uppercase tracking-wide"
    >
      {{ title }}
    </h1>
  </div>
</template>
