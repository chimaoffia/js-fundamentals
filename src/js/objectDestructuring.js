const restaurant = {
    name: 'Classico Italiano',
    location: 'Central Aria Abuja',
    categories: ['itallia', 'pizza', 'vegetarian', 'organic'],
    starterMenu: ['bread', 'Garlic', 'Milk', 'Salad'],
    mainMenu: ['piza', 'pasta', 'Risotto'],

    openingHours: {
        thur: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 10,
            close: 18,
        },
    },
};

const { thur, sat } = restaurant.openingHours;
console.log(thur, sat);

// const {
//     fri: { open, close };
// } = restaurant.openingHours;
// console.log(open, close);

const {
    sat: { open, close },
} = restaurant.openingHours;
console.log(open, close);

const person = {
    firstName: 'john',
    lastName: 'doe',
    age: 25,
    profession: 'Dev',
};

// function user(props) {
//     console.log(props.lastName);
//     console.log(props.firstName);
// }

function user({ firstName, lastName, age, profession = 'dancer' }) {
    console.log(firstName, lastName);
    console.log(age);
    console.log('profession must be a ', profession);
    console.log(`The use ${firstName} ${lastName} just logged in`);
}

user(person);

const { lastName: surname, age } = person;

console.log(surname, 'and his age is', age);

// shot circuiting
// or looks for the truety part of an evaluation
console.log(2 || 'chima');
console.log(0 || 'chima');
console.log(null || 0 || 'blessing' || undefined);

restaurant.numOfGuest = 10;

// tenary operator
let guest1 = restaurant.numOfGuest ? restaurant.numOfGuest : 10;
console.log(guest1);

// or operator
let guest2 = restaurant.numOfGuest || 15;
console.log(guest2);

// nullish coalicing

const guest3 = restaurant.numOfGuest ?? 13;

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// for (let item of menu) console.log(item);
for (let [index, element] of menu.entries()) {
    // console.log(item);
    console.log(`${index + 1}`, element);
}

const friends = ['chima', 'mike', 'chuks'];
for (let [index, elem] of friends.entries()) {
    console.log(`${index + 1} ${elem}`);
}

const myFriends = {
    firstName: 'Chuks',
    lastName: 'Nnamani',
    age: 29,
    profession: 'Accountant',
};

for (let myFriend of Object.keys(myFriends)) {
    console.log(myFriend);
}
for (let myFriend of Object.values(myFriends)) {
    console.log(myFriend);
}

for (let friend of Object.entries(myFriends)) {
    console.log(friend);
}
// it returned an array so we distructure it with an array.

for (let [key, value] of Object.entries(myFriends)) {
    console.log(key, value);
}

const staffs = {
    firstName: 'offia',
    lastName: 'chima',
    position: 'general staff',
    age: 28,
    profession: 'developer',
};

for (let staff of Object.keys(staffs)) {
    console.log(staff);
}

for (let staff of Object.values(staffs)) {
    console.log(staff);
}

for (let staff of Object.entries(staffs)) {
    console.log(staff);
}
