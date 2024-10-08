import '../scss/style.scss';

const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {});

const inputVal = document.querySelectorAll('.inputVal');
inputVal.forEach((input) => {
  input.addEventListener('input', (e) => {
    console.log(e.target.value);
    console.log(e);
  });
});
