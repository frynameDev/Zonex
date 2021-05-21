const catalogSlider = new Swiper('.hero-catalog__slider', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.hero-next-btn',
    prevEl: '.hero-prev-btn',
  },
});


const cardRelatedSlider = new Swiper('.card-related__slider', {
  loop: true,
  slidesPerView: 4,
  slidesPerGroup: 2,
  spaceBetween: 30,
  pagination: {
    el: '.related-pag',
    type: 'bullets',
    clickable: true,
  },
});
