// funtions are chunks of code

// function greetings() {
//     console.log('hi chima')
// }

// greetings();

// creating a function with parameter.
// a parameter is a local variable in a function.

function greetings(person) {
    console.log(`hi ${person}`);
}

greetings('mike');

greetings('chima');
greetings(1234567890);

// function squareRoot(number) {
//     console.log(number * number)
// }

// squareRoot(5)

// using return statement

function squareRoot(number) {
    let result = number * number;
    return result;
}

let myResult = squareRoot(5);
console.log(myResult);

// using function to create voters elegibility

function dateOfBirth() {
    let userAge = Number(prompt('please enter your date of birth'));
    let currentYear = 2022;
    let age = currentYear - userAge;
    return age;
}

let age = dateOfBirth();

function checkEligibility(userAge) {
    if (userAge >= 18) {
        console.log('you are eligible to vote');
    } else {
        console.log('sorry you are not yet eligible to vote');
    }
}

checkEligibility(age);

function wokersAge(birthYear, ageOfRetirement) {
    age = 2022 - birthYear;
    return ageOfRetirement - age;
}

let retirement = wokersAge(1994, 65);

console.log(retirement);

// function expression  are just functions that are assign to a variable.
// the different between function decrelation and function expression is hoisting.
// it a synthetic sugar.

const getuser = function () {};

// arrow function

const add = (n) => {
    return n + n;
};

const result = add(3);

// when writing a shot code with arrow function you can use this

// const add = (n) => n+n;

// const result =add(6);
