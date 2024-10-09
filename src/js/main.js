import '../scss/style.scss';
import 'swiper/css';

import '../../node_modules/select2/dist/css/select2.min.css';
import Swiper from 'swiper';

const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {});

import select2 from 'select2';
import $ from 'jquery';
select2();
$('#lang').select2();

const swiper = new Swiper('.promo', {});
