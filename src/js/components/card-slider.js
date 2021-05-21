//без слайдера
const cardSliderThumbs = document.querySelector('.card-slider__thumbs');
const sliderImg = document.querySelector('.card-slider__main img');


if (cardSliderThumbs) {

  cardSliderThumbs.addEventListener('click', (e) => {
    if (e.target.classList.contains('card-slider__thumb')) {
      let src = e.target.querySelector('img').getAttribute('src');
      sliderImg.setAttribute('src', src);
    }
  });
}

