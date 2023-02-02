import SwiperCore, {
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
  Virtual,
} from "swiper";
SwiperCore.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
]);

export const clientSliderProps = {
  loop: true,
  spaceBetween: 30,
  autoplay: true,
  speed: 500,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    700: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
};
export const testimonialSliderProps = {
  loop: true,
  spaceBetween: 30,
  autoplay: true,
  speed: 500,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    700: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
};
export const heroSlider = {
  loop: true,
  spaceBetween: 0,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 500,
  effect: "fade",
};
