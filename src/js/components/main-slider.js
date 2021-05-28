const bannerSlider = new Swiper('.banner-slider', {
  loop: true,
  containerModifierClass: 'banner-slider-',
  slidesPerView: 1,
  pagination: {
    el: '.banner-pag',
    type: 'bullets',
    clickable: true,
  },
});
