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



const friends = ['Tochi', 'mike', 'collins', 'chima', 'chuks'];

for(i = 0; i < friends.length; i++) {
//    console.log(friends[i])
    if(friends[i] === 'collins') {
        console.log(`${friends[i]} you are scheduled for interview on monday.`)
    }
}
























const staffs = ['Christian', 'Elijah', 'Gideon', 'Alex', 'Franka','Aziz',
'Jessica', 'Rose', 'Naomi', 'Lovina', 'Chidera'];

for(i = 0; i < staffs.length; i++) {
    // console.log(staffs[i])
    if(staffs[i] === 'Alex') {
        console.log(`${staffs[i]} is my name.`)
    }
}








const wookers = ['chuks', 'jessy', 'franka', 'chidera','aziz', 
'Jessica', 'Rose', 'Naomi', 'Lovina'];

for(i =0; i < wookers.length; i++) {
    if(wookers[i] === 'aziz') {
        console.log(`i am ${wookers[i]}`)
    }
    
}













function dateOfBirth() {
    let userAge = Number(prompt('please enter your date of birth'))
    let currentYear = 2022
    let age = currentYear - userAge
    return age
}

let age = dateOfBirth()

function checkEligibility(userAge) {
    if (userAge >= 18) {
        console.log('welcome to the party')
    }else {
        console.log('sorry you are not allowed')
    }
};









function userLogin(){
    let username = prompt('please enter your username')
    let userPassword =  prompt('please enter your password')
}
