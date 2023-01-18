let offsetEverlandSlider = 0;
let counterEverlandSlider = 1;


const everland = document.querySelector('.everland');
const sliderLineEverland = everland.querySelector('.slider-line');
const prevEverlandSlider = everland.querySelector('#prev-slide');
const nextEverlandSlider = everland.querySelector('#next-slide');
const sliderCounterEverland = everland.querySelector('.slider-counter');
const sliderTitleEverland = everland.querySelector('.slider-title');
const deductibleSliderEverland = everland.querySelector('.slider');



sliderCounterEverland.textContent = counterEverlandSlider + '/6';
sliderTitleEverland.textContent = imageDescriptionEverland[0];

prevEverlandSlider.addEventListener('click', () => {
  offsetEverlandSlider -= deductibleSliderEverland.offsetWidth;
  counterEverlandSlider -= 1;
  if (offsetEverlandSlider < 0) {
    offsetEverlandSlider = 2600;
    counterEverlandSlider = 6;}
  sliderLineEverland.style.left = -offsetEverlandSlider + 'px';
  sliderCounterEverland.textContent = counterEverlandSlider + '/6';
  sliderTitleEverland.textContent = imageDescriptionEverland[counterEverlandSlider - 1];
});

nextEverlandSlider.addEventListener('click', () => {
  offsetEverlandSlider += 520;
  counterEverlandSlider += 1;
  if (offsetEverlandSlider > 2600) {
    offsetEverlandSlider = 0;
    counterEverlandSlider = 1}
  sliderLineEverland.style.left = -offsetEverlandSlider + 'px';
  sliderCounterEverland.textContent = counterEverlandSlider + '/6';
  sliderTitleEverland.textContent = imageDescriptionEverland[counterEverlandSlider - 1];
});



