'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = ' 🎉 Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// function getInformation(country, continent, population, isIsland) {
//     if (isIsland == false) {
//         isIsland = `not an island`;
//     } else {
//         isIsland = `an island`;
//     }

//     return `The name of your country is ${country}, and it is found in the wonderful continent of ${continent}, it is home to about ${population} million people with diverse culture and it is ${isIsland}`;
// }

// console.log(getInformation('Nigeria', 'Africa', 253, false));
// console.log(getInformation('Italy', 'Europe', 59, false));
// console.log(getInformation('Ghana', 'Africa', 23, false));
// console.log(getInformation('Austria', 'Europe', 99, true));
// console.log(getInformation('Niger', 'Africa', 3, false));
// console.log(getInformation('America', 'North America', 759, false));

// const getInformations = (name, dateOfBirth, occupation, state) =>
//     `My name is ${name}, and I am ${
//     2022 - dateOfBirth
//   } old, I work as ${occupation} in ${state}`;

// console.log(getInformations('Josh', 1999, 'Developer', 'Kano'));
// console.log(getInformations('Jeff', 1995, 'Teacher', 'Lagos'));
// console.log(getInformations('Ken', 1979, 'Tailor', 'Abuja'));
// console.log(getInformations('Joe', 2010, 'Banker', 'Enugu'));

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // when there is no guess
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number!';

        //When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        // when guess is too high
    } else if (guess > secretNumber && guess <= 20) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }

        //when guess is too low
    } else if (guess < secretNumber && guess >= 1) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }

        // when guess is not in range
    } else if (guess > 20 || guess < 1) {
        document.querySelector('.message').textContent = '1 - 20 boss!';
    }
});

document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('.score').textContent = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    Number((document.querySelector('.guess').value = ''));
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});