"use strict";

shapes.forEach(e => {
    e.style.backgroundColor = `${e.dataset.bg}`;
});

bgItems.forEach(e => {
    e.style.backgroundImage = `url('${e.dataset.bg}')`;
});

const bgSlides = direction => {
    let itemClass = `slide-${slideCounter}`;
    if (direction == "down") {
        if (slideCounter < slidesCounter) {
            mainSection.classList.remove(itemClass);
            slideCounter++;

            itemClass = `slide-${slideCounter}`;
            mainSection.classList.add(itemClass);
        }
    } else if (direction == "up") {
        if (slideCounter > 1) {
            mainSection.classList.remove(itemClass);
            slideCounter--;

            itemClass = `slide-${slideCounter}`;
            mainSection.classList.add(itemClass);
        }
    }
};