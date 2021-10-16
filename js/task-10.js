function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const quantity = document.querySelector('input');
const result = document.querySelector('#boxes');


