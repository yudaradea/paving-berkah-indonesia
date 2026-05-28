<script setup>
defineProps({
  eyebrow: String,
  title: String,
  description: String,
  description2: String,
  description3: String,
  light: Boolean,
  wide: Boolean,
});
</script>

<template>
  <div :class="wide ? 'max-w-none' : 'max-w-3xl'" data-aos="fade-up">
    <p
      class="text-[13px] font-black uppercase tracking-[0.22em] text-red-600 md:text-sm md:tracking-[0.28em]"
    >
      {{ eyebrow }}
    </p>
    <h2
      class="mt-4 text-[29px] font-black leading-tight md:text-5xl"
      :class="light ? 'text-white' : 'text-ink'"
    >
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="mt-5 text-[15px] leading-8 text-justify md:text-base"
      :class="light ? 'text-white/65' : 'text-slate-600'"
    >
      {{ description }}
    </p>
    <p
      v-if="description2"
      class="mt-5 text-[15px] leading-8 text-justify md:text-base"
      :class="light ? 'text-white/65' : 'text-slate-600'"
    >
      {{ description2 }}
    </p>
    <p
      v-if="description3"
      class="mt-5 text-[15px] leading-8 md:text-base"
      :class="light ? 'text-white/65' : 'text-slate-600'"
    >
      {{ description3 }}
    </p>
  </div>
</template>
