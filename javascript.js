
// random number > will execute the number of the image(dice)
const firstRandom = Math.floor(Math.random()*6) + 1;
const secondRandom = Math.floor(Math.random()*6) + 1;

// images src connect with the random number
const firstImage = 'images/dice' + firstRandom + '.png';
const secondImage = 'images/dice' + secondRandom + '.png';

// display the images randomly
document.getElementById("img1").setAttribute('src',firstImage);
document.getElementById("img2").setAttribute('src',secondImage);