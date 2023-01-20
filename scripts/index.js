// Переменные Everland
const everlandSliderImageTemplate = document.querySelector('#everland-slider-image').content;
const projectsSliderImageTemplate = document.querySelector('#superprojects-slider-image').content;
const everland = document.querySelector('.everland');
const everlandSlider = everland.querySelector('.slider');
const prevEverlandSlider = everland.querySelector('#prev-slide');
const nextEverlandSlider = everland.querySelector('#next-slide');
const sliderCounterEverland = everland.querySelector('.slider__counter');
const sliderTitleEverland = everland.querySelector('.slider__title');
const projects = document.querySelector('.superprojects');
const projectsSlider = projects.querySelector('.slider');
const prevProjectsSlider = projects.querySelector('#prev-slide');
const nextProjectsSlider = projects.querySelector('#next-slide');
const sliderTitleProjects = projects.querySelector('.slider__title');
let sliderImageEverland;
let sliderImageProjects;
let counterEverland = 1;
let counterProjects = 1;
let numberImageEverland = 1;

// Функция создания изображения Everland
function createEverlandSliderImage (firstImage, secondImage) {
  const sliderImageContainer = everlandSliderImageTemplate.querySelector('.slider__image-container').cloneNode(true);
  sliderImageContainer.querySelector('#first-image').style.backgroundImage = imageEverlandSlider[firstImage];
  sliderImageContainer.querySelector('#second-image').style.backgroundImage = imageEverlandSlider[secondImage];
  sliderImageEverland = sliderImageContainer;
}

// Функция создания изображения Projects
function createProjectsSliderImage (Image) {
  const sliderImageContainer = projectsSliderImageTemplate.querySelector('.slider__image-container').cloneNode(true);
  sliderImageContainer.querySelector('#image').style.backgroundImage = imageProjectsSlider[Image];
  sliderImageProjects = sliderImageContainer;
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
function addSliderTitle(classList, number, title){
  classList.textContent = title[number];
};

// Вызов функций слайдера Everland
createEverlandSliderImage(numberImageEverland - 1, numberImageEverland);
addSliderImage(everlandSlider, sliderImageEverland);
addSliderCounterEverland(counterEverland);
addSliderTitle(sliderTitleEverland, counterEverland - 1, imageDescriptionEverland);

// Вызов функций слайдера Projects
createProjectsSliderImage(counterProjects - 1);
addSliderImage(projectsSlider, sliderImageProjects);
addSliderTitle(sliderTitleProjects, counterProjects - 1, imageDescriptionProjects);

// Установка слушателей на кнопки слайдера Everland
prevEverlandSlider.addEventListener('click', () => {
  counterEverland -= 1;
  numberImageEverland -=  1;
  if (counterEverland < 1) {
    counterEverland = 6;
    numberImageEverland = 11;
  }
  removeSliderImage(sliderImageEverland);
  createEverlandSliderImage(numberImageEverland - 1, numberImageEverland);
  addSliderImage(everlandSlider, sliderImageEverland);
  addSliderCounterEverland(counterEverland);
  addSliderTitle(sliderTitleEverland, counterEverland - 1, imageDescriptionEverland);
});

nextEverlandSlider.addEventListener('click', () => {
  counterEverland += 1;
  numberImageEverland +=  1;
  if (counterEverland > 6) {
    counterEverland = 1;
    numberImageEverland = 1;
  }
  removeSliderImage(sliderImageEverland);
  createEverlandSliderImage(numberImageEverland - 1, numberImageEverland);
  addSliderImage(everlandSlider, sliderImageEverland);
  addSliderCounterEverland(counterEverland);
  addSliderTitle(sliderTitleEverland, counterEverland - 1, imageDescriptionEverland);
});

// Установка слушателей на кнопки слайдера Everland
prevProjectsSlider.addEventListener('click', () => {
  counterProjects -= 1;
  if (counterProjects < 1) {
    counterProjects = 6;
  }
  removeSliderImage(sliderImageProjects);
  createProjectsSliderImage(counterProjects - 1);
  addSliderImage(projectsSlider, sliderImageProjects);
  addSliderTitle(sliderTitleProjects, counterProjects - 1, imageDescriptionProjects);
});

nextProjectsSlider.addEventListener('click', () => {
  counterProjects += 1;
  if (counterProjects > 6) {
    counterProjects = 1;
  }
  removeSliderImage(sliderImageProjects);
  createProjectsSliderImage(counterProjects - 1);
  addSliderImage(projectsSlider, sliderImageProjects);
  addSliderTitle(sliderTitleProjects, counterProjects - 1, imageDescriptionProjects);
});


