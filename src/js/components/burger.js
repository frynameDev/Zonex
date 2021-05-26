const burger = document.querySelector('.burger');
const navClose = document.querySelector('.nav__close');
const nav = document.querySelector('.nav');

// burger.addEventListener('click', (e) => {
//   e.currentTarget.classList.toggle('burger--active');
// });
if (burger) {
  burger.addEventListener('click', () => {
    nav.classList.add('nav--visible');
  });

  navClose.addEventListener('click', () => {
    nav.classList.remove('nav--visible');
  });

  nav.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav__link')) {
      nav.classList.remove('nav--visible');
    }
  });
}

