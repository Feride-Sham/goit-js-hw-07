const inputRef = document.querySelector('#name-input');

const nameUser = document.querySelector('#name-output');

inputRef.addEventListener('input', e => {
  nameUser.textContent = e.target.value;
  if (!e.target.value) nameUser.textContent = 'незнакомец';
});
