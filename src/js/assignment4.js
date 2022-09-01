let dolphins = Math.floor(96 + 108 + 89 ) /3;
console.log(dolphins)


let koalas = Math.floor(88 + 91 + 110 / 3);
console.log(koalas)

// console.log(dolphins)


// 2

 if (dolphins > koalas) {
    console.log('TEAM DOLPHINS WINS')
 }else if (dolphins < koalas) {
    console.log('TEAM KOALAS  WINS')
 }else {
    console.log ('IT IS A DRAW')
 };


//  3

let dolphinsScores = Math.floor(97 + 112 + 101 / 3);
let koalasScore = Math.floor(109 + 95 + 123 / 3);

// console.log(dolphinsScores)
// console.log(koalasScore)

if (dolphinsScores > koalasScore && dolphinsScores > 100) {
    console.log(`TEAM DOLPHINS WITH THE SCORE OF ${dolphinsScores} WON`)
}else if (dolphinsScores < koalasScore && koalasScore > 100) {
    console.log(`TEAM KOALAS WITH THE SCORE OF ${koalasScore} WON`)   
}else {
    console.log(`it is a draw`)
};

// 4


let dolphinsTeam = Math.floor(9 + 12 + 10 / 3);
let koalasTeam = Math.floor(10 + 95 + 16 / 3);


if (dolphinsTeam > koalasTeam && dolphinsTeam > 100) {
    console.log(`TEAM DOLPHINS WITH THE SCORE OF ${dolphinsTeam} WON`)
}else if (dolphinsTeam < koalasTeam && koalasTeam > 100) {
    console.log(`TEAM KOALAS WITH THE SCORE OF ${koalasTeam} WON`)   
}else if (dolphinsTeam === koalasTeam && dolphinsTeam >= 100) {
    console.log(`it is a draw`)
}else {
    console.log('no team wins')
}

