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
  const pixelSelected = event.target;
  pixelSelected.classList.add(colorSelectedClass);
  console.log(pixelSelected);
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
  // colorRemove = colorRemove[0];
  // colorRemove.classList.remove(colorRemove);

  // console.log();
}

const btn = document.querySelector('#clear-board');
btn.addEventListener('click', clearBoard);
