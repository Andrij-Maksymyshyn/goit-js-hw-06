const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const menuIngredients = document.querySelector('#ingredients');
const menu = [];


ingredients.forEach((option) => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = option;
  ingredientItem.classList.add('item');
  menu.push(ingredientItem);  
   });
   
 
menuIngredients.append(...menu);
console.log(menuIngredients);

