// function decleration

function greet() {
    return 'hello chima';
}


let user = greet()

console.log(user);


// function expression
// it is a variable that holds a function.

const sqr = function(number) {
   return number * number
}

let resultOfSqr = sqr(4)
console.log(resultOfSqr)

// multiply 

const multiply = function(x, y) {
    return x * y
}

let resultOfMultiply = multiply(2,7);
console.log(resultOfMultiply);



const dateOfBirth = function() {
    let birthYear = prompt('enter your date of birth');
    return 2022 - birthYear;
}

let userAge = dateOfBirth()
// console.log(userAge)


const eligiable = function(age) {
    if (age >= 18) {
        console.log('you are eligible')
    }else {
        console.log('you are not eligible')
    }
}

eligiable(userAge)


// const greet = function() {
//     return 'hello chima';
// }


// assignment 4

function dolphinsScore() {
    return Math.floor(96 + 108 + 89) / 3
}


function koalasScore() {
    return Math.floor(88 + 91 + 110) / 3
}

let dolphins = dolphinsScore()
let koalas = koalasScore()


const gameWinner = function(firstScore, secondScore) {
    if(firstScore > secondScore) {
        console.log('dolphins win the game')
    }else {
        console.log('kolas wins the game')
    }
}

gameWinner(dolphins, koalas)

// arrays of object.

const friends = ['chima', 'collins', 'mike', 'ben']

console.log(friends[friends.length-1])   //getting the last index of an array.

console.log(friends.length)   //getting the total number of an array



friends[0] = 'john'

console.log(friends)

friends.pop() //removes the last index of an array.
console.log(friends)

// if i want to get the deleted or poped item , i can always assign a variable.
let popedItem = friends.pop()
console.log(popedItem)
console.log(friends)

friends.shift() //removes the first index of an array.
console.log(friends)


const data = [
    {firstName: 'john', lastName: 'doe', address: 'no 4 peter street '},
    {
        firstName: 'chima', lastName: 'offia', address: 
        'no 30 igundu street ', hobbies: ['football', 'reading'], profession: 'developer', maritalStatus: true,
    },
    {firstName: 'ben', lastName: 'ahaome', address: 'no 12 igwe street '},
]


console.log(data[1])
console.log(data[1].hobbies[0])
