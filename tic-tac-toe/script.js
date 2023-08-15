const cells = document.querySelectorAll('.cell');
const divticTacToe = document.getElementById('ticTacToe');
const infoGame = document.getElementById('infoGame');
const resetBtn = document.getElementById('resetButton');
const prevtBtn =document.getElementById('prevButton'); 
const nextBtn =document.getElementById('nextButton');
let player = document.getElementById('player');
let curPlayer  = 'X';
const gameHistory = [];
const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]           // diagonals
];

let boardCells = ["", "", "", "", "", "", "", "", ""];
let isGameOver = false;

player.addEventListener('change', function(){
  curPlayer = player.value;
  infoGame.innerHTML = `Player ${curPlayer} Start`;
})

divticTacToe.addEventListener('click', markCellTarget)
resetBtn.addEventListener('click', resetGame);





function playerTurn(){
  curPlayer = curPlayer === 'X' ? 'O' : 'X';
  infoGame.innerHTML = `Player ${curPlayer}'s Turn`;
}

function updateBoardCells(cellId){
  boardCells[cellId] = curPlayer;
}

function markCellTarget(e) {
  const target = e.target;
  const targetValue = document.getElementById(target.id);
  targetValue.innerText = curPlayer;
  updateBoardCells(target.id);
  checkWinner();
  console.log(curPlayer)
  
}

function checkWinner() {
  for(let i = 0; i <=7; i++) {
    const winCombo = winningCombos[i];
    let a = boardCells[winCombo[0]];
    let b = boardCells[winCombo[1]];
    let c = boardCells[winCombo[2]];

    if (a === '' || b === '' || c === '') {
      continue;
    }
    
    if (a === b && b === c) {
      isGameOver = true;
      break
    }
  }
  
  if(isGameOver) {
    infoGame.innerHTML = `Player ${curPlayer}'s Won!`;
    saveGameHistory(boardCells);
    return;
  } else {
    playerTurn();
  }
}
  

function resetGame() {
  cells.forEach((cell, index) => {
    cell.innerText = '';
  })
  boardCells = ["", "", "", "", "", "", "", "", ""];
  isGameOver = false;
  infoGame.innerHTML = `Select player`;
}

function saveGameHistory(boardCells) {
  gameHistory.push([...boardCells])
}



