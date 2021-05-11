//mainslider
const bannerSlider = new Swiper('.banner-slider', {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.banner-pag',
    type: 'bullets',
    clickable: true,
  },
});
//
//catalog-slider
const catalogSlider = new Swiper('.hero-catalog__slider', {
  loop: true,
  slidesPerView: 1,

});
//
//catalog-filter-toggle
const catalogFiltersTop = document.querySelectorAll('.catalog-filter__top');

catalogFiltersTop.forEach(el => {
  el.addEventListener('click', (e) => {
    e.currentTarget.closest('.catalog-filter').classList.toggle('catalog-filter--open');
  });
});
//
// hide filters
const hideFilters = document.querySelector('.hide-filters');

hideFilters.addEventListener('click', (e) => {
  catalogFiltersTop.forEach(el => {
    el.closest('.catalog-filter').classList.remove('catalog-filter--open');
  });
});

//

// close
const marketing = document.querySelector('.marketing');

if (marketing) {
  let counter = 0;
  let delay = 4000;

  const data = [
    {
      title: 'Title of product 1',
      where: 'Moscow, Russia'
    },
    {
      title: 'Title of product 2',
      where: 'Kiev, Ukraine'
    },
    {
      title: 'Title of product 3',
      where: 'Rome, Italy'
    },
  ];

  const closeMarketing = () => {
    marketing.classList.remove('marketing--visible')
  }

  const changeMarketingData = () => {
    marketing.classList.remove('marketing--visible')

    setTimeout(() => {
      marketing.classList.add('marketing--visible')
    }, delay - 2000);


    const stringTitle = `${data[counter].title}`;
    const stringWhere = `15 minutes ago ${data[counter].where}`;

    marketing.querySelector('.marketing__title').textContent = stringTitle;
    marketing.querySelector('.marketing__when-from').textContent = stringWhere;

    counter++;

    if (counter === data.length) {
      counter = 0;
    }
  }

  changeMarketingData();

  setInterval(changeMarketingData, delay);

  marketing.addEventListener('click', (e) => {
    if (e.target.classList.contains('marketing__close')) {
      closeMarketing();
    }
  });
}


//
