"use strict";

const startAnimation = () => {
    console.log('Почати');  

    const currentSlide = document.querySelector('.slide-bg__inner-current'),
        currentShape = document.querySelector('.shapes__item--current'),
        currentText = document.querySelector('.slides-container__slide--active');

    startingTimeLine.to('.header', 0.5, { // to - значить щоб лінія часу привело класс хеадер до цих значень
        opacity: 1,
        y: 0,
        delay: 0.5   // зедержка 0.5 s
    })
    .to('.main-section__explore', 0.5, { 
        opacity: 1,
        y: 0,
    }, '-=0.5')
    .to(currentText.querySelector('.slides-container__title'), 0.6, { 
        opacity: 1,
        y: 0,
    }, '-=0.1')
    .to(currentText.querySelector('.designers-info'), 0.6, { 
        opacity: 1,
        y: 0,
    }, '-=0.4')
    .from(currentSlide, 0.4, { // from значить звідки і куди ми хочемо прийти
        xPercent: 100,
    }, '-=0.4')
    .from(currentSlide.querySelector('.slide-bg__link'), 0.4, { // from значить звідки і куди ми хочемо прийти
        xPercent: -100,
    }, '-=0.4')
    .from(currentShape, 0.6, { // from значить звідки і куди ми хочемо прийти
        xPercent: 100,
    }, '-=0.2')
    .from(currentShape.querySelector('.shapes__content'), 0.6, { // from значить звідки і куди ми хочемо прийти
        xPercent: -100,
        delay: -0.6
    }, '-=0.2');
};






