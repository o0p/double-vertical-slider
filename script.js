const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const uppButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLenght = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;
