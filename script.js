function modifyColorSelected(event) {
  const colorSelect = document.querySelector('.selected');
  console.log(event.target);
}

const colorPalette = document.querySelector('#color-palette');
console.log(colorPalette);
colorPalette.addEventListener('click', modifyColorSelected);
