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

  const clearBoardv2 = () => {
    for (i = 0; i < 3; i++) {
      for (j = 0; j < 3; j++) {
        gameBoard.grid[i][j] = "";
      }
    }
    console.log("board cleared");
  };

  return { grid, clearBoardv2 };
  // () immediately invokes the function and returns grid and hello
})();
const gameController = (()=> {
  
})

const screenController = (() => {
  
})