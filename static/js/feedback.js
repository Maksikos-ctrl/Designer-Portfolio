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

const forms = document.querySelectorAll('form'); 

const message = {
    loading: '../static/img/spinner.svg',
    success: 'All is ok',
    unsuccessful: 'Something went wrong....'
};

forms.forEach(item => {
    postData(item);
});

function postData(form) {
    form.addEventListener('submit', e => {
        e.preventDefault();

        const statusOfMsg = document.createElement('img');

        statusOfMsg.src = message.loading;

        form.insertAdjacentElement('afterend', statusOfMsg);

        const formData = new FormData(form);

        const obj = {};

        formData.forEach((value, key) => {
            obj[key] = value; 
        });

        const json = JSON.stringify(obj);

        fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then(data =>  data.text())
        .then(data => {
                console.log(data);
                showGratitudePopUp(message.success);
                statusOfMsg.remove(); 
        }).catch(() => {
                showGratitudePopUp(message.unsuccessful);
        }).finally(() => {
                form.reset();
        });
        

        function showGratitudePopUp(message) {
            const prevPopUp = document.querySelector('.modal__body');

            prevPopUp.classList.add('hide');

            openModal();
        }
    });
}
