// assignments

// using a function get the even number of a giving array
// [2,7,10,15,19,33,12,18,20]

// using a function get me the odd number of a giving array
// [2,7,10,15,19,33,12,18,20]

// using a function get me the squareroot nnumber of a giving array
// [2,7,10,15,19,33,12,18,20]

// usig function capitalize all the items in a giving array.
// toUpperCase()

// creat a function that divide itself by 2

// creat two object, using those objects

// in a giving array get the min and max of the array.
// [2,7,10,15,19,33,12,18,20]

let mynumber = [2, 7, 10, 15, 19, 33, 12, 18, 20];

function checkEven(arr) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    console.log(evenNumbers);
}

checkEven(mynumber);

//
function checkOdd(odd) {
    let oddNumbers = [];
    for (let i = 0; i < odd.length; i++) {
        if (odd[i] % 2 !== 0) {
            oddNumbers.push(odd[i]);
        }
    }
    console.log(oddNumbers);
}

checkOdd(mynumber);

// 3

function checksqr(sqr) {
    let squareRoot = [];
    for (i = 0; i < sqr.length; i++) {
        let root = sqr[i] * sqr[i];
        squareRoot.push(root);
    }
    console.log(`the square roots are ${squareRoot}`);
}

checksqr(mynumber);

//
function divide(div) {
    let divided = [];
    for (let i = 0; i < div.lenth; i++) {
        let division = div[i] / div[i];
        divided.push(division);
    }
    console.log(divided);
}

divide(mynumber);

const converter = function () {
    let amount = Number(prompt('please enter your amount'));
    return 725 * amount;
};
let total = converter();
console.log(`your total amount is ${total} naira`);

//

function maxNum(arr) {
    return Math.max(...arr);
}

console.log(maxNum(mynumber));

// let max = Math.max(...[2, 7, 10, 15, 19, 33, 12, 18, 20]);
// console.log(max);

function minNum(arr) {}

function maxNumber(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}

maxNumber(mynumber);

function minNumber(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(minNumber(mynumber));
