const computerGuess = Math.floor(Math.random() * 21);
// console.log(computerGuess);

const number = document.querySelector('.number');
// number.textContent = computerGuess;

let score = 20;
const check = document.querySelector('.check');
check.addEventListener('click', function () {
    document.querySelector('.score').textContent = score;
    let guess = Number(document.querySelector('.guess').value);
    let body = document.querySelector('body');
    let message = document.querySelector('.message');
    if (!guess) {
        message.textContent = 'sorry no value imputed';
        body.style.backgroundColor = 'red';
    } else if (guess === computerGuess) {
        message.textContent = '🎉✨💃 congratulations you have won';
        body.style.backgroundColor = 'green';
        number.textContent = computerGuess;
    } else if (guess > computerGuess) {
        if (score > 1) {
            document.querySelector('.message').textContent =
                '📈sorry,wrong number.  too high';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent =
                'sorry you lost the game';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
        }
    } else if (guess < computerGuess) {
        if (score > 1) {
            document.querySelector('.message').textContent =
                '📈sorry,wrong number.  too high';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent =
                'sorry you lost the game';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }
});

const again = document.querySelector('.again');
again.addEventListener('click', function () {
    computerGuess = Math.floor(Math.random() * 20) + 1;
    let score = document.querySelector('.score');
    let message = document.querySelector('.message');
    let num = document.querySelector('.number');
    document.querySelector('body').style.backgroundColor = '#222222';
    guess.value = '';
    score.textContent = score;
    message.textContent = 'start guessing';
    num.textContent = '?';
});

// let computerGuess = Math.floor(Math.random() * 20) + 1;
// // document.querySelector('.number').textContent = computerGuess;

// let score = 20;

// document.querySelector('.check').addEventListener('click', function () {
//     let guess = Number(document.querySelector('.guess').value);
//     // console.log(guess);
//     if (!guess) {
//         document.querySelector('.message').textContent =
//             'sorry no value imputed';
//         document.querySelector('body').style.backgroundColor = 'red';
//     } else if (guess === computerGuess) {
//         document.querySelector('.message').textContent =
//             '🎉congratulations you won';
//         document.querySelector('body').style.backgroundColor = 'green';
//         document.querySelector('.number').textContent = computerGuess;
//     } else if (guess > computerGuess) {
//         if (score > 1) {
//             document.querySelector('.message').textContent =
//                 '📈sorry,wrong number.  too high';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent =
//                 'sorry you lost the game';
//             document.querySelector('.score').textContent = 0;
//             document.querySelector('body').style.backgroundColor = 'red';
//         }
//     } else if (guess < computerGuess) {
//         if (score > 1) {
//             document.querySelector('.message').textContent =
//                 'sorry, wrong number .too low';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent =
//                 'sorry you lost the game';
//             document.querySelector('.score').textContent = 0;
//             document.querySelector('body').style.backgroundColor = 'red';
//         }
//     }
// });

// document.querySelector('.again').addEventListener('click', function () {
//     score = 20;
//     computerGuess = Math.floor(Math.random() * 20) + 1;
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.guess').value = '';
//     document.querySelector('.message').textContent = 'Start guessing....';
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('body').style.backgroundColor = '#222222';
// });
