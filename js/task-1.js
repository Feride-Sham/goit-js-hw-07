// 1 вопрос
const itemRef = document.querySelectorAll('.item');
console.log(`В списке ${itemRef.length} категории`);

// 2 вопрос
const titleRef = document.querySelectorAll('h2');
titleRef.forEach(el => {
  console.log(`Категория: ${el.textContent}`);
  console.log(
    `Количество элементов: ${el.parentNode.querySelectorAll('li').length}`,
  );
});
