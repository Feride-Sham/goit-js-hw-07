const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');
console.log(decrBtn);
console.log(incrBtn);

const counter = document.querySelector('#value');

let counterValue = 0;

decrBtn.addEventListener('click', () => {
  decrement();
  counter.textContent = counterValue;
  console.log(`Уменьшили на 1, текущее значение=${counterValue}`);
});

const decrement = () => (counterValue > 0 ? (counterValue -= 1) : counterValue);

incrBtn.addEventListener('click', () => {
  increment();
  counter.textContent = counterValue;
  console.log(`Увеличили на 1, текущее значение=${counterValue}`);
});

const increment = () => (counterValue += 1);

console.log(counter);
