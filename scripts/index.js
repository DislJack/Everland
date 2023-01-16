let offset = 0;
let counter = 1;
const sliderLine = document.querySelector('.slider-line');
const sliderPrev = document.querySelector('#slider-prev');
const sliderNext = document.querySelector('#slider-next');
const sliderCounter = document.querySelector('.slider-counter');
const sliderTitle = document.querySelector('.slider-title')

const imageDescription = ['1.Мы работаем с 2016 года по России и СНГ и помогаем людям с инвалидностью устойчиво интегрироваться в открытый рынок труда', '2.Социальный проект', '3.Помощь и адаптация', '4.Трудоустройство инвалидов', '5.Поддержка в сложных жизненных ситуациях', '6.Одним из важнейших направлений государственной политики в сфере социальной защиты населения является повышение эффективности, качества и доступности реабилитационных услуг для тяжелых инвалидов различных категорий и членов их семей.'];

sliderCounter.textContent = counter + '/6';
sliderTitle.textContent = imageDescription[0];

sliderPrev.addEventListener('click', function(evt){
  offset -= 520;
  counter -= 1;
  if (offset < 0) {
    offset = 2600;
    counter = 6;}
  sliderLine.style.left = -offset + 'px';
  sliderCounter.textContent = counter + '/6';
  sliderTitle.textContent = imageDescription[counter - 1];
});

sliderNext.addEventListener('click', function(evt){
  offset += 520;
  counter += 1;
  if (offset > 2600) {
    offset = 0;
    counter = 1}
  sliderLine.style.left = -offset + 'px';
  sliderCounter.textContent = counter + '/6';
  sliderTitle.textContent = imageDescription[counter - 1];
});



