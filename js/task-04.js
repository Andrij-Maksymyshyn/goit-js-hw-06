let counterValue = 0;
const result = document.querySelector('#value');
const decrButton = document.querySelector('[data-action="decrement"]');
const icrButton = document.querySelector('[data-action="increment"]');

decrButton.addEventListener("click", () => {
   result.textContent = counterValue -= 1;
});

icrButton.addEventListener("click", () => {
    result.textContent = counterValue += 1;  
});

