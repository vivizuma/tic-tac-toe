//factory function for players
const playerFactory = (name, marker, number, score) => {
  return { name, marker, number, score };
};

const player1 = playerFactory("Player 1", "X", 1, 12);
const player2 = playerFactory("Player 2", "O", 1, 3);

//reset player scores

//todo ADD MODAL for name input and options^
//establish gameboard as a module
const gameBoard = (() => {
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

  //TODO -----------
  const markSquare = (column, row, player) => {
    //todo
    gameBoard.grid[row][column] = player.marker;
  };
  return { grid, clearBoardv2, markSquare };
})();

const gameController = (() => {
  let turns = 0;
  let rounds = 0;
  let gameOver = false;
  let playerList = [player1, player2];
  let activePlayer = playerList[0];
  let isDraw = false;
  let winner;
  let msg;

  const endMsg = (player) => {
    if (isDraw) {
      return (msg = "It's a draw");
    } else return (msg = `${player.name} wins`);
  };

  const switchPlayerTurn = () => {
    activePlayer =
      activePlayer === playerList[0] ? playerList[1] : playerList[0];
  };
  const turnCounter = () => {
    gameController.turns++;
  };
  const getActivePlayer = () => {
    return activePlayer;
  };

  const playRound = () => {
    // put player marker on relevant grid
    //check for win
    gameController.checkWin();
    // if no win
    //increase rounds +1
    gameController.rounds++;
    //swap player turn
    gameController.switchPlayerTurn();
    //update screen display

    //if win. screencontroller.textstatus -> "currentPlayer wins!"
  };
  const getTurns = () => {
    return gameController.turns;
  };
  const gameOverActions = (activePlayer) => {
    winner = activePlayer;
    console.log(winner);
  };
  const gameWon = () => {
    let game = gameController;
    game.gameOver = true;
    game.winner = getActivePlayer();
    game.isDraw = false;

    //increase score of winning player by 1
    game.winner.score++;
    console.log(game.winner.name);
    console.log(game.gameOver);
    console.log(game.isDraw);
  };
  const checkWin = () => {
    let grid = gameBoard.grid;

    //horizontal win conditions

    for (i = 0; i < 3; i++) {
      if (
        grid[i][0] === grid[i][1] &&
        grid[i][1] === grid[i][2] &&
        grid[i][0] != ""
      ) {
        console.log(
          "horiz WIN ------------------------------------------------------------------"
        );
        gameController.gameOver = true;
        gameController.gameWon();
      }
    }
    for (j = 0; j < 3; j++) {
      if (
        grid[0][j] === grid[1][j] &&
        grid[1][j] === grid[2][j] &&
        grid[0][j] != ""
      ) {
        console.log("vertiwiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiin");
        return (gameController.gameOver = true);
      }
    }
    if (
      grid[0][0] === grid[1][1] &&
      grid[1][1] === grid[2][2] &&
      grid[0][0] != ""
    ) {
      console.log("=-s--s-s-s-s-s- diag win");
      return (gameController.gameOver = true);
    }
    if (
      grid[0][2] === grid[1][1] &&
      grid[1][1] === grid[0][0] &&
      grid[0][0] != ""
    ) {
      console.log("other diag win");
      return (gameController.gameOver = true);
    }

    // if (gameController.gameOver === false && gameController.turns === 9) {
    //   console.log("game over, draw");
    //   return (gameController.gameOver = true);
    // }
  };
  const checkForDraw = () => {
    if (gameController.turns > 8 && gameController.gameOver === false) {
      console.log("draW");
      isDraw = true;
      return (gameController.gameOver = true);
    }
  };
  const clickGrid = () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("click", function () {
        let index = square.getAttribute("data-index");
        if (square.innerHTML != "" || gameController.gameOver === true) {
          console.log("square taken lmao");
        }
        if (gameController.gameOver === true) {
          console.log("game over");
        } else {
          console.log(index);
          console.log(activePlayer.marker);
          //get row and column from data index
          let row = parseInt(index[0]);
          let column = parseInt(index[2]);
          console.log(`"row: ${row} + col: ${column}"`);
          gameBoard.grid[row][column] = activePlayer.marker;
          console.log(
            `"activePlayer ${
              activePlayer.name
            }, gameController.activePlayer = ${
              gameController.activePlayer.name
            }, gameController.getActivePlayer() = ${gameController.getActivePlayer()}"`
          );

          console.log(activePlayer);
          //gameBoard.markSquare(column, row, activePlayer);
          console.log(gameBoard.grid);
          // gameController.checkWin();
          if (gameController.gameOver != true) {
            gameController.turnCounter();
            gameController.checkWin();
            gameController.checkForDraw();
            gameController.switchPlayerTurn();
            screenController.updateScreen();
            console.log(gameController.turns);
            console.log(gameController.gameOver);
          }
          if (gameOver === true) {
            console.log("ooooooooooooooooooooooooooo");
            gameController.gameOverActions(activePlayer);
          }
        }
      });
    });
  };

  return {
    gameWon,
    gameOverActions,
    checkForDraw,
    turnCounter,
    getTurns,
    turns,
    activePlayer,
    checkWin,
    playerList,
    gameOver,
    switchPlayerTurn,
    getActivePlayer,
    playRound,
    clickGrid,
  };
})();

const screenController = (() => {
  const game = gameController;
  const gameStatusText = document.querySelector("status-text");
  const allsquares = document.querySelectorAll(".square");
  let currentBoard;
  let activePlayer = game.getActivePlayer();
  let grid = gameBoard.grid;
  console.log(`"this is grid: ${grid}"`);
  console.log("active player is");
  console.log(activePlayer.name);
  const displayPlayerTurn = () => {
    const status = document.getElementById("status-text");
    status.innerText = `${game.getActivePlayer().name}'s turn`;
  };
  const updateScores = () => {
    const player1score = document.getElementById(
      `'${gameController.playerList[0].name}score'`
    );
    const player2score = document.getElementById("player2score");

    player1score.innerHTML = game.playerList[0].score;
    player2score.innerHTML = gameController.playerList[1].score;
  };
  const updateScreen = () => {
    // 1. clear the DOM of the current board display by setting .allsquares div to empty string ""
    allsquares.textContent = "";
    // 2. Get the most up to date board from gameController
    currentBoard = gameBoard.grid;
    // 3. Get the most up to date active player from gameController
    displayPlayerTurn();
    console.log(`"Active player: ${activePlayer.name}"`);
    // 4. Render the player.marker in square div;

    const cells = document.querySelectorAll(".square");
    //loop through  the grid and update innerHTML of each cell with current gameBoard.grid value
    for (i = 0; i < 3; i++) {
      for (j = 0; j < 3; j++) {
        const cell = cells[i * 3 + j];
        cell.innerHTML = grid[i][j];
      }
    }
  };
  return {
    displayPlayerTurn,
    updateScreen,
    updateScores,
  };
})();

function initGame() {
  gameController.clickGrid();
  screenController.displayPlayerTurn();
  screenController.updateScores();
}
//todo later
initGame();

function newRound() {
  initGame();
  gameController.turns = 0;
  gameBoard.clearBoardv2();
}
