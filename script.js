function modifyColorSelected(event) {
  const colorSelected = event.target;
  const selectedRemove = document.querySelector('.selected');
  selectedRemove.classList.remove('selected');
  colorSelected.classList.add('selected');
}

const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', modifyColorSelected);

function modifyPixelColor(event) {
  const classPixel = document.querySelector('.pixel');
  const colorSelectedClass = document.querySelector('.selected').classList[1];
  const pixelSelected = event.target;
  pixelSelected.classList.add(colorSelectedClass);
  console.log(pixelSelected);
}

const pixelBoard = document.querySelector('#pixel-board');
pixelBoard.addEventListener('click', modifyPixelColor);
