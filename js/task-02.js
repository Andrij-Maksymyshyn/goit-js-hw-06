const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const menuIngredients = document.querySelector('#ingredients');

ingredients.forEach((option) => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = option;
  ingredientItem.classList.add('item');
  menuIngredients.append(ingredientItem);
});
console.log(menuIngredients);
