// Переменные Everland
const everlandSliderImageTemplate = document.querySelector('#everland-slider-image').content;
const everland = document.querySelector('.everland');
const everlandSlider = everland.querySelector('.slider_theme-everland');
const prevEverlandSlider = everland.querySelector('#prev-slide');
const nextEverlandSlider = everland.querySelector('#next-slide');
const sliderCounterEverland = everland.querySelector('.slider__counter');
const sliderTitleEverland = everland.querySelector('.slider__title');
let sliderImageEverland;
let counterEverland = 1;
let numberImageEverland = 1;

// Функция создания изображения Everland
function createEverlandSliderImage (firstImage, secondImage) {
  const sliderImageContainer = everlandSliderImageTemplate.querySelector('.slider__image-container').cloneNode(true);
  sliderImageContainer.querySelector('#first-image').style.backgroundImage = imageEverlandSlider[firstImage];
  sliderImageContainer.querySelector('#second-image').style.backgroundImage = imageEverlandSlider[secondImage];
  sliderImageEverland = sliderImageContainer;
}

// Функция добавления изображения
  function addSliderImage(classList, image) {
  classList.prepend(image);
}

// Функция удаления изображения
function removeSliderImage(classList) {
  classList.remove();
}

// Функция добавления номера слайда
function addSliderCounterEverland(counter){
  sliderCounterEverland.textContent = counter + '/6';
}

// Функция добавления описания слайда
function addSliderTitle(classList, title){
  classList.textContent = imageDescriptionEverland[title];
};

// Вызов функций слайдера Everland
createEverlandSliderImage(numberImageEverland - 1, numberImageEverland);
addSliderImage(everlandSlider, sliderImageEverland);
addSliderCounterEverland(counterEverland);
addSliderTitle(sliderTitleEverland, counterEverland - 1);

// Установка слушателей на кнопки слайдера Everland
prevEverlandSlider.addEventListener('click', () => {
  counterEverland -= 1;
  numberImageEverland -=  1;
  if (counterEverland < 1) {
    counterEverland = 6;
    numberImageEverland = 11;
  }
  console.log(counterEverland);
  removeSliderImage(sliderImageEverland);
  createEverlandSliderImage(numberImageEverland - 1, numberImageEverland);
  addSliderImage(everlandSlider, sliderImageEverland);
  addSliderCounterEverland(counterEverland);
  addSliderTitle(sliderTitleEverland, counterEverland - 1);
});

nextEverlandSlider.addEventListener('click', () => {
  counterEverland += 1;
  numberImageEverland +=  1;
  if (counterEverland > 6) {
    counterEverland = 1;
    numberImageEverland = 1;
  }
  console.log(counterEverland);
  removeSliderImage(sliderImageEverland);
  createEverlandSliderImage(numberImageEverland - 1, numberImageEverland);
  addSliderImage(everlandSlider, sliderImageEverland);
  addSliderCounterEverland(counterEverland);
  addSliderTitle(sliderTitleEverland, counterEverland - 1);
});

