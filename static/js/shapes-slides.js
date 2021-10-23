"use strict";

const shapesSlides = direction => {
    let currentSlide = document.querySelector('.shapes__item--current');
    let nextSlide;
    
    direction == 'down' ? nextSlide = currentSlide.nextElementSibling : nextSlide = currentSlide.previousElementSibling;

    if (nextSlide) {
        shapeSlides.forEach(slide => {
            slide.classList.remove('index'); 
        });

        currentSlide.classList.add('index');

        const timeline = gsap.timeline({
            defaults: { ease: easing },
            onComplete: function() {
                currentSlide.classList.remove('index');   
            }
        });

        timeline.from(nextSlide, 0.5, {
            xPercent: 100,
            delay: 0.5
        })
        .from(nextSlide.querySelector('.shapes__content'), 0.5, {
            xPercent: -100,
            delay: -1
        });

        currentSlide.classList.remove('shapes__item--current');
        nextSlide.classList.add('shapes__item--current');
    }
};