let myAge =Number(prompt('please enter your age'));

if (myAge>=18 && myAge<=65) {
    console.log(`welcome, you are ${myAge} years old, you can come in to the party.`);
}else if (myAge<18) {
    console.log(`sorry, you are ${myAge} years old and you are too young for the party`);
}else if (myAge>65) {
    console.log(`sorry, you are ${myAge} years old and you are not eligible.`);
}