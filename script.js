'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //   when there is no input
  if (!guess) {
    displayMessage('🚫 No Number!');
  }

  //   when player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct number');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('👎 you lost the game');
    }
  }
});

// again button onclick function
document.querySelector('.again').addEventListener('click', function () {
  // reset score
  score = 20;
  document.querySelector('.score').textContent = score;

  // to reassign a new secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // reset score message
  displayMessage('Start guessing...');

  // empty the value of text input
  document.querySelector('.guess').value = '';

  // resetting secret number
  document.querySelector('.number').textContent = '?';

  // resetting background green colour in case of win
  document.querySelector('body').style.backgroundColor = '#222';

  // hiding secret number when refreshed
  document.querySelector('.number').style.width = '15rem';
});
