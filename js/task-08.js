const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
   
    if (event.currentTarget.email.value === "" || event.currentTarget.password.value === "") {
        return alert("Please fill in all the fields!");
    }

   const email = event.currentTarget.elements.email.value;
   const password = event.currentTarget.elements.password.value;
   const formData = {
    email,
    password, 
   };
   console.log(formData);
  event.currentTarget.reset();
};