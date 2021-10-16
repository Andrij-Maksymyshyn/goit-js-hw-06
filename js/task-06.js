const entance = document.querySelector('#validation-input');
const result = document.querySelector("input");
const mustHave = document.querySelector('input[data-length="6"]');



entance.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === Number(mustHave.dataset.length)) {        
  
      result.classList.remove('invalid');      
      result.classList.add('valid');       
                          
    } else {   
    
            result.classList.remove('valid');
            result.classList.add('invalid');
    }

});



