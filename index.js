var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png" // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // Randomizes Image

var image1 = document.querySelectorAll("img")[0]; // Changes Dice 

image1.setAttribute("src", randomImageSource);

// Second Dice Randomizer//

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImage2 = "dice" + randomNumber2 + ".png" // dice1.png - dice6.png

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

// Winner //
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩P1 Wins!"
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "DRAW!"
} else {
    document.querySelector("h1").innerHTML = "P2 Wins! 🚩"
}




