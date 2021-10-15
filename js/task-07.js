const exit = document.querySelector('#text');
const entance = document.querySelector('#font-size-control');

entance.addEventListener("input", (event) => {
    exit.style.fontSize = `${Number(event.currentTarget.value)}px`;    
   });