function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const control = document.querySelector('#controls');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const input = document.querySelector('input');
const result = document.querySelector('#boxes');

const createBoxes = (amount) => {
  amount = input.value;

  for (let i = 0; i < amount; i += 1) {
    const basicSize = 30;
    const biggestSize = basicSize + i * 10;
    const box = document.createElement('div');
    box.setAttribute(
      'style',
      `width:${biggestSize}px, height:${biggestSize}px, background-color:${getRandomHexColor()}`
    );

    result.append(box);
      
  } 
}

const destroyBoxes = () => {
  input.value = '';
  result.innerHTML = '';
}

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);




