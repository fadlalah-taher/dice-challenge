// DOM

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var header = document.getElementById("header");


// random number > will execute the number of the image randomly from(1>6)
const firstRandom = Math.floor(Math.random()*6) + 1;
const secondRandom = Math.floor(Math.random()*6) + 1;

// images(src) connected with the random number
const firstImage = 'images/dice' + firstRandom + '.png';
const secondImage = 'images/dice' + secondRandom + '.png';

// display the images randomly
img1.setAttribute('src',firstImage);
img2.setAttribute('src',secondImage);


// Result player1 vs player 2

if(firstRandom > secondRandom){
    header.innerHTML= "🚩 Player 1 Wins!";
}
else if(firstRandom < secondRandom){
    header.innerHTML= "🚩 Player 2 Wins!";
}
else{
    header.innerHTML= "Draw!";
}