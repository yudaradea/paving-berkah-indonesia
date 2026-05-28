import hero from '../assets/images/hero.png';
import tentangKami from '../assets/images/tentangKami.jpg';

const images = {
  'hero.png': hero,
  'tentangKami.jpg': tentangKami,
  'batu-base-course.jpg': hero,
  'batu-split-23.jpg': tentangKami,
  'pasir-cuci-cilegon.jpg': hero,
  'pasir-jalupang.jpg': tentangKami,
  'slagsemen1-1.webp': hero,
  'pasir-bangka.png': tentangKami,
  'dokumentasi-1.jpeg': hero,
  'dokumentasi-3.jpeg': tentangKami,
  'dokumentasi-5.jpeg': hero,
};

export const imageUrl = (fileName) => images[fileName] || hero;
