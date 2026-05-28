<script setup>
import SiteNavbar from './layout/SiteNavbar.vue';
import SiteFooter from './layout/SiteFooter.vue';
import HeroSection from './sections/Hero/HeroSection.vue';
import AboutSection from './sections/About/AboutSection.vue';
import ProductSection from './sections/Products/ProductSection.vue';
import AdvantagesSection from './sections/Advantages/AdvantagesSection.vue';
import WhyChooseUsSection from './sections/WhyChooseUs/WhyChooseUsSection.vue';
import ProcessSection from './sections/Process/ProcessSection.vue';
import ProjectsSection from './sections/Projects/ProjectsSection.vue';
import CTASection from './sections/CTA/CTASection.vue';
import ContactSection from './sections/Contact/ContactSection.vue';
import FloatingWhatsapp from './components/FloatingWhatsapp.vue';
</script>

<template>
  <SiteNavbar />
  <main>
    <HeroSection />
    <AboutSection />
    <ProductSection />
    <AdvantagesSection />
    <WhyChooseUsSection />
    <ProcessSection />
    <ProjectsSection />
    <CTASection />
    <ContactSection />
  </main>
  <SiteFooter />
  <FloatingWhatsapp />
</template>
