import { gsap } from 'gsap';

const navLink = document.querySelector('.link__item.page');
const heroLink = document.querySelector('.landing__link');
const iconTop = document.querySelector('.menu-btn__burger.top');
const iconBottom = document.querySelector('.menu-btn__burger.bottom');
const menuIcon = document.querySelector('.menu-btn ');
const navMenu = document.querySelector('#dropDownMenu');
const navCloseIcon = document.querySelector('#closeMenu');
const scrollToTop = document.querySelector('#scrollToTop');
const formButton = document.querySelector('#btnSubmit');

const animationTimelines = () => {
  const tl = gsap.timeline({});

  tl.add('onLoad')
    .set(['#dropDownMenu', 'nav__grdient'], { y: -837 })
    .fromTo('#app', { autoAlpha: 0 }, { duration: 0.25, autoAlpha: 1, ease: 'power2.out' });

  return tl;
};

const toggleNavOpen = () => {
  const tl = gsap.timeline({});
  iconTop.classList.toggle('is-active');
  iconBottom.classList.toggle('is-active');

  tl.fromTo(navMenu, { y: -1 }, { duration: 0.5, y: 0, autoAlpha: 1, ease: 'power2.out' });

  return tl;
};

const toggleNavClose = () => {
  const tl = gsap.timeline({});

  iconTop.classList.toggle('is-active');
  iconBottom.classList.toggle('is-active');

  tl.to(navMenu, { duration: 0.5, y: -1, autoAlpha: 0, ease: 'power2.in' });

  return tl;
};

const pageLinkHover = () => {
  const tl = gsap.timeline({});

  tl.to('.link__item.page:hover', { scale: 1.0125, transformOrigin: '50% 50%', ease: 'power2.out' });

  return tl;
};

const heroHoverAnimationIn = () => {
  const tl = gsap.timeline({});

  tl.to(heroLink, {
    duration: 0.25,
    backgroundColor: '#fff',
    textDecoration: 'none',
    color: '#000',
    ease: 'power2.out',
  });
};

const hoverAnimationOut = () => {
  const tl = gsap.timeline({});

  tl.to(heroLink, {
    duration: 0.25,
    backgroundColor: '#0c0c0c',
    textDecoration: 'none',
    color: '#fff',
    ease: 'power2.in',
  });
};

const ctaButtonHoverIn = () => {
  const tl = gsap.timeline({});

  tl.to(formButton, { duration: 0.25, scale: 1, ease: 'power3.out' });
};

const ctaButtonHoverOut = () => {
  const tl = gsap.timeline({});

  tl.to(formButton, { duration: 0.25, scale: 0.9, ease: 'power3.out' });
};

const init = () => {
  animationTimelines();

  heroLink.addEventListener('mouseenter', heroHoverAnimationIn);
  heroLink.addEventListener('mouseleave', hoverAnimationOut);

  formButton.addEventListener('mouseenter', ctaButtonHoverIn);
  formButton.addEventListener('mouseleave', ctaButtonHoverOut);

  menuIcon.addEventListener('click', toggleNavOpen);
  navCloseIcon.addEventListener('click', toggleNavClose);
  navLink.addEventListener('mouseenter', pageLinkHover);
  scrollToTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
};

window.onload = init();
