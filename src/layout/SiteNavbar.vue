<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import site from '../data/site.json';
import logo from '../assets/images/logo.png';

const isOpen = ref(false);
const isScrolled = ref(false);
const activeSection = ref('hero');
let observer;

const handleScroll = () => {
  isScrolled.value = window.scrollY > 24;
};

const scrollToSection = (target) => {
  const section = document.getElementById(target);
  if (!section) return;

  isOpen.value = false;
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry) {
        activeSection.value = visibleEntry.target.id;
      }
    },
    {
      rootMargin: '-22% 0px -62% 0px',
      threshold: [0.1, 0.25, 0.5]
    }
  );

  site.nav.forEach((item) => {
    const section = document.getElementById(item.target);
    if (section) observer.observe(section);
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  if (observer) observer.disconnect();
});
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-500"
    :class="isScrolled ? 'py-3' : 'py-5'"
  >
    <nav
      class="container flex items-center justify-between border px-4 py-3 shadow-2xl shadow-black/10 backdrop-blur-xl transition-all duration-500"
      :class="
        isScrolled
          ? 'border-black/10 bg-white/95 text-ink'
          : 'border-white/10 bg-black/30 text-white'
      "
    >
      <a
        href="#hero"
        class="flex min-w-0 items-center gap-2 sm:gap-3"
        @click.prevent="scrollToSection('hero')"
      >
        <img :src="logo" alt="PBI" class="h-9 w-auto shrink-0 object-contain sm:h-11" />
        <span class="min-w-0 leading-tight">
          <span class="block text-sm font-black uppercase tracking-[0.24em]"
            >Paving</span
          >
          <span class="block truncate text-xs font-semibold opacity-75"
            >Berkah Indonesia</span
          >
        </span>
      </a>

      <div class="hidden items-center gap-7 text-sm font-semibold lg:flex">
        <a
          v-for="item in site.nav"
          :key="item.target"
          :href="`#${item.target}`"
          class="transition hover:text-red-500"
          :class="activeSection === item.target ? 'text-red-500' : ''"
          @click.prevent="scrollToSection(item.target)"
        >
          {{ item.label }}
        </a>
      </div>

      <a
        :href="`https://wa.me/${site.contact.whatsapp}`"
        target="_blank"
        class="hidden items-center gap-2 bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition hover:bg-red-700 lg:flex"
      >
        <i class="fa-brands fa-whatsapp"></i>
        Konsultasi
      </a>

      <button
        class="grid h-10 w-10 shrink-0 place-items-center border border-current/20 sm:h-11 sm:w-11 lg:hidden"
        type="button"
        aria-label="Toggle menu"
        @click="isOpen = !isOpen"
      >
        <i :class="isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
      </button>
    </nav>

    <transition
      enter-active-class="duration-300 ease-out"
      enter-from-class="-translate-y-4 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-4 opacity-0"
    >
      <div
        v-if="isOpen"
        class="container mt-3 overflow-hidden border border-white/15 bg-black/55 p-2 text-white shadow-2xl shadow-black/25 backdrop-blur-2xl lg:hidden"
      >
        <a
          v-for="item in site.nav"
          :key="item.target"
          :href="`#${item.target}`"
          class="flex items-center justify-between border-b border-white/10 px-4 py-4 text-sm font-bold last:border-b-0"
          :class="
            activeSection === item.target
              ? 'bg-white/10 text-red-400'
              : 'text-white/85'
          "
          @click.prevent="scrollToSection(item.target)"
        >
          <span>{{ item.label }}</span>
          <i
            class="fa-solid fa-arrow-right text-xs transition"
            :class="activeSection === item.target ? 'opacity-100' : 'opacity-35'"
          ></i>
        </a>
      </div>
    </transition>
  </header>
</template>
