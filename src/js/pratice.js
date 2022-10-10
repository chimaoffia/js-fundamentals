// const chima = {
//     firstName: 'chima',
//     lastName: 'offia',
//     age: 28,
//     siblings: ['vincent', 'nneka', 'ada', 'dave'],
//     profession: 'developer',
// };

// const car = {
//     carname: 'benz',
//     productionYear: 2015,
//     color: 'white',
//     madeCountry: 'Germany',
// };

// const chuks = {
//     firstName: 'chuks',
//     lastName: 'nnamani',
//     age: 18,
//     profession: 'accountant',
// };

// const tochi = {
//     firstName: 'kelvin',
//     lastName: 'Ani',
//     age: 28,
//     profession: 'business man',
// };

// const mike = {
//     firstName: 'mike',
//     lastName: 'Mathias',
//     age: 25,
//     profession: 'developer',
// };

// const ben = {
//     firstName: 'benjamin',
//     lastName: 'Ahaome',
//     age: 28,
//     profession: 'business',
// };

// const vincent = {
//     firstName: 'ogbonna',
//     lastName: 'offia',
//     age: 34,
//     siblings: [
//         'vincent',
//         'nneka',
//         ['amara', 'dominion', 'treasure', 'amanda'],
//         'ada',
//         'dave',
//     ],
//     profession: 'business man',
// };

// const emmanuel = {
//     firstName: 'emmanuel',
//     lastName: 'chibueze',
//     age: 25,
//     profession: 'developer',
// };

// const nneka = {
//     firstName: 'precious',
//     lastName: 'offia',
//     age: 18,
// };

// const myCar = {
//     make: 'toyota',
//     model: 'camry hybrid',
//     madeYear: 2007,
//     color: 'red',
// };

// const people = {
//     ...chima,
//     ...ben,
//     ...car,
//     ...chuks,
//     ...nneka,
//     ...tochi,
//     ...vincent,
//     ...emmanuel,
//     ...mike,
// };

// console.log(people);

// const [first, second, , forth] = chima.siblings;

// console.log(first, second, forth);
// console.log(first, second);

// const [, , mine, [, , grand]] = vincent.siblings;

// console.log(mine, grand);

// function friends(...items) {
//     console.log(items);
// }

// friends(chima, tochi, mike);

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
    order: function (indexOne, indexTwo) {
        return [this.starterMenu[indexOne], this.mainMenu[indexTwo]];
    },
};

// console.log(restaurant.order(2, 0));

// const [foodOne, foodTwo] = restaurant.starterMenu;
// console.log(foodOne, foodTwo);

// const [one, two] = restaurant.order(2, 1);
// console.log(one, two);

// const { thur, fri } = restaurant.openingHours;
// console.log(thur);

// const persons = {
//     firstName: 'chima',
//     lastName: 'offia',
//     age: 28,
//     friends: ['mike', 'chuks', 'emma'],
//     greet: function (name) {
//         console.log(`hello ${name} how are you doing ?`);
//     },
// };

// const staffs = [
//     {
//         firstName: 'chuks',
//         position: 'manager',
//         age: 28,
//         salary: 5000,
//         hobbies: ['ufc', 'football', 'accounting'],
//     },
//     {
//         firstName: 'chidera',
//         position: 'itel rep',
//         age: 23,
//         salary: 18000,
//         hobbies: ['cooking', 'music', 'food'],
//     },
//     {
//         firstName: 'aziz',
//         position: 'tecno rep',
//         age: 26,
//         salary: 19000,
//         hobbies: ['movie', 'dancing', 'cooking'],
//     },
// ];

// for (let staff of staffs) {
//     if (staff.salary < 18000) {
//         console.log(staff);
//     }
// }

// persons.greet('chima');

const even = [2, 4, 6, 8, 10];
const odd = [1, 3, 5, 7, 9];

const number = [...even, ...odd];
console.log(number);

const selfEven = [...even];

const num = [...number];
console.log(num);

// const newResturant = {
//     ...restaurant,
//     founder: 'chima',
//     founded: 2000,
// };

// console.log(newResturant);

const menu = restaurant.starterMenu;
const big = restaurant.categories;

const bigMenu = [...restaurant.starterMenu, ...restaurant.categories];
console.log(bigMenu);

// rest
const marathonRacers = ['chima', 'mike', 'chuks', 'dan', 'emma'];
const [gold, silver, bronze, ...others] = marathonRacers;
console.log(gold, silver, bronze);
console.log(others);

const squaredNumber = (...args) => {
    const square = [];
    for (let num of args) {
        square.push(num * num);
    }
    return square;
};

console.log(squaredNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
