var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
document.querySelector(".container .img1").setAttribute("src", randomDiceImage1); // Change img to random dice.png



var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png"; 
document.querySelector(".container .img2").setAttribute("src", randomDiceImage2);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player 1 Wins!";
}
//If player 2 wins
else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins!";
}
//If a Draw
else {
    document.querySelector(".container h1").innerHTML = "Draw!"
}