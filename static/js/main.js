"use strict";

// #Website Greensock + FLask + DB JSON + Swiper Js + FETCH API
// #Copyright (C) 2021 Maksikos-ctrl 

// #This program is free software: you can redistribute it and/or modify it under
// #the terms of the GNU General Public License as published by the Free Software
// #Foundation, either version 3 of the License, or any later version.

// #This program is distributed in the hope that it will be useful, but WITHOUT ANY
// #WARRANTY; without even the implied warranty of  MERCHANTABILITY or FITNESS FOR
// #A PARTICULAR PURPOSE. See the GNU General Public License for more details.

// #You should have received a copy of the GNU General Public License along with
// #this program. If not, see <http://www.gnu.org/licenses/>.

/* 
                               PLAN

------------------------------ FRONT-END ----------------------------------------------------------------                
1. Опрацювати курсор +
2. Початкова анімація +
3. Анімація фону +
4. Анімація тексту + 
5. Анімація фону З правого боку +
6. Анімація "формочок" +
7. Файл глобальних налаштувань +
8. Головний файл(цей) + зробити скролл +
9. Після верстки лендінгу та responsive під мобіли починаю робити сторінки: About us, feedback etc.+
10. Для відправки данних про це, підключу XHR || FETCH API +
11. Інітіалізую npm пакет в цей проэкт та підключаю json-server. +
12.Додати favicon.ico і зробити бургер та функціонувати його +

------------------------------  BACK-END ---------------------------------------------------------------- 
1. На Flask роблю елементарні переходи на інші сторінки. +
2. Спробую подружити Flask && npm і реалізувати це на Flask. ELSE Зроблю все в серверному js, а фласк буде тільки як локальний сервер та маленька мультиязичність сайту. +

*/


const init = () => {


    window.onload = () => {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('preloader-animation');

        setTimeout(() => {
            preloader.classList.remove('preloader-animation');
            preloader.classList.add('preloader-hidden');
        }, 3000);

        setTimeout(() => {
            startAnimation();
            preloader.classList.add('preloader-none');
        }, 3200);
    };

    const showNextSlide = () => {
        bgSlides('down'); 
        imagesSlides('down');
        shapesSlides('down');
        textSlides('down');
        console.log('next');
    };

    const showPrevSlide = () => {
        bgSlides('up'); 
        imagesSlides('up');
        shapesSlides('up');
        textSlides('up');
        console.log('prev');
    };
    
    if (window.innerWidth > 768) { // Буде норм робити для всіх крім мобілок, там ми зробимо по-іншому
        window.addEventListener("wheel", e => {
            
            let delta = -e.deltaY;

            if (delta > 0) { // Дельта > 0 за нуль значить що якщо ми скроллимо кудись вгору
                if (helperInput.value == '1') {
                    console.log('Скроллимо до гори'); 
                    helperInput.value = 0;
                    showPrevSlide();
                    setTimeout(() => {
                        helperInput.value = 1;
                    }, 1500);
                }
           } else {
                if (helperInput.value == '1') {
                    helperInput.value = 0;
                    console.log('Внизу скроллимо');
                    showNextSlide();
                    setTimeout(() => {
                        helperInput.value = 1;
                    }, 1500);
                }
            }
        });
    } else {
        document.addEventListener('swiped-left', () => {
            showNextSlide();
        });

        document.addEventListener('swiped-right', () => {
            showPrevSlide();
        });
    }
};

init();

const burger = document.getElementById('burger'),
    list = document.getElementById('nav-list');

burger.addEventListener('click', () => {
    list.classList.toggle('show');
});  









