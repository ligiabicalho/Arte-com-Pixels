function modifyColorSelected(event) {
  const colorSelect = event.target;
  const selectedRemove = document.querySelector('.selected');
  selectedRemove.classList.remove('selected');
  colorSelect.classList.add('selected');
}

const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', modifyColorSelected);
