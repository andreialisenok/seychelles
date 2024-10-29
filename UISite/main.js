var burger = document.querySelector('.burger');
var menuMobile = document.querySelector('.menumobile');
var menuMobileWrap = document.querySelector('.menumobile__wrap');
menuMobileWrap.addEventListener('click', function (e) {
  e.stopPropagation();
});
burger.addEventListener('click', function () {
  document.querySelector('body').classList.toggle('is-lock');
  burger.classList.toggle('open');
  menuMobile.classList.toggle('open');
});
menuMobile.addEventListener('click', function (e) {
  document.querySelector('body').classList.remove('is-lock');
  burger.classList.remove('open');
  menuMobile.classList.remove('open');
});
const swiperCards = new Swiper('.swiper-cards', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 16,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const swiperPromo = new Swiper('.swiper-promo', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
const swiperOffers = new Swiper('.swiper-offers', {
  slidesPerView: 2.2,
  spaceBetween: 16,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 3.2,
    },
    992: {
      slidesPerView: 5.2,
      spaceBetween: 24,
    },
  },
});

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
const accordionItems = document.querySelectorAll('.accordion button');
function toggleAccordion() {
  var itemToggle = this.getAttribute('aria-expanded');
  for (var i = 0; i < accordionItems.length; i++) {
    accordionItems[i].setAttribute('aria-expanded', 'false');
  }
  if (itemToggle === 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}
accordionItems.forEach(function (item) {
  return item.addEventListener('click', toggleAccordion);
});
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active');
    });
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');
    target.classList.add('active');
  });
});
(function () {
  'use strict';

  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia('(min-width:992px)');

  // keep track of swiper instances to destroy later
  let swiperHotels;

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const breakpointChecker = function () {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      if (swiperHotels !== undefined) swiperHotels.destroy(true, true);

      // or/and do nothing
      return;

      // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
      // fire small viewport version of swiper
      return enableSwiper();
    }
  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const enableSwiper = function () {
    swiperHotels = new Swiper('.swiper-hotels', {
      slidesPerView: 1.2,
      // centeredSlides: true,
      // loopedSlides: 7,
      spaceBetween: 40,
      loop: true,
      watchSlidesProgress: true,
    });
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();

const modals = document.querySelector('.modals');
const modalRequest = document.querySelector('.modals__request');
const modalReview = document.querySelector('.modals__review');
const btnCall = document.querySelectorAll('.btn--call');
const modalCLose = document.querySelectorAll('.modals__close');

btnCall.forEach((btn) => {
  btn.addEventListener('click', () => {
    modals.classList.add('open');
    modalRequest.classList.add('open');
  });
});
modalRequest.addEventListener('click', (e) => {
  e.stopPropagation();
});
modalReview.addEventListener('click', (e) => {
  e.stopPropagation();
});
modals.addEventListener('click', (e) => {
  e.preventDefault();
  modals.classList.remove('open');
  modalRequest.classList.remove('open');
  modalReview.classList.remove('open');
});
modalCLose.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    modals.classList.remove('open');
    modalRequest.classList.remove('open');
    modalReview.classList.remove('open');
  });
});
function formatState(state) {
  if (!state.id) {
    return state.text;
  }
  var $state = $(
    '<span><img src="UISite/images/icons/flags/flag-' +
      state.title.toLowerCase() +
      '.svg"/> ' +
      '</span>'
  );
  return $state;
}

$('.lang').select2({
  minimumResultsForSearch: -1,
  templateResult: formatState,
  templateSelection: formatState,
});
