let counterValue = 0;
const result = document.querySelector('#value');
const decrButton = document.querySelector('button[data-action="decrement"]');
const icrButton = document.querySelector('button[data-action="increment"]');

decrButton.addEventListener("click", () => {
   result.textContent = counterValue -= 1;
});

icrButton.addEventListener("click", () => {
    result.textContent = counterValue += 1;  
});

