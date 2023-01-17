let offset = 0;
let counter = 1;
const sliderLine = document.querySelector('.slider-line');
const sliderPrev = document.querySelector('#slider-prev');
const sliderNext = document.querySelector('#slider-next');
const sliderCounter = document.querySelector('.slider-counter');
const sliderTitle = document.querySelector('.slider-title')



sliderCounter.textContent = counter + '/6';
sliderTitle.textContent = imageDescriptionEverland[0];

sliderPrev.addEventListener('click', function(evt){
  offset -= 520;
  counter -= 1;
  if (offset < 0) {
    offset = 2600;
    counter = 6;}
  sliderLine.style.left = -offset + 'px';
  sliderCounter.textContent = counter + '/6';
  sliderTitle.textContent = imageDescriptionEverland[counter - 1];
});

sliderNext.addEventListener('click', function(evt){
  offset += 520;
  counter += 1;
  if (offset > 2600) {
    offset = 0;
    counter = 1}
  sliderLine.style.left = -offset + 'px';
  sliderCounter.textContent = counter + '/6';
  sliderTitle.textContent = imageDescriptionEverland[counter - 1];
});



