const ticTacToeElement = document.getElementById('ticTacToe');
const resetButton = document.getElementById('resetButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]           // diagonals
];

let currentState = Array(9).fill(null);
let history = [currentState];
let currentMoveIndex = 0;
let currentPlayer = 'X';
let isGameOver = false;

// Create the tic-tac-toe board
for (let i = 0; i < 9; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.setAttribute('data-index', i);
  ticTacToeElement.appendChild(cell);

  cell.addEventListener('click', () => {
    if (!isGameOver && currentState[i] === null) {
      currentState[i] = currentPlayer;
      history.push([...currentState]);
      currentMoveIndex = history.length - 1;
      cell.innerText = currentPlayer;
      checkWinner();
      togglePlayer();
      updateButtons();
    }
  });
}

resetButton.addEventListener('click', resetGame);
prevButton.addEventListener('click', showPreviousMove);
nextButton.addEventListener('click', showNextMove);

function togglePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (currentState[a] && currentState[a] === currentState[b] && currentState[a] === currentState[c]) {
      isGameOver = true;
      markWinningCells(a, b, c);
      break;
    }
  }
}

function markWinningCells(a, b, c) {
  document.querySelector(`[data-index="${a}"]`).classList.add('winner');
  document.querySelector(`[data-index="${b}"]`).classList.add('winner');
  document.querySelector(`[data-index="${c}"]`).classList.add('winner');
}

function updateButtons() {
  prevButton.disabled = currentMoveIndex === 0;
  nextButton.disabled = currentMoveIndex === history.length - 1;
}

function showPreviousMove() {
  if (currentMoveIndex > 0) {
    currentMoveIndex--;
    currentState = [...history[currentMoveIndex]];
    updateBoard();
    updateButtons();
  }
}

function showNextMove() {
  if (currentMoveIndex < history.length - 1) {
    currentMoveIndex++;
    currentState = [...history[currentMoveIndex]];
    updateBoard();
    updateButtons();
  }
}

function updateBoard() {
  cells.forEach((cell, index) => {
    cell.innerText = currentState[index];
    cell.classList.remove('winner');
  });

  isGameOver = false;
}

function resetGame() {
  currentState = Array(9).fill(null);
  history = [currentState];
  currentMoveIndex = 0;
  currentPlayer = 'X';
  updateBoard();
  updateButtons();
}

const cells = document.querySelectorAll('.cell');
updateButtons();
