import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  effect: 'creative',
  loop: true, //для безкінечного повтору
  centeredSlides: true,
  slidesPerView: 1,
  freeMode: false,
  allowSlideNext: true,
  allowSlidePrev: true,
  allowTouchMove: false,
  scrollbar: true,
  speed: 700,
  createElements: true,
  effect: 'slide', // для того щоб працював слайдер і кнопки
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
  autoplay: {
    delay: 5000,
  },
});
