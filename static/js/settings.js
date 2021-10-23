"use strict";

const bgItems = document.querySelectorAll('.slide-bg__link'),
    imgsSlides = document.querySelectorAll('.slide-bg__inner'),
    shapes = document.querySelectorAll('.shapes__content'),
    shapeSlides = document.querySelectorAll('.shapes__item'),
    helperInput = document.querySelector('#helper-input'),
    mainSection = document.querySelector('.main-section'),
    mouse = document.querySelector('.mouse'),
    slideBg = document.querySelector('.slide-bg'),
    links = document.querySelectorAll('a');
   
const slidesCounter = 5;
let slideCounter = 1;
const easing = BezierEasing(0.770, 0.125, 0.265, 1.040);

const startComplete = () => {
    imgsSlides.forEach((item) => {
        item.style.opacity = 1;
    });  
    shapeSlides.forEach((shape) => {
        shape.style.opacity = 1;
    });  
};

const startingTimeLine = gsap.timeline({ defaults: { ease: easing }, onComplete: startComplete });




