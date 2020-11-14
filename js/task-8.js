const divRef = document.querySelector('#controls');
const inputRef = divRef.children[0];
const boxes = document.querySelector('#boxes');

const buttonRend = document.querySelector('button[data-action=render]');
const buttonDest = document.querySelector('button[data-action=destroy]');

buttonRend.addEventListener('click', createBoxes);
buttonDest.addEventListener('click', deleteBoxes);

let boxArr = [];
let box;
const width = 30;
const height = 30;

function createBoxes() {
  for (let i = 0; i < inputRef.value; i += 1) {
    box = document.createElement('div');
    box.style.width = `${width + 10 * i}` + 'px';
    box.style.height = `${height + 10 * i}` + 'px';
    box.style.backgroundColor = getRandomColor();
    boxArr.push(box);
  }
  boxes.append(...boxArr);
}

function deleteBoxes() {
  inputRef.value = '';
  let numberOfChildren = boxes.children.length;
  for (let i = numberOfChildren - 1; i >= 0; i -= 1) {
    boxes.children[i].remove();
  }
  boxArr.splice(0, boxArr.length);
}

function getRandomColor() {
  let r = getRandomIntInclusive(0, 255);
  let g = getRandomIntInclusive(0, 255);
  let b = getRandomIntInclusive(0, 255);

  return `rgb(${r}, ${g}, ${b})`;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(0);
  max = Math.floor(255);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
