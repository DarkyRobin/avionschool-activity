const cells = document.querySelectorAll('.cell');
const divticTacToe = document.getElementById('ticTacToe');
const infoGame = document.getElementById('infoGame');
const resetBtn = document.getElementById('resetButton');
const prevtBtn =document.getElementById('prevButton'); 
const nextBtn =document.getElementById('nextButton');
let player = document.getElementById('player');
let curPlayer  = player.value;
const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]           // diagonals
];

let startCells = ["", "", "", "", "", "", "", "", ""];
let isGameRunning = false;

function initGame() {
  cells.forEach(cell => cell.addEventListener('click', clickedCell));
  resetBtn.addEventListener('click', resetGame);
  infoGame.textContent = `${curPlayer}'s Turn`;
}

function clickedCell() {
  const cellIndex = this.getAttribute(id);
  console.log()
}

function checkWinner() {

}



function resetGame() {

}

