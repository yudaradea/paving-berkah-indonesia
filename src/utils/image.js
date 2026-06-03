import hero from '../assets/images/hero.jpeg';
import pavingBata from '../assets/images/paving-bata.jpg';
import pavingGrassBlock from '../assets/images/paving-grass-block.jpg';
import pavingHexagon from '../assets/images/paving-hexagon.jpg';
import pavingKastin from '../assets/images/paving-kastin.webp';
import pavingHeavyDutty from '../assets/images/paving-heavy-dutty.jpg';
import tentangKami from '../assets/images/tentangKami.jpg';
import pavingAreaParkir from '../assets/images/paving-parkir.jpg';
import pavingHunian from '../assets/images/paving-hunian.jpg';
import pavingHalamanIndustri from '../assets/images/paving-halaman-industri.png';
import pasangPaving from '../assets/images/pasang-paving.jpg';

const images = {
  'hero.jpeg': hero,
  'tentangKami.jpg': tentangKami,
  'paving-bata.jpg': pavingBata,
  'paving-grass-block.jpg': pavingGrassBlock,
  'paving-hexagon.jpg': pavingHexagon,
  'paving-kastin.jpg': pavingKastin,
  'paving-heavy-dutty.jpg': pavingHeavyDutty,
  'paving-parkir.jpg': pavingAreaParkir,
  'paving-hunian.jpg': pavingHunian,
  'paving-halaman-industri.png': pavingHalamanIndustri,
  'pasang-paving.jpg': pasangPaving,
};

export const imageUrl = (fileName) => images[fileName] || hero;
