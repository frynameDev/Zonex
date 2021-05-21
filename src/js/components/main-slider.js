const bannerSlider = new Swiper('.banner-slider', {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.banner-pag',
    type: 'bullets',
    clickable: true,
  },
});
