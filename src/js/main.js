import '../../node_modules/select2/dist/css/select2.min.css';
import 'swiper/css/bundle';
import '../scss/style.scss';

import Swiper from 'swiper/bundle';
import select2 from 'select2';
select2();
import $ from 'jquery';

const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {});

$('#lang').select2();

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
});
const swiperReviews = new Swiper('.swiper-reviews', {
  slidesPerView: 1.5,
  spaceBetween: 16,
  loop: true,
});
const swiperHotels = new Swiper('.swiper-hotels', {
  slidesPerView: 1.2,
  spaceBetween: 40,
  loop: true,
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
