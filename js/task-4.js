'use strict'


const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formElements = loginForm.elements;


    for (let i = 0; i < formElements.length - 1; i++) {
        if (formElements[i].value.trim() === '') {
            alert('All form fields must be filled in');
            return;
        }
    };


    const email = formElements.email.value.trim();
    const password = formElements.password.value.trim();

    const formData = {
        email,
        password,
    };
    console.log(formData);

    // Інший варіант

    // const formData = new FormData(event.currentTarget);

    // console.log(formData)
    // formData.forEach((value, key) => {
    //     console.log(key);
    //     console.log(value);

    //     if (value === '') {
    //         alert('All form fields must be filled in');
    //         return;
    //     }
    // });

    loginForm.reset();
});
