const inputRef = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
console.log(inputRef, text);

inputRef.addEventListener('input', handleInput);

function handleInput(event) {
  text.style.fontSize = event.target.value + 'px';
}
