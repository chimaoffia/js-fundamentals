// spread operator

function giveMeFive(a, b, c) {
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
}

// when ever you see ... in a function call it is called spread.
// spread is use to unpark or spread value from array .
giveMeFive(...['chima', 3, 9]);

const data = ['peter', 4, 6];
giveMeFive(...data);

// in array literal (it use to copy)...

const scienceStudent = ['chima', 'collins', 'mike'];
const artStudent = ['chuks', 'vin', 'ebuka'];

const allStudent = [...scienceStudent, ...artStudent];
console.log(allStudent);

const selfCopy = [...artStudent];
console.log(selfCopy);

// spread in an object...

const dog = {
    familyName: 'cocasian',
    aggressiveness: 'yes',
    securitypurpose: true,
};

const cat = {
    family: 'canine',
    friendly: false,
    color: ['white', 'black'],
};

const allAnimals = { ...dog, ...cat };
console.log(allAnimals);
