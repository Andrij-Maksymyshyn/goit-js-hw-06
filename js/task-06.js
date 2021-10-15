const entance = document.querySelector('#validation-input');
const result = document.querySelector("input");
const mustHave = document.querySelector('input[data-length="6"]');



entance.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === Number(mustHave.dataset.length)) {        
  
        return result.style.borderColor = "#4caf50";
              
    }    
    
        return result.style.borderColor = "#f44336";
    
});

