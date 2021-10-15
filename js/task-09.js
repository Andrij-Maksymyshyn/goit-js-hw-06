function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const result = document.querySelector(".color");
const entrance = document.querySelector(".change-color");

entrance.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  result.textContent = `${document.body.style.backgroundColor}`;
});