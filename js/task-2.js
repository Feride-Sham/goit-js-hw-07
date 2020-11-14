const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const container = document.getElementById('ingredients');

const itemArr = ingredients.map(el => {
  let newElement = document.createElement('li');
  newElement.textContent = el;
  return newElement;
});

container.append(...itemArr);
console.log(container);
