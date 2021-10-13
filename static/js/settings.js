"use strict";

const bgItems = document.querySelectorAll('.slide-bg__link'),
    imgsSlides = document.querySelectorAll('.slide-bg__inner'),
    shapes = document.querySelectorAll('.shapes__content'),
    shapesSlides = document.querySelectorAll('.shapes__item'),
    helperInput = document.querySelector('#helper-input'),
    mouse = document.querySelector('.mouse'),
    slideBg = document.querySelector('.slide-bg'),
    links = document.querySelectorAll('a'),
    slidesCounter = 5;

let slideCounter = 1;
const easing = BezierEasing(0.770, 0.125, 0.265, 1.040);



