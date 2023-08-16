const cells = document.querySelectorAll('.cell');
const divticTacToe = document.getElementById('ticTacToe');
const infoGame = document.getElementById('infoGame');
const resetBtn = document.getElementById('resetButton');
const prevtBtn = document.getElementById('prevButton'); 
const nextBtn = document.getElementById('nextButton');
let player = document.getElementById('player');
let curPlayer  = 'X';
let gameHistory = [];
const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]           // diagonals
];

let boardCells = [
  ["", "", ""], 
  ["", "", ""], 
  ["", "", ""]
];

let isGameOver = false;
let curMoveIndex = 0;

player.addEventListener('change', function(){
  curPlayer = player.value;
  infoGame.innerHTML = `Player ${curPlayer} Start`;
})

//Events
divticTacToe.addEventListener('click', markCellTarget)
resetBtn.addEventListener('click', resetGame);
prevtBtn.addEventListener('click', showPreviousMove);
nextBtn.addEventListener('click', showNextMove);

function playerTurn(){
  curPlayer = curPlayer === 'X' ? 'O' : 'X';
  infoGame.innerHTML = `Player ${curPlayer}'s Turn`;
}

function markCellTarget(e) {
  const target = e.target;
  const targetValue = document.getElementById(target.id);
  targetValue.innerText = curPlayer;
  updateBoardCells(target.id);
  if(checkWin(curPlayer)) {
    infoGame.innerHTML = `Player ${curPlayer}'s Won!`;
  } else {
    playerTurn();
  };
  console.log(boardCells)
  saveGameHistory();
  updateButtons();
}

const board = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
]

function updateBoardCells(cellId){
  for(i = 0; i < 3; i++) {
    if(board[0][i] == cellId) {
      boardCells[0][i] = curPlayer;
    } else if(board[1][i] == cellId) {
      boardCells[1][i] = curPlayer;
    } else if(board[2][i] == cellId) {
      boardCells[2][i] = curPlayer;
    }
  }
}

//1D Approach
// function checkWinner() {
//   for(let i = 0; i <=7; i++) {
//     const winCombo = winningCombos[i];
//     let a = boardCells[winCombo[0]];
//     let b = boardCells[winCombo[1]];
//     let c = boardCells[winCombo[2]];

//     if (a === '' || b === '' || c === '') {
//       continue;
//     }
    
//     if (a === b && b === c) {
//       isGameOver = true;
//       break
//     }
//   }
  
  // if(isGameOver) {
  //   infoGame.innerHTML = `Player ${curPlayer}'s Won!`;
  //   return;
  // } else {
  //   playerTurn();
  // }
// }

function resetGame() {
  cells.forEach((cell, index) => {
    cell.innerText = '';
  })

  boardCells = [
    ["", "", ""], 
    ["", "", ""], 
    ["", "", ""]
  ];
  gameHistory = [boardCells];
  curMoveIndex = 0;
  isGameOver = false;
  infoGame.innerHTML = `Select player`;
  updateButtons();
}

function saveGameHistory() {
  gameHistory.push(...[boardCells])
}


function showPreviousMove() {
 if(curMoveIndex > 0) {
  curMoveIndex--;
  boardCells = [...gameHistory[curMoveIndex]];
  updateButtons();
  updateBoard();
 }
}

function showNextMove() {
  if(curMoveIndex < (gameHistory.length - 1)) {
    curMoveIndex++;
    boardCells = [...gameHistory[curMoveIndex]];
  }
  updateButtons();
  updateBoard();
}

function updateBoard() {
  let arr = gameHistory[curMoveIndex];
  console.log(curMoveIndex)
  console.log(arr)
  // cells.forEach((cell, index) => {
  //   cell.innerText = boardCells[index];
  // })
}

function updateButtons() {
  prevtBtn.disabled = curMoveIndex === 0;
  nextBtn.disabled = curMoveIndex === gameHistory.length - 1;
}



function checkWin(curPlayer) {
  // Check rows
  for (let row = 0; row < 3; row++) {
    if (boardCells[row][0] === curPlayer && boardCells[row][1] === curPlayer && boardCells[row][2] === curPlayer) {
      return true;
    }
  }

  // Check columns
  for (let col = 0; col < 3; col++) {
    if (boardCells[0][col] === curPlayer && boardCells[1][col] === curPlayer && boardCells[2][col] === curPlayer) {
      return true;
    }
  }

  // Check diagonals
  if (
    (boardCells[0][0] === curPlayer && boardCells[1][1] === curPlayer && boardCells[2][2] === curPlayer) ||
    (boardCells[0][2] === curPlayer && boardCells[1][1] === curPlayer && boardCells[2][0] === curPlayer)
  ) {
    return true;
  }
}