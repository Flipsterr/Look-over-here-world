const knapp = document.getElementById("knapp")

let player1 = undefined

const header = document.getElementById("choose")

function rock() {
    game("rock")
}
function paper() {
    game("paper")
}
function scissors() {
    game("scissors")
}

function game(player2){
    if (player1 === undefined) {
        player1 = player2
    } 
    else {
        //Tieme!
        if(player1 === player2){
            tie()
        }
        //Rock Time!
        if (player1 === "rock") {
            if(player2 === "scissors"){
                player1wins()
            }
            if(player2 === "paper"){
                player2wins()
            }            
        }
        //Scissor Time!
        if (player1 === "scissors") {
            if(player2 === "paper"){
                player1wins()
            }
            if(player2 === "rock"){
                player2wins()
            }
        }
        //Paper Time!
        if (player1 === "paper") {
            if(player2 === "rock"){
                player1wins()
            }
            if(player2 === "scissors"){
                player2wins()
            }
        }
        player1 = undefined    
    }
}

//Result Alerts
function player1wins() {
    alert ("Player 1 wins player 2 you f-ing suck")
}
function player2wins() {
    alert ("Player 2 wins player 1 you f-ing suck")
}
function tie() {
    alert ("TIE!! You Maggots!")
}

//Choose your fighter!

console.log (player1)
if (player1 === undefined) {
    header.textContent = "Player 1 please choose"
}
else {
    header.textContent = "Player 2 please choose"
}