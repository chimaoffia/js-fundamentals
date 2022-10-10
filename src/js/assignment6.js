let number = document.querySelector('.big');
console.log(number);
let minus = document.querySelector('.btn-minus');
let plus = document.querySelector('.btn-add');

minus.addEventListener('click', function () {
    number--;
});
plus.addEventListener('click', function () {
    number++;
});
