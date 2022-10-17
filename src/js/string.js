const airline = 'Airpeace airline';
const planeModel = 'boeing b737 max8';

console.log(airline[0]);
console.log(airline[1]);

// uppercase

console.log(planeModel.toUpperCase());
console.log(planeModel.toLowerCase());

console.log(airline.indexOf('e'));

// slice()
console.log(airline.slice(8));
console.log(airline.slice(12));

// note that it always remove one index, eg

console.log(airline.slice(0, 8));
console.log(airline.slice(3, 12));
console.log(airline.lastIndexOf(' '));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));

// last indexof

const checkMiddleSeat = function (seat) {
    const availableSeat = seat.lastIndexOf('B');
    if (availableSeat == seat) {
        console.log('yes the middle seat is available');
    } else {
        console.log('ooops not available');
    }
};

checkMiddleSeat('12B');
checkMiddleSeat('15A');
checkMiddleSeat('23E');

let userName = 'cHIma';

const passenger = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
console.log(passenger);

console.log(planeModel.includes('boeing'));

// create a functions that checks passengers bagages if it has knife,gun, he or she is not allowed on a plane

const checkBagages = function (items) {
    if (items.includes('knife', 'gun')) {
        console.log('sorry you are not allowed to enter');
    } else {
        console.log('welcome to boarding with us, please enter');
    }
};

checkBagages('i have a laptop, foods and pocket knife');
checkBagages('i have sucks and camera');
checkBagages('i have sucks, gun, knife and a camera');

const nickname = 'odogwu';
console.log(nickname.padStart(23, '+'));

// const masterCard = '2345678907634567';
// const card = masterCard.slice(-4);
// console.log(card.padStart(masterCard.length, '*'));

// const masterCard = function() {

// }

// masterCard()
