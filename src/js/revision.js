let friends = ['chima', 'chuks', 'mike', 'Emma'];
let newFriends = [];

const text = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        newFriends.push(arr[i]);
    }
    console.log(newFriends);
};

text(friends);

let number = [1, 2, 3, 4, 5];

function odd(ar) {
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] % 2 !== 0) {
            console.log(ar[i]);
        }
    }
}

odd(number);

const users = {
    firstName: 'john',
    lastName: 'doe',
    hobbies: ['reading', 'gaming'],
    profession: 'DevOps',
};

console.log(
    `his name is ${users.firstName} ${users.lastName} and he is a ${users.profession}`
);

function getUsers(x) {
    return x.firstName;
}

console.log(getUsers(users));
