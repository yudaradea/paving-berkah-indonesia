import hero from '../assets/images/hero.png';
import tentangKami from '../assets/images/tentangKami.jpg';

const images = {
  'hero.png': hero,
  'tentangKami.jpg': tentangKami,
};

export const imageUrl = (fileName) => images[fileName] || hero;
