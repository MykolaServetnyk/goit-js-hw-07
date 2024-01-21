'use strict'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainer = document.getElementById('boxes');

function createBoxes(amount) {

  boxesContainer.innerHTML = '';
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

document.querySelector('button[data-create]').addEventListener('click', function () {
  const input = document.querySelector('input');
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  }
});

document.querySelector('button[data-destroy]').addEventListener('click', destroyBoxes);
