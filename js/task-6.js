const inputRef = document.querySelector('#validation-input');
const textLenght = inputRef.getAttribute('data-length');

inputRef.addEventListener('blur', handleInput);

function handleInput(ev) {
  let userText = ev.target.value;
  inputRef.classList.remove('invalid');
  if (userText.length === Number(textLenght)) {
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.add('invalid');
  }
}
