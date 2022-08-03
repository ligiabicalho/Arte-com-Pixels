function modifyColorSelected(event) {
  const colorSelected = event.target;
  const selectedRemove = document.querySelector('.selected');
  selectedRemove.classList.remove('selected');
  colorSelected.classList.add('selected');
}

const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', modifyColorSelected);

function modifyPixelColor(event) {
  // const classPixel = document.querySelector('.pixel');
  const colorSelectedClass = document.querySelector('.selected').classList[1];
  const elementSelected = event.target;
  console.log(elementSelected.classList);
  if (elementSelected.className.indexOf('pixel') !== -1) {
    elementSelected.className = `pixel ${colorSelectedClass}`;
  }
}

const pixelBoard = document.querySelector('#pixel-board');
pixelBoard.addEventListener('click', modifyPixelColor);

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].classList.remove('black');
    pixels[index].classList.remove('red');
    pixels[index].classList.remove('green');
    pixels[index].classList.remove('blue');
  }
}

const btn = document.querySelector('#clear-board');
btn.addEventListener('click', clearBoard);
