//factory function for players
const playerFactory = (name, marker) => {
  return { name, marker };
};

const player1 = playerFactory("Player 1", "x");
const player2 = playerFactory("Player 2", "o");
console.log(player1.marker);
console.log(player1.name);

console.log(player2.marker);
console.log(player2.name);

const gameBoard = (() => {
  const grid = [
    { square: "sq1", marker: "" },
    { square: "sq2", marker: "" },
    { square: "sq3", marker: "" },
    { square: "sq4", marker: "" },
    { square: "sq5", marker: "" },
    { square: "sq6", marker: "" },
    { square: "sq7", marker: "" },
    { square: "sq8", marker: "" },
    { square: "sq9", marker: "" },
  ];
})();

function gameButtons() {
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

  const squareArray = [sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9]
  squareArray.forEach((square) => {square.addEventListener("click", ()=> {
    console.log(square.id)
    if(square.innerText = ""){
        square.innerText = player1.marker
    }
    
  })
})}

gameButtons()