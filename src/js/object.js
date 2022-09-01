// objects are just key value pair

const chima = {
    firstName: 'chima',
    lastName: 'offia',
    age: 28,
    siblings: ['vincent', 'nneka', 'ada', 'dave'],
    profession: 'developer',
    dateOfBirth: function(birthYear) {
        return 2022 - birthYear
    }
}


console.log(chima.firstName)
console.log(chima.lastName)
console.log(chima.dateOfBirth(1995))
// console.log(person)