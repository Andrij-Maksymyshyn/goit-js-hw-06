const exit = document.querySelector('#name-output');
const entrance = document.querySelector('#name-input');

entrance.addEventListener("input", (event) => {
    if (event.currentTarget.value === "") {
       return exit.textContent = "Anonymous";
    }
   return exit.textContent = event.currentTarget.value;
});
