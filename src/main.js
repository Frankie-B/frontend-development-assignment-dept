import { gsap } from 'gsap';

const mainTimeline = () => {
  const tl = gsap.timeline({});

  console.log('Animation is loaded!');

  tl.add('onLoad').fromTo('#app', { autoAlpha: 0 }, { duration: 0.25, autoAlpha: 1, ease: 'power2.out' });

  return tl;
};

const init = () => {
  mainTimeline();
  console.log('DOM fully loaded and parsed', Animation);
};

window.onload = init();
