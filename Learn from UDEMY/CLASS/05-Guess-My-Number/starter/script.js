'use strict';

let theCorrectNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20,
    highScore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔️ No Number!';
    } else if (guess == theCorrectNumber) {
        document.body.style.backgroundColor = 'limegreen';
        document.querySelector('.number').style.fontSize = '9rem';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = theCorrectNumber;
        document.querySelector('.message').textContent =
            '🎉Congratulation, Your number is correct!';

        if (score >= highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = score;
        } else {
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess != theCorrectNumber) {
        score--;
        document.querySelector('.score').textContent = score;
        if (score >= 1) {
            if (guess < theCorrectNumber) {
                document.querySelector('.message').textContent = 'Too Low!';
            } else if (guess > theCorrectNumber) {
                document.querySelector('.message').textContent = 'Too High!';
            }
        } else {
            document.querySelector('.message').textContent =
                '😔 You lose the game...';
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    theCorrectNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = '';
    document.querySelector('.guess').setAttribute('autofocus', '');
    document.querySelector('.message').textContent = 'Start Guessing....';
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.body.style.backgroundColor = '#222';
    document.querySelector('.number').style.fontSize = '6rem';
    document.querySelector('.number').style.width = '15rem';
});