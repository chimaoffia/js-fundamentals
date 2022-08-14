const chimaWeight = 92;
const chimaHeight = 1.88 * 2;

const mikeWeight = 77;
const mikeHeight = 1.69 * 2;


const chimaBmi = Math.floor(chimaWeight / chimaHeight);
console.log(chimaBmi)

const mikeBmi = Math.floor(mikeWeight / mikeHeight);
console.log(mikeBmi);


let massage;
if (chimaBmi === mikeBmi) {
    massage = 'both bmi is equal'
}else {
    massage = 'chima bmi' + ' ' + chimaBmi + ' ' + 'is greater than ' + ' ' + 'mike bmi' + ' ' + mikeBmi;
};

console.log(massage)