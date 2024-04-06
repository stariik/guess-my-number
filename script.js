'use strict';

// console.log(document.querySelector('.message').textContent);

// let message = document.querySelector('.message').textContent;

// let num = document.querySelector('.guess').textContent;

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const check = (given_num, guess_num) => {
  console.log('check fucntion activated');

  if (given_num == guess_num) {
    console.log('congrats');
    document.querySelector('.message').textContent = 'Congrats You Won 🎉';
    document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').textContent = given_num;
    document.querySelector('body').style.backgroundColor = 'green'
    document.querySelector('.number').style.width = '30rem'
  } else if (given_num > guess_num) {
    document.querySelector('.message').textContent = 'Higher';
  } else if (given_num < guess_num) {
    document.querySelector('.message').textContent = 'Lower';
  }
};

let given_num = Math.floor(Math.random() * 20);
console.log(given_num);

let score = Number(document.querySelector('.score').textContent);
console.log(score);

const randomize = () => {
  score = 20;
  document.querySelector('.score').textContent = score;
  given_num = Math.floor(Math.random() * 20);
  console.log(given_num);
};

document.querySelector('.check').addEventListener('click', function () {
  let guess_num = Number(document.querySelector('.guess').value);
  score--;
  document.querySelector('.score').textContent = score;
  check(given_num, guess_num);
});

document.querySelector('.again').addEventListener('click', randomize);
