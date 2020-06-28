var slider = new Swiper('.swiper-container', {
  grabCursor: true,
  direction: 'horizontal',
  loop: true,
  speed: 1800,
  spaceBetween: 0,
  updateOnWindowResize: true,
  slidesPerView: 3,
  preloadImages: true,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});
