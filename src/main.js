import { createApp } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import App from './App.vue';

const app = createApp(App);

app.mount('#app');

AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 45,
  delay: 0,
  anchorPlacement: 'top-bottom',
  disable: false
});
