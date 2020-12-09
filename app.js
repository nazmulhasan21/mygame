

var scores, roundScore, activePlayer,gamePlaying, dice, finalScore, diceDOM;


init()
 


document.querySelector(".btn-roll").addEventListener("click", function(){
    if (gamePlaying){
        // 1. Random number
        dice = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result   
        diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "img/dice-" + dice + ".png"


        // 3. Update the round score 
        if (dice !==1){
            // Add score
            roundScore += dice;
            document.querySelector("#current-" + activePlayer).textContent = roundScore ;
        }else {
            // next player
            nextPlayer();
        }
    }
  
});
 
document.querySelector(".btn-hold").addEventListener("click", function(){
    if (gamePlaying){
         // Add current score to Global
            scores[activePlayer] += roundScore;

            // Update UI
            document.querySelector("#score-" + activePlayer).textContent =  scores[activePlayer];
            finalScore = document.querySelector(".final-score").value;
            // Check if player won the game
            if (scores[activePlayer] >= finalScore) {
                document.querySelector("#name-" +activePlayer).textContent = "Winner!"; 
                diceDOM.style.display = "none";
                document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
                document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");

                gamePlaying = false;
            }else {
                // Next player
                nextPlayer();
            }
    }
     
});
 
// New Game
 
document.querySelector(".btn-new").addEventListener("click", init);

//next player
function nextPlayer () {
    activePlayer === 0  ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector("#current-0").textContent = 0;
    document.querySelector("#current-1").textContent = 0;


    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    diceDOM.style.display = "none";
};
 
function init(){
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector(".dice").style.display = "none";

    document.querySelector("#score-0").textContent = "0";
    document.querySelector("#score-1").textContent = "0";

    document.querySelector("#current-0").textContent = "0";
    document.querySelector("#current-1").textContent = "0";

    document.querySelector("#name-0").textContent = "Player 1";
    document.querySelector("#name-1").textContent = "Player 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");


};
 


 
 