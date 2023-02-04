//factory function for players
const playerFactory = (name, marker, number, score) => {
  return { name, marker, number, score };
};

const player1 = playerFactory("Player 1", "X", 1, 12);
const player2 = playerFactory("Player 2", "O", 1, 3);
console.log(playerFactory);
//reset player scores

//todo ADD MODAL for name input and options^
//establish gameboard as a module

const gameBoard = (() => {
  //two dimensional array for the game grid
  let grid = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const getBoard = () => grid;

  const clearBoardv2 = () => {
    for (i = 0; i < 3; i++) {
      for (j = 0; j < 3; j++) {
        gameBoard.grid[i][j] = "";
      }
    }
    console.log("board cleared");
  };
  const markSquare = (column, row, player) => {
    
  }
  return { grid, clearBoardv2, getBoard };
  // () immediately invokes the function and returns grid and hello
})();
const gameController = (()=> {
  let rounds = 0;
  let gameOver = false;
  
  const playRound = () => {
    // put player marker on relevant grid
    //check for win 
    // if no win 
    //increase rounds +1
    //swap player turn
    //update screen display

    //if win. screencontroller.textstatus -> "currentPlayer wins!"
  }
  const checkWin = () =>{
    let grid = gameBoard.grid;
    console.log(grid)

    //horizontal win conditions
   for (i=0;i<3;i++){
    console.log(grid)
   }
  }

  return {checkWin}
})

const screenController = (() => {

  const updateGridView = () => {

    // 1. clear the DOM of the current board display by setting .board div to empty string ""
    // 2. Get the most up to date board from gameController
    // 3. Get the most up to date active player from gameController
    // 4. Render the player.marker in square div;
    // 5. render each square on the DOM
          // give each cell a data attribute 
          // TODO: make cells buttons
    let grid = getElementById('gameContainer');
    grid.forEach
  }
})
gameController().checkWin()

const cells = document.querySelectorAll('.square');
cells.forEach((cell)=> {
  console.log("i am a cell")
  console.log(cell.getAttribute("data-index"))
  
})
console.log(gameBoard.grid)