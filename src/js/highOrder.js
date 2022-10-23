// high order functions are  function that accept other functions as an argument

function greet() {
    console.log('hello chima');
}
function callThreeTimes(f) {
    f();
    f();
    f();
}

callThreeTimes(greet);

function anger() {
    console.log('am so angry with you dude');
}

const repeat = function (action, numbers) {
    for (let i = 0; i < numbers; i++) {
        action();
    }
};

repeat(anger, 4);

const pickOne = (f1, f2) => {
    const random = Math.random();
    if (random < 0.5) {
        f1();
    } else {
        f2();
    }
};

pickOne(greet, anger);

function assurance() {
    console.log('las las we go dey alright');
}

setTimeout(assurance, 3000);

//

setTimeout(function () {
    alert('las las we go dey alright');
}, 3000);

// function touchedMe(){
// alert('hey ! you touched me')
// }

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    alert('hey! you touched me');
});

btn.addEventListener('click', () => {
    alert('hey! you touched me why?');
});

// create a simple app the tells u the kind of cloth to wear depending on weather condition on a daily

// tips. check the weather condition of a week from google weather,
//  it will have and input that ask the weather conditon
