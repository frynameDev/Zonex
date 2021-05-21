
if (document.querySelector('[data-bar]')) {
  new SimpleBar(document.querySelector('.card-description__navigation'));
}

if (document.querySelector('.to-top')) {
  document.querySelector('.to-top').addEventListener('click', (e) => {
    e.preventDefault();
    scrollTo(document.querySelector('.site-container'));
  });
}


