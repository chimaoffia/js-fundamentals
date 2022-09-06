// const car = {
//     carName: 'Toyota',
//     carModel: 'Camry Hybrid',
//     makerYear: 2008,
//     carColour: ['Red', 'black', 'white'],

//     hasDrivingLicence: function () {
//         return 'yes i have a driving licence'
//     },

//     owner: function() {
//         return `yes i own ${this.carName}`
//     }
// }

// console.log(car.carName)
// console.log(car.carColour)
// console.log(car.hasDrivingLicence())
// console.log(car.owner())

// const friends = ['Tochi', 'mike', 'collins', 'chima', 'chuks'];

// for(i = 0; i < friends.length; i++) {
// //    console.log(friends[i])
//     if(friends[i] === 'collins') {
//         console.log(`${friends[i]} you are scheduled for interview on monday.`)
//     }
// }

// const staffs = ['Christian', 'Elijah', 'Gideon', 'Alex', 'Franka','Aziz',
// 'Jessica', 'Rose', 'Naomi', 'Lovina', 'Chidera'];

// for(i = 0; i < staffs.length; i++) {
//     // console.log(staffs[i])
//     if(staffs[i] === 'Alex') {
//         console.log(`${staffs[i]} is my name.`)
//     }
// }

// const wookers = ['chuks', 'jessy', 'franka', 'chidera','aziz',
// 'Jessica', 'Rose', 'Naomi', 'Lovina'];

// for(i =0; i < wookers.length; i++) {
//     if(wookers[i] === 'aziz') {
//         console.log(`i am ${wookers[i]}`)
//     }

// }

// function dateOfBirth() {
//     let userAge = Number(prompt('please enter your date of birth'))
//     let currentYear = 2022
//     let age = currentYear - userAge
//     return age
// }

// let age = dateOfBirth()

// function checkEligibility(userAge) {
//     if (userAge >= 18) {
//         console.log('welcome to the party')
//     }else {
//         console.log('sorry you are not allowed')
//     }
// };

// function

// function greet() {
//     console.log(`good morning `)
// }

// greet()

function hello(name) {
    console.log(`hello, welcome ${name}`);
}

hello('chima');

const greet = function (firstName, lastName) {
    console.log(`${firstName} and ${lastName}`);
};

greet([3, 4, 7], [4, 4, 6]);

// array
const scores = [44, 88, 9, 22, 'error'];
// adding to the last index
scores.push(66);

console.log(scores);

// unshift is add to the
// first index and shift or pop remove from the first index

scores.unshift(55);
console.log(scores);

scores.shift();
console.log(scores);

console.log(scores.length);
console.log(scores[scores.length - 1]);

const studentScores = [88, 40, 80, 5, 3, 7, 19];

const evenNumbers = [];

for (let i = 0; i < studentScores.length; i++) {
    if (studentScores[i] % 2 === 0) {
        evenNumbers.push(studentScores[i]);
    }
}

console.log(evenNumbers);

function checkEven(arr) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    console.log(evenNumbers);
}

checkEven(studentScores);

// objects

// a method is a function inside an object.

const person = {
    firstName: 'chima',
    lastName: 'offia',
    profession: 'developer',
    age: 22,
    hobbies: ['football', 'gaming', 'reading'],
    personality: function () {
        console.log('i code every morning');
    },
};

console.log(person.firstName);
console.log(person.age);

console.log(`my name is ${person.firstName} ${person.lastName}
 and i am ${person.age} years old and ${person.personality()}.`);

person.personality();
