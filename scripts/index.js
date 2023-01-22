// Переменные Everland
const everlandSliderImageTemplate = document.querySelector('#everland-slider-image').content;
const projectsSliderImageTemplate = document.querySelector('#projects-slider-image').content;
const everland = document.querySelector('.everland');
const everlandSlider = everland.querySelector('.slider');
const prevEverlandSlider = everland.querySelector('#prev-slide');
const nextEverlandSlider = everland.querySelector('#next-slide');
const sliderCounterEverland = everland.querySelector('.slider__counter');
const sliderTitleEverland = everland.querySelector('.slider__title');
const projects = document.querySelector('.projects');
const projectsSlider = projects.querySelector('.slider');
const prevProjectsSlider = projects.querySelector('#prev-slide');
const nextProjectsSlider = projects.querySelector('#next-slide');
const sliderTitleProjects = projects.querySelector('.slider__title');
let sliderImageEverland;
let sliderImageProjects;
let counterEverland = 1;
let counterProjects = 1;
let numberImageEverland = 1;
const supportButtons = document.querySelectorAll('.support__button');
const supportButtonsSum = document.querySelectorAll('.support__button-sum');
const supportButtonsPayment = document.querySelectorAll('.support__button-payment');

// Функция смены иконки.
function buttonActive(button) {
	button.forEach(el => {
		el.addEventListener('click', (e) => {
			button.forEach(item => { item.classList.remove('support__button_active'); });
			el.classList.add('support__button_active')
		})
	});
};

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


// Переменные

const accordeons = document.querySelectorAll('.accordeon');
const menuButtonIcon = document.querySelector('.header__menu-button-icon');
const menuButton = document.querySelector('.header__menu-button');
const headerMenu = document.querySelector('.header__menu');

// Функции



// Код
// Открыть(закрыть) меню Header

menuButton.addEventListener('click', () => {
  menuButtonIcon.classList.toggle('is-active');
  headerMenu.classList.toggle('header__menu_opened');
});

buttonActive(supportButtons);
buttonActive(supportButtonsSum);
buttonActive(supportButtonsPayment);

accordeons.forEach((accordeon) => {
  accordeon.addEventListener('click', () => accordeon.toggleAttribute('open'));
});

//Переходы по ссылкам на секции страницы из меню header

//Переменные для ссылок меню
const header = document.querySelector('.header');
const secondaryMenu = header.querySelector('.header__menu-secondary');
const linkMenu = secondaryMenu.querySelectorAll('.header__menu-secondary-link');

//установка слушателя на ссылки меню и переход к ним
linkMenu.forEach((link) => link.addEventListener('click', (evt) => {
  const linkHref = evt.target.getAttribute('href');
  evt.preventDefault();
  const scrollTarget = document.querySelector(linkHref);
  const topOffset = header.offsetHeight;
  const elementPosition = scrollTarget.getBoundingClientRect().top;
  const offsetPosition = elementPosition - topOffset;
  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'
  });
  }
));


