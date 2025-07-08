const colorPalette = document.getElementById('colorPalette');
const gridContainer = document.getElementById('gridContainer');
const clearButton = document.getElementById('clearButton');

const colors = [
  '#ff0000', '#ffa500', '#ffff00', '#008000',
  '#0000ff', '#4b0082', '#ee82ee', '#ffc0cb',
  '#a52a2a', '#808080', '#c0c0c0', '#ffffff',
  '#000000', '#800000', '#808000', '#008080'
];

let selectedColor = '#000000';
let isDrawing = false;

function initializeColorPalette() {
  colors.forEach(color => {
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box', 'rounded-md', 'cursor-pointer', 'shadow-md');
    colorBox.style.backgroundColor = color;
    colorBox.dataset.color = color;

    colorBox.addEventListener('click', () => {
      selectColor(color);
    });

    colorPalette.appendChild(colorBox);
  });

  selectColor(colors[0]);
}

function selectColor(color) {
  selectedColor = color;

  document.querySelectorAll('.color-box').forEach(box => {
    box.classList.remove('selected');
  });

  const currentSelectedBox = document.querySelector(`.color-box[data-color="${color}"]`);
  if (currentSelectedBox) {
    currentSelectedBox.classList.add('selected');
  }
}

function initializeDrawingGrid() {
  const numRows = 20;
  const numCols = 50;

  gridContainer.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;

  for (let i = 0; i < numRows * numCols; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');

    gridSquare.addEventListener('mousedown', (e) => {
      isDrawing = true;
      e.target.style.backgroundColor = selectedColor;
    });

    gridSquare.addEventListener('mouseover', (e) => {
      if (isDrawing) {
        e.target.style.backgroundColor = selectedColor;
      }
    });

    gridContainer.appendChild(gridSquare);
  }

  document.addEventListener('mouseup', () => {
    isDrawing = false;
  });

  gridContainer.addEventListener('dragstart', (e) => {
    e.preventDefault();
  });
}

function clearGrid() {
  document.querySelectorAll('.grid-square').forEach(square => {
    square.style.backgroundColor = '#ffffff';
  });
}

clearButton.addEventListener('click', clearGrid);

document.addEventListener('DOMContentLoaded', () => {
  initializeColorPalette();
  initializeDrawingGrid();
});
