const money = 0;

if (money) {
console.log('spend wisely')
} else {
    console.log('you need a job')     
}
  

const firstName = 'chima';
const lastName = 'offia';
const currentYear = 2022;
const dateOfBith = 1993;
const age = currentYear - dateOfBith;

if (age>= 18) {
    console.log('you are eligiable for a drivers licence')
}else {
    console.log('sorry you are not eligiable') 
}

// 


const ageResriction = 18;

let massage;
if (age >= ageResriction) {
    massage = 'you are eligiable to vote'
}else {
    massage = 'you are not eligiable'
};

console.log(massage);



// let x = Number(prompt('what is x ?'));
// let y = Number(prompt('what is y ?'));

// if (x < y)  {
//     console.log (`${x} is less than ${y}`)
// }else if(x > y) {
//     console.log(`${x} is greater than ${y}`);
// }else{
//     console.log(`${x} is equal to ${y}`)
// }

// logical operators

// if (x < y || x > y) {
//     console.log(`${x} is not equal to ${y}`)
// }else{
//     console.log(`${x} is equal to ${y}`)
// }

// 
// psoudo-code 90--100 =A
//             70--89  =B
//             50--69 = C
//             40--49 = D
//             

let scores =Number(prompt('please enter your scores'));

if (scores>=90 && scores <=100) {
    console.log(`your grade is A`)
}else if (scores>=70 && scores <=89) {
    console.log(`your grade id B`)
}else if (scores>=50 && scores <=69) {
    console.log(`your grade is C`)
}else if (scores>=40 && scores<=49) {
    console.log(`your grade is D`)
}else {
    console.log(`you have to think about your life`)
}



// TENARY OPERATOR is a short way of writing an if statement  it is only applicable when it invoves two statements.

let userAge = Number(prompt(`please enter your age`));

userAge > 19? console.log('you are an adult'):console.log('sorry you are a child');