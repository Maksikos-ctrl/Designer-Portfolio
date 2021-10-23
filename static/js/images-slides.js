"use strict";

const imagesSlides = direction => {
    let currentSlide = document.querySelector('.slide-bg__inner-current');
    let nextSlide;
    
    direction == 'down' ? nextSlide = currentSlide.nextElementSibling : nextSlide = currentSlide.previousElementSibling;

    if (nextSlide) {
        imgsSlides.forEach(slide => {
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
            xPercent: 100
        })
        .from(nextSlide.querySelector('.slide-bg__link'), 0.5, {
            xPercent: -100,
            delay: -0.5
        });

        currentSlide.classList.remove('slide-bg__inner-current');
        nextSlide.classList.add('slide-bg__inner-current');
    }
};

