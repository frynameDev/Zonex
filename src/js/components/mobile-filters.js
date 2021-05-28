const mobileFiltersOpen = document.querySelector('.catalog-mobile-filters');
const catalogFilters = document.querySelector('.catalog-filters');

if (mobileFiltersOpen) {
  let openFilters = false;
  mobileFiltersOpen.addEventListener('click', (e) => {
    if (!openFilters) {
      mobileFiltersOpen.querySelector('span').textContent = 'Закрыть';
      catalogFilters.classList.add('catalog-filters--open');
      openFilters = true;
    } else {
      mobileFiltersOpen.querySelector('span').textContent = 'Фильтры';
      catalogFilters.classList.remove('catalog-filters--open');
      openFilters = false;
    }
  });
}
