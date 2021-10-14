"use strict";

function mouseMove(e) {
    if (e.clientX < 5 || e.clintY < 5 || e.clientY > (window.innerHeight - 5) || e.clientX > (window.innerWidth - 5)) { // clientX рух миші по OX. clientY рух миші по OY 
        mouse.style.opacity = 0;
    } else {
        mouse.style.opacity = 1;
        mouse.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`; 
    }
}

if (window.innerWidth >= 768) {
    document.addEventListener('mousemove', mouseMove);

    slideBg.addEventListener('mouseover', () => {
        mouse.classList.add('view-visible'); 
    });

    slideBg.addEventListener('mouseleave', () => {
        mouse.classList.remove('view-visible'); 
    });

    links.forEach(links => {
        links.addEventListener('mouseover', () => {
            mouse.classList.add('links-visible'); 
        }); 
    });

    links.forEach(links => {
        links.addEventListener('mouseleave', () => {
            mouse.classList.remove('links-visible'); 
        }); 
    });
}



