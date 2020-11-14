const inputRef = document.querySelector('#validation-input');
const textLenght = inputRef.getAttribute('data-length');

inputRef.addEventListener('blur', handleInput);

function handleInput(ev) {
  let userText = ev.target.value;
  return userText.length === Number(textLenght)
    ? inputRef.classList.add('valid')
    : inputRef.classList.add('invalid');
}
