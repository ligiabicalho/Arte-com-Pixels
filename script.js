let numberOfLines = 5;
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
const randomColor1 = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
const randomColor2 = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
const randomColor3 = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
const color1 = document.querySelector('#color1');
color1.style.backgroundColor = randomColor1;
const color2 = document.querySelector('#color2');
color2.style.backgroundColor = randomColor2;
const color3 = document.querySelector('#color3');
color3.style.backgroundColor = randomColor3;

function clearBoard() {
  const lines = document.querySelectorAll('.line');
  for (let i = 0; i < lines.length; i += 1) {
    lines[i].remove();
  }
}

function createPixel(className) {
  const pixels = document.createElement('div');
  pixels.className = className;
  return pixels;
}

function createLine(className) {
  const line = document.createElement('div');
  line.className = className;
  return line;
}

function fillLine(divLine) {
  for (let index = 0; index < numberOfLines; index += 1) {
    const pixel = createPixel('pixel');
    divLine.appendChild(pixel);
  }
}

const pixelBoard = document.querySelector('#pixel-board');
function fillBoard() {
  for (let index = 0; index < numberOfLines; index += 1) {
    const line = createLine('line');
    fillLine(line);
    pixelBoard.appendChild(line);
  }
}

function generateBoard() {
  const boardSize = document.querySelector('#board-size').value;
  if (boardSize === '') {
    alert('Board inválido!');
  } else if (boardSize <= 5) {
    numberOfLines = 5;
  } else if (boardSize >= 50) {
    numberOfLines = 50;
  } else {
    numberOfLines = boardSize;
  }
  clearBoard();
  fillBoard();
}

const btnVqv = document.querySelector('#generate-board');
btnVqv.addEventListener('click', generateBoard);

fillBoard();

function modifyColorSelected(event) {
  const colorSelected = event.target;
  if (colorSelected.className.indexOf('color') !== -1) {
    const selectedRemove = document.querySelector('.selected');
    selectedRemove.classList.remove('selected');
    colorSelected.classList.add('selected');
  }
}

const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', modifyColorSelected);

function modifyPixelColor(event) {
  const colorSelected = document.querySelector('.selected').style.backgroundColor;
  const elementSelected = event.target;
  if (elementSelected.className.indexOf('pixel') !== -1) {
    elementSelected.style.backgroundColor = colorSelected;
  }
}

pixelBoard.addEventListener('click', modifyPixelColor);

function clearColorBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

const btn = document.querySelector('#clear-board');
btn.addEventListener('click', clearColorBoard);
