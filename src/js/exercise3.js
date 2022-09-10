// procedural paradigm way of programming.
const firstName = 'chima';
const lastName = 'offia';
const hobbies = ['coding', 'football'];
const age = 28;
const isMarried = true;

console.log(`${firstName} ${lastName}`);

// function

function greet(name) {
    return `hello ${name}`;
}

const squareRoot = function (x) {
    return x * x;
};

console.log(squareRoot(5));

console.log(greet(firstName));

// object
const user = {
    firstName: 'chima',
    lastName: 'offia',
    hobbies: ['coding', 'football'],
    age: 28,
    isMarried: true,
    greet: function (name) {
        return `hello ${name}`;
    },
};

console.log(user.greet('mike'));

console.log(user.firstName, user.lastName);

//object
const chima = {
    fullNname: 'chima offia',
    weight: 95,
    height: 1.88,
    chimaBmi: Math.floor(95 / (1.88 * 2)),
};

// console.log(chima.chimaBmi);

const mike = {
    fullNname: 'mike mathias',
    weight: 77,
    height: 1.69,
    mikeBmi: Math.floor(77 / (1.69 * 2)),
};

// question 1 when i created mikebmi in an object and called weight the value was empty,why?
// 2 how do i use a method in an object eg math.floor?

if (chima.chimaBmi > mike.mikeBmi) {
    console.log(
        `chima bmi is ${chima.chimaBmi} is higher than mike bmi ${mike.mikeBmi}`
    );
}

// whileloop

// let password = 'alpha';
// let userpassword = prompt('please enter your password');
// while (password !== userpassword) {
//     userpassword = prompt('sorry,wrong answer.try again');
// }
// console.log("welcome i'm grateful");
// 2
// let userIput = prompt('say something');
// while (true) {
//     userIput = prompt(userIput);
//     if (userIput === 'stop that') {
//         alert('sorry, i was joking with you');
//         break;
//     }
// }

// 3

// let userAge = Number(prompt('please enter your age'));
// while (!userAge) {
//     userAge = Number(prompt('invalid age try again'));
// }
// if (userAge >= 18) {
//     console.log('you are eligible');
// } else {
//     console.log('sorry you are not eligible');
// }

// assignment
// giving an array of const numbers = [1,2,3,4,5,6,7,8,9];
//  loop through this and give me the square root of each
// of them in a saperate array.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const arr = [];

// for (i = 0; i < numbers.length; i++) {
//     arr.push(numbers[i] * numbers[i]);
// }

// console.log(arr);

let computerGuess = Math.floor(Math.random() * 10);
// console.log(computerGuess);
let userGuess = Number(prompt('please guess a number'));
let guessCounter = 1;

while (computerGuess !== userGuess) {
    guessCounter++;
    if (userGuess > computerGuess) {
        userGuess = Number(prompt('oops number guessed is too high.try again'));
    } else {
        userGuess = Number(prompt('oops number guessed is too low.try again'));
    }
}

if (computerGuess === userGuess) {
    console.log(`number matched, you win with ${guessCounter} guess`);
}
