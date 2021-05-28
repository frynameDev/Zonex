const catalogSlider = new Swiper('.hero-catalog__slider', {
  loop: true,
  slidesPerView: 1,
  containerModifierClass: 'hero-catalog-',
  navigation: {
    nextEl: '.hero-next-btn',
    prevEl: '.hero-prev-btn',
  },
  pagination: {
    el: '.hero-pag',
    type: 'bullets',
    clickable: true,
  },
});


const cardRelatedSlider = new Swiper('.card-related__slider', {
  loop: true,
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 30,
  pagination: {
    el: '.related-pag',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
    }
  }
});
