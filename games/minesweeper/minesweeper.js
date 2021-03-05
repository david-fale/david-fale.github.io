document.addEventListener('DOMContentLoaded', startGame);
document.addEventListener("click", checkForWin);
document.addEventListener("contextmenu", checkForWin);
// Define your `board` object here!
// var board = {cells: [
//   {row: 1, col:1, isMine: true, isMarked: false, hidden: true}, 
//   {row: 1, col:2, isMine: false, isMarked: false, hidden: true}, 
//   {row: 1, col:3, isMine: true, isMarked: false, hidden: true}, 
//   {row: 2, col:1, isMine:true, isMarked: false, hidden: true}, 
//   {row: 2, col:2, isMine:true, isMarked: false, hidden: true}, 
//   {row: 2, col:3, isMine:false, isMarked: false, hidden: true}, 
//   {row: 3, col:1, isMine:false, isMarked: false, hidden: true}, 
//   {row: 3, col:2, isMine:false, isMarked: false, hidden: true}, 
//   {row: 3, col:3, isMine:false, isMarked: false, hidden: true}
// ]};
var board = { cells: [] };

function createBoard (num) {
  // create number of cells specified by num
  //randomise isMine 
  //make sure number of cells make a square
  for (var j = 0; j < num; j++) {
    for (var s = 0; s< num; s++) {
      board.cells.push({      
        row: j,
        col: s,
        isMine: Math.floor(Math.random() * Math.floor(2)) ,
        hidden: true
  });
    }
 
  }

}

createBoard(6)
function startGame () {
  // Don't remove this function call: it makes the game work!
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]); 
  }
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
 for (var i = 0; i < board.cells.length; i++) {
   if (!board.cells[i].isMarked && board.cells[i].isMine) { 
    return;
  }  else if (board.cells[i].hidden&& !board.cells[i].isMine) {
    return ;
  }    
}
 return lib.displayMessage('You win!')
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  count = 0;
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  for (var i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine) {
      count++; 
    } 
  }
  return count
}

function restart () {
  document.location.reload();
}