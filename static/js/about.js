"use strict";

const smallPopUp = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');

function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}   

smallPopUp.forEach((item) => {
    item.addEventListener('click', openModal);
});

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

modal.addEventListener('click', e => {
    const target = e.target;
    if (target === modal || target.getAttribute('data-close') == '') {
        closeModal();
    }
});

document.addEventListener('keydown', e => {
    const code = e.code;
    if (code === "Escape" && modal.classList.contains('show')) {
        closeModal();
    }
});  

