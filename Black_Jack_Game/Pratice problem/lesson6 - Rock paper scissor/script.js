let choose = ["rock", "paper", "scissor"];

function randomHand() {
  let pick = Math.floor(Math.random() * 3);
  return pick;
}




let player1_value
function player1_El() {

    let player1_pick = document.getElementById("player1_pick")
    player1_value = choose[randomHand()]
    player1_pick.textContent = player1_value

    // return player1_value;
}

 console.log()

let player2_value
function player2_El() {
    let player2_pick = document.getElementById("player2_pick")
    player2_value = choose[randomHand()];
    player2_pick.textContent = player2_value

    // return player2_value;
    gameLogic(); 
}

function gameLogic() {
    if (player1_value === "rock" && player2_value === "paper") {
        document.getElementById("result_El").textContent = "player 2 win Huuuurrrraaaay 🥳" ;
      } else if (player1_value === "rock" && player2_value === "scissor") {
        document.getElementById("result_El").textContent = "player 1 win Huuuurrrraaaay 🥳";
      } else if (player1_value === "paper" && player2_value === "rock") {
        document.getElementById("result_El").textContent = "player 1 win Huuuurrrraaaay 🥳";
      } else if (player1_value === "paper" && player2_value === "scissor") {
        document.getElementById("result_El").textContent = "player 2 win Huuuurrrraaaay 🥳";
      } else if (player1_value === "scissor" && player2_value === "rock") {
        document.getElementById("result_El").textContent = "player 2 win Huuuurrrraaaay 🥳";
      } else if (player1_value === "scissor" && player2_value === "paper") {
        document.getElementById("result_El").textContent = "player 1 win Huuuurrrraaaay 🥳";
      } else {
        document.getElementById("result_El").textContent = "Game Tie Hmmmm... 🙂";
      }
}





