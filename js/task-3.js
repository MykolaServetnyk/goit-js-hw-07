'use strict'

const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output')
};
refs.input.addEventListener('input', onInputListener);

function onInputListener(event) {
    refs.output.textContent = event.currentTarget.value.trim() || 'Anonymous';

};