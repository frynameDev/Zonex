const catalogColumns = document.querySelector('.catalog-columns__list');
const catalogGridContent = document.querySelector('.catalog-grid__content');
const customSelect = document.querySelectorAll('.custom-select');
const freeDeliveryBtn = document.querySelector('.free-delivery__btn');

if (document.querySelector('.catalog')) {

  freeDeliveryBtn.addEventListener('click', (e) => {
    e.currentTarget.closest('.free-delivery').style.display = 'none';
  });



  catalogColumns.addEventListener('click', (e) => {
    if (e.target.classList.contains('.catalog-columns__btn') || e.target.closest('.catalog-columns__item')) {
      let columns = e.target.dataset.columns;
      let columnsBtn = document.querySelectorAll('.catalog-columns__btn');

      columnsBtn.forEach(el => {
        el.classList.remove('catalog-columns__btn--current');
      });

      e.target.classList.add('catalog-columns__btn--current');

      catalogGridContent.dataset.gridColumns = columns;
    }
  });

}

// custom select

if (customSelect) {
  customSelect.forEach(el => {
    el.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('custom-select--open');

      if (e.target.classList.contains('custom-select__item')) {
        let text = e.target.textContent;
        e.currentTarget.querySelector('.custom-select__top').textContent = text;
      }
    });
  });
}




