'use strict';

let number = Math.trunc(Math.random() * 25 + 1);
// console.log(number);

let displayMessage = document.querySelector('.message');
let nowscored = document.querySelector('.score');
let highscr = document.querySelector('.highscore');
let check = document.querySelector('.check');
let displayedNumber = document.querySelector('.number');
let again = document.querySelector('.again');
let bodycom = document.querySelector('body');

let score = 20;
let high = 0;

check.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage.textContent = 'No Number';
  } else if (guess === number) {
    if (score >= 1) {
      displayMessage.textContent = 'Correct Answer';
    }
    bodycom.style.backgroundColor = '#60b347';
    displayedNumber.textContent = number;
    if (score > high) {
      high = score;
      highscr.textContent = high;
    }
  } else if (guess !== number && guess < 26) {
    if (score >= 1) {
      score--;
      nowscored.textContent = score;
      displayMessage.textContent = guess > number ? 'Too High' : 'Too Low';
      bodycom.style.backgroundColor = '#222';
    } else {
      displayMessage.textContent = 'You Lose the Game.';
      bodycom.style.backgroundColor = '#FF0000';
    }
  } else if (guess > 25) {
    displayMessage.textContent =
      '⚠️ Invalid Number, Kindly guess the number between 1 - 25.';
    score--;
    nowscored.textContent = score;
    bodycom.style.backgroundColor = '#FF0000';
  }
});

again.addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 25 + 1);
  // console.log(number);
  nowscored.textContent = score;
  document.querySelector('.guess').value = '';
  bodycom.style.backgroundColor = '#222';
  displayedNumber.style.width = '15rem';
  displayedNumber.textContent = '?';
});
