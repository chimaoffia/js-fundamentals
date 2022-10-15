const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

let [munich, dortmund] = game.players;
console.log(munich);
console.log(dortmund);

const [gk, ...fieldplayer] = munich;
console.log(gk, fieldplayer);

const allPlayers = [...munich, ...dortmund];
console.log(allPlayers);

const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...munich];
console.log(players1Final);

// const { team1, x: draw, team2 } = game.odds;

const {
    odds: { team1, x: draw, team2 },
} = game;

console.log(team1);
console.log(team2);
console.log(draw);

function printGoal(...players) {
    console.log(`${players.length} goal scored`);
}

printGoal('Davies', 'Muller', 'Lewandowski', 'Kimmich');

team1 < team2 && console.log('munich is likely to win the game');

for (let [goal, scorer] of game.scored.entries()) {
    console.log(`${goal + 1} goal scored by ${scorer}`);
}

let total = 0;

for (let odd of Object.values(game.odds)) {
    total += odd;
}

let average = total / Object.values(game.odds).length;

console.log(`The average score is ${average}`);

for (let [key, value] of Object.entries(game.odds)) {
    console.log(`${key} to win ${value} odds`);
}

const scorers = {
    Gnarby: 1,
    Hummels: 1,
    Lewandowski: 2,
};
