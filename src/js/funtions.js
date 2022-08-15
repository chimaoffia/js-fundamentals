// funtions are chunks of code

// function greetings() {
//     console.log('hi chima')
// }

// greetings();

// creating a function with parameter.
// a parameter is a local variable in a function.

function greetings(person) {
    console.log(`hi ${person}`)
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
    let result = number * number
    return result
}


let myResult = squareRoot(5);
console.log(myResult);