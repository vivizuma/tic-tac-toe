//factory function for players
const playerFactory = (name, marker, number, score) => {
  return { name, marker, number, score };
};

const player1 = playerFactory("Player 1", "X", 1, 0);
const player2 = playerFactory("Player 2", "O", 1, 0);

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
  let isWin = false;
  let playerList = [player1, player2];
  let activePlayer = playerList[0];
  let isDraw = false;
  let winner;
  let msg;
  let previousPlayer = playerList[0];
  const resetVariables = () => {
    let gameController = g;
    g.turns = 0;
    g.rounds = 0;
    g.gameOver = false;
    g.isWin = false;
    g.playerList = [player1, player2];
    g.activePlayer = playerList[0];
    g.isDraw = false;
    g.winner;
    g.msg;
  };

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
    console.log(gameController.turns);
    gameController.turns++;
    console.log(gameController.turns);
  };
  const getActivePlayer = () => {
    return activePlayer;
  };
  const PreviousPlayer = () => {
    previousPlayer =
      activePlayer === playerList[0]
        ? (previousPlayer = playerList[1])
        : (previousPlayer = playerList[0]);
  };
  const getPreviousPlayer = () => {
    return previousPlayer;
  };
  const getTurns = () => {
    return gameController.turns;
  };
  const gameOverActions = () => {
    //check if win or draw
    // if draw change msg to its a draw'
    //if win increase score +1 and change msg to x wins

    if (gameController.isDraw === true && gameController.gameOver === true) {
      gameController.msg = "It's a draw!";
      console.log(gameController.msg);
      screenController.gameOverModal();
    }
    if (gameController.gameOver === true && gameController.isDraw === false) {
      msg = `${gameController.getActivePlayer().name} wins!`;
      gameController.getActivePlayer().score++;
      screenController.updateScores();
      console.log(msg);
      screenController.gameOverModal();
    }
  };
  const checkGameOver = () => {
    if (gameController.gameOver === true) {
      gameController.winner = gameController.getPreviousPlayer();
      if (gameController.isWinner === true && gameController.isDraw === false) {
        gameController.gameOverActions();
      }
      if (gameController.isDraw === true && gameController.isWin === false) {
        gameController.gameOverActions();
      }
    }
  };
  // const gameWon = () => {
  //   let game = gameController;
  //   game.gameOver = true;
  //   game.isWin = true;
  //   game.winner = getPreviousPlayer().name;
  //   game.isDraw = false;

  //   //increase score of winning player by 1
  //   gameController.gameOverActions();
  //   console.log(game.winner.name);
  //   console.log(game.gameOver);
  //   console.log(game.isDraw);
  // };
  const checkWin = () => {
    let grid = gameBoard.grid;

    //horizontal win conditions

    for (i = 0; i < 3; i++) {
      if (
        grid[i][0] === grid[i][1] &&
        grid[i][1] === grid[i][2] &&
        grid[i][0] != ""
      ) {
        gameController.isWinner = true;
        gameController.gameOver = true;
      }
    }
    //vertical wins
    for (j = 0; j < 3; j++) {
      if (
        grid[0][j] === grid[1][j] &&
        grid[1][j] === grid[2][j] &&
        grid[0][j] != ""
      ) {
        gameController.isWinner = true;
        gameController.gameOver = true;
      }
    }
    //diag wins
    if (
      grid[0][0] === grid[1][1] &&
      grid[1][1] === grid[2][2] &&
      grid[0][0] != ""
    ) {
      gameController.isWinner = true;
      gameController.gameOver = true;
    }
    if (
      grid[0][2] === grid[1][1] &&
      grid[1][1] === grid[2][0] &&
      grid[0][2] != ""
    ) {
      gameController.isWinner = true;
      gameController.gameOver = true;
    }

    // if (gameController.gameOver === false && gameController.turns === 9) {
    //   console.log("game over, draw");
    //   return (gameController.gameOver = true);
    // }
  };
  const checkForDraw = () => {
    console.log(gameController.turns);
    console.log("before check");
    if (gameController.getTurns() > 8) {
      console.log(gameController.turns);
      console.log(gameController.getTurns());
      console.log("greater than x");

      gameController.isDraw = true;
      gameController.gameOver = true;
    }
  };

  const clickGrid = () => {
    let game = gameController;
    let screen = screenController;
    const squares = document.querySelectorAll(".square");
    if (gameController.gameOver != true) {
      squares.forEach((square) => {
        square.addEventListener("click", function () {
          let index = square.getAttribute("data-index");
          if (square.innerHTML != "") {
            console.log("square taken lmao");
          } else {
            //get row and column from data index
            let row = parseInt(index[0]);
            let column = parseInt(index[2]);
            gameBoard.grid[row][column] = activePlayer.marker;
            //gameBoard.markSquare(column, row, activePlayer);
            // gameController.checkWin();

            game.turnCounter();
            game.checkWin();
            game.checkForDraw();
            game.checkGameOver();
            game.switchPlayerTurn();

            screen.updateScreen();
            console.log(game.getTurns());
            console.log(game.isDraw);
            console.log(game.gameOver);
            // gameController.turnCounter();
            // screenController.updateScreen();
            // gameController.checkWin();
            // gameController.checkForDraw();

            // screenController.updateScreen();
            // gameController.switchPlayerTurn();
            // gameController.PreviousPlayer();
            // gameController.checkGameOver();
            // screenController.displayPlayerTurn;
            // screenController.updateScores;
          }
        });
      });
    }
  };

  return {
    PreviousPlayer,
    resetVariables,

    gameOverActions,
    checkForDraw,
    checkGameOver,
    turnCounter,
    getTurns,
    getPreviousPlayer,
    turns,
    isWin,
    isDraw,
    activePlayer,
    previousPlayer,
    checkWin,
    playerList,
    gameOver,
    switchPlayerTurn,
    getActivePlayer,
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

  const displayPlayerTurn = () => {
    const status = document.getElementById("status-text");
    status.innerText = `${game.getActivePlayer().name}'s turn`;
  };
  const updateScores = () => {
    const player1score = document.getElementById("player1score");
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

  const gameOverModal = () => {
    const modal = document.getElementById("gameOverModal");
    const btn = document.getElementById("gameOverModal");
    const endMsg = document.getElementById("endMsg");

    endMsg.innerHtml = gameController.msg;
    modal.style.display = "block";
  };
  return {
    gameOverModal,
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
  gameController.resetVariables();
  gameBoard.clearBoardv2();
}
