const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(function (n) {
  console.log(n * n);
});

// es6 version of forloop
let double = [];
for (let number of numbers) {
  double.push(number * number);
  //   console.log(number);
}
console.log(double);

// map

const squareRoot = numbers.map(function (n) {
  return n * n;
});
console.log(squareRoot);

// arrow function

// const double2 = function (n) {
//   return n * n;
// };

const double2 = (n) => {
  return n * n;
};
console.log(double2(6));

const double3 = (n) => {
  return n ** 3;
};
console.log(double3(5));

// one line return implicit statement

// const double4 = (n) => n ** 3;
const double4 = (n) => n ** 3; //if it takes a single parameter , u can remove the bracket.
console.log(double4(4));

const even = (n) => (n % 2 === 0 ? "is even" : "it is odd"); //tenary operator is used for one line expression.
console.log(even(10));

// map

const getSquared = numbers.map((n) => n * n);

console.log(getSquared);
