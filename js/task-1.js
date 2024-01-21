'use strict'

const categories = document.querySelector('#categories');
const subCategories = categories.querySelectorAll('.item');

const counter = parent => parent.childElementCount;

const message = elements => {
    elements.forEach(element => {
        const firstEl = element.firstElementChild;
        const secondElem = firstEl.nextElementSibling
        console.log(`Category: ${firstEl.textContent}`);
        console.log(`Elements: ${counter(secondElem)}`);
    });
};

console.log(`Number of categories: ${counter(categories)}`);
message(subCategories);