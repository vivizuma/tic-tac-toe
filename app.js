//factory function for players
const playerFactory = (name, marker, number) => {
  return { name, marker, number };
};

const player1 = playerFactory("Player 1", "x", 1);
const player2 = playerFactory("Player 2", "o", 1);

console.log(player1.marker);
console.log(player1.name);

console.log(player2.marker);
console.log(player2.name);

// const gameBoard = ((tgt) => {
//   const grid = [
//     { square: "sq1", marker: "" },
//     { square: "sq2", marker: "" },
//     { square: "sq3", marker: "" },
//     { square: "sq4", marker: "" },
//     { square: "sq5", marker: "" },
//     { square: "sq6", marker: "" },
//     { square: "sq7", marker: "" },
//     { square: "sq8", marker: "" },
//     { square: "sq9", marker: "" },
//   ];

// })();

//insert player marker to position in two dimensional gameBoard array
function boardController(row, column, marker) {
  // .splice(index, 1 to replace, current player marker)
  gameBoard[row].splice(column, 1, marker);
}
let gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
function displayController() {

  const gameContainer = document.getElementById("gameContainer");
  const sq1 = document.getElementById("sq1");
  const sq2 = document.getElementById("sq2");
  const sq3 = document.getElementById("sq3");
  const sq4 = document.getElementById("sq4");
  const sq5 = document.getElementById("sq5");
  const sq6 = document.getElementById("sq6");
  const sq7 = document.getElementById("sq7");
  const sq8 = document.getElementById("sq8");
  const sq9 = document.getElementById("sq9");

  let rounds = 0;
  const squareArray = [sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9];
  squareArray.forEach((square) => {
    square.addEventListener("click", () => {
      //allows click event only if square is empty
      if (square.innerText === "") {
        //checks turn, uses current player marker, adds round
        square.innerText = checkTurn(rounds).marker;
        let dataIndex = square.getAttribute("data-index");
        console.log(dataIndex);
        console.log(gameBoard);
        let row = parseInt(dataIndex[0]);
        let column = parseInt(dataIndex[2]);
        console.log(row);
        console.log(column);
        boardController(row, column, checkTurn(rounds).marker);
        console.log(gameBoard);
        console.log(gameBoard[0][1]);
        winCheck();
        rounds++;
      }
      if (square.innerText != "") {
        return;
      }
    });
  });
}
function initPlayers() {
  player1.number = 1;
  player2.number = 2;
}

//
function checkTurn(rounds) {
  if (rounds % 2 === 0) {
    return player1;
  }
  if (rounds % 2 === 1) {
    return player2;
  }
}

displayController();

function winCheck() {
  //horizontal
  for (i = 0; i < 3; i++) {
    if (
      gameBoard[i][0] === gameBoard[i][1] &&
      gameBoard[i][1] === gameBoard[i][2] &&
      gameBoard[i][0] != ""
    ) {
      resetBoard();
      gameOver(true);
      console.log("horizontal win");
    }
  }
  //vertical
  for (j = 0; j < 3; j++) {
    if (
      gameBoard[0][j] === gameBoard[1][j] &&
      gameBoard[1][j] === gameBoard[2][j] &&
      gameBoard[0][j] != ""
    ) {
      console.log("vertical win");
    }
  }
  //diagonal win 1
  if (
    gameBoard[0][0] == gameBoard[1][1] &&
    gameBoard[1][1] == gameBoard[2][2] &&
    gameBoard[0][0] != ""
  ) {
    console.log("diag win");
  }
  //diagonal win 2
  if (
    gameBoard[0][2] == gameBoard[1][1] &&
    gameBoard[1][1] == gameBoard[2][0] &&
    gameBoard[0][2] != ""
  ) {
    console.log("diag win 2");
  }
}

function resetBoard() {
  gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  console.log(`"new gameboard: ${gameBoard}"`);
}

function gameOver(status) {
  let gameOver = status;
  console.log(`"game over: ${gameOver}"`);
  if (gameOver = true) {
   

  }
}
``