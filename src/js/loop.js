for(let i = 0; i < 5; i++) {
    console.log(i, 'hello world')
}


const cars = ['Benz', 'Toyota', 'Honda'];

for (let i = 0; i < cars.length; i++){
    console.log(cars[i])
}

const myStudents = [
    {firstName: 'chima', lastName: 'offia', scores: 79},
    {firstName: 'david', lastName: 'james', scores: 60},
    {firstName: 'christian', lastName: 'nnamani', scores: 80},
    {firstName: 'grace', lastName: 'igwe', scores: 50},
]

for(let i=0; i < myStudents.length; i++) {
     console.log(`${myStudents[i].firstName} scored ${myStudents[i].scores}`);
}


let total =0
for(let i=0; i < myStudents.length; i++) {
    let student = myStudents[i] 
    total += student.scores
}


console.log(`the total scores is ${total}.`)



let average = Math.floor(total/myStudents.length);
console.log(average)


const data = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let student = arr[i]
        console.log(`${student.firstName} scored ${student.scores}`)
    }
}


data(myStudents)