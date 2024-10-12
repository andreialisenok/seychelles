import '../../node_modules/select2/dist/css/select2.min.css';
import 'swiper/css/bundle';
import '../scss/style.scss';

import Swiper from 'swiper/bundle';
import select2 from 'select2';
select2();
import $ from 'jquery';

const burger = document.querySelector('.burger');
const menuMobile = document.querySelector('.menumobile');
const menuMobileWrap = document.querySelector('.menumobile__wrap');
menuMobileWrap.addEventListener('click', (e) => {
  e.stopPropagation();
});
burger.addEventListener('click', () => {
  document.querySelector('body').classList.add('is-lock');
  burger.classList.add('open');
  menuMobile.classList.add('open');
});
menuMobile.addEventListener('click', (e) => {
  document.querySelector('body').classList.remove('is-lock');
  burger.classList.remove('open');
  menuMobile.classList.remove('open');
});
$('.lang').select2();

const swiperPromo = new Swiper('.swiper-promo', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
const swiperOffers = new Swiper('.swiper-offers', {
  slidesPerView: 2.25,
  spaceBetween: 16,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 3.25,
    },
    992: {
      slidesPerView: 5.25,
      spaceBetween: 24,
    },
  },
});
if (window.innerWidth < 992) {
  const swiperHotels = new Swiper('.swiper-hotels', {
    slidesPerView: 1.5,
    // centeredSlides: true,
    // loopedSlides: 7,
    spaceBetween: 40,
    loop: true,
    watchSlidesProgress: true,
  });
}
const swiperReviews = new Swiper('.swiper-reviews', {
  slidesPerView: 1.5,
  spaceBetween: 16,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 2.5,
    },
    992: {
      slidesPerView: 3.5,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1920: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});

// accordion
const items = document.querySelectorAll('.accordion button');
function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  for (let i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  if (itemToggle === 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));
