const container = document.querySelector('.container');
const grid_input = document.querySelector('#grid-size');
const grid_reset = document.querySelector('#grid-reset');
const rand_colors = document.querySelector("#grid-color");

let gridSize = 16;

let i = 0;
let j = 0;

createGrid(gridSize);

function createGrid(gridSize) {
  //container.style.gridTemplateColumns = "repeat(" + gridSize + ", 1fr)";
  //container.style.gridTemplateRows = "repeat(" + gridSize + ", 1fr)";
    for(i = 1; i <= gridSize; i++) {
      for (j = 0; j < gridSize; j++) {
        let colSize = 500 / gridSize;
        const divGrid = document.createElement('div');
        divGrid.className = "grid-items";
        divGrid.setAttribute('style', 'height:' + colSize + 'px;' + 'width:' + colSize + 'px;')
        // Append the divs to the parentNode
        container.appendChild(divGrid);
      }
  }
}

function alertText() {
  gridSize = parseInt(prompt("Enter a value for the grid"));
  refreshScreen();
  createGrid(gridSize);
 }

function refreshScreen() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

function clearScreen() {
  refreshScreen();
  createGrid(gridSize);
}

function randColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

function randomColors() {
  let grid_color = document.querySelectorAll('.grid-items');
  grid_color.forEach((divGrid) => {
    divGrid.addEventListener('mouseover', (e) => {
      divGrid.style.backgroundColor = randColor();
    }); 
  });
}
grid_input.addEventListener('click', alertText);

grid_reset.addEventListener('click', clearScreen);

rand_colors.addEventListener('click', randomColors);



