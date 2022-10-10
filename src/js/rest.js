// rest operator is used to pack values into an array or function and spread does the opposite.

function breakFast(...items) {
    console.log(items);
}

breakFast('itallia', 'pizza', 'vegetarian', 'organic');

function greet(...list) {
    console.log(list);
}

greet(1, 2, 3, 4, 5, 66, 7, 8, 8, 9, 55);

// creat 10 objects with different values and properties and access each of them.
//each object must contain all the data types
