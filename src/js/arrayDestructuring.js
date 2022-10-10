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

const [breakFast, , , dinner] = restaurant.starterMenu;

console.log(breakFast, dinner);

const arr = [1, 2, 5, 8, 18, 56];
const [first, second, , third] = arr;
console.log(first, second);

// how to get the forth value
console.log(first, second, third);

const student = ['tochi', ['ben', 'vin'], 'chuks', 'mike'];

const [secondClass, , , firstClass] = student;
console.log(secondClass, firstClass);

const [, [, bestStudend]] = student;
console.log(bestStudend, 'is the best graduating student');

const number = [1, 5, 8];

let [one, five] = number;
console.log(one, five);

[one, five] = [five, one];
console.log(one, five);
