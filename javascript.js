
// First random number 
const firstRandom = Math.floor(Math.random()*6) + 1;

// images src
const firstImage = 'images/dice' + firstRandom + '.png';

document.querySelectorAll('img')[0].setAttribute('src',firstImage);