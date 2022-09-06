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
    chimaBmi: 95 / (1.88 * 2),
};

// console.log(chima.chimaBmi);

const mike = {
    fullNname: 'mike mathias',
    weight: 77,
    height: 1.69,
    mikeBmi: 77 / (1.69 * 2),
};

// question 1 when i created mikebmi in an object and called weight the value was empty,why?
// 2 how do i use a method in an object eg math.floor?

if (chima.chimaBmi > mike.mikeBmi) {
    console.log(
        `chima bmi is ${chima.chimaBmi} is higher than mike bmi ${mike.mikeBmi}`
    );
}
