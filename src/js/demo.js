// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState);
//     if (request.readyState === 4 && request.status === 200) {
//         console.log(request.responseText);
//     } else if (request.readyState === 4) {
//         console.log('sorry cannot fetch data');
//     }
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/');
// request.send();

// creating a Promise

// const buyMeBicycle = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const random = Math.floor(Math.random() * 3);
//         if (random < 2) {
//             resolve('congratulations love, you bicycle is outside');
//         } else {
//             reject("don't near me ooooo");
//         }
//     }, 5000);
// });

// buyMeBicycle
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// const buyMeBicycle = function () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const random = Math.floor(Math.random() * 3);
//             if (random < 2) {
//                 resolve('congratulations love, you bicycle is outside');
//             } else {
//                 reject("don't near me ooooo");
//             }
//         }, 5000);
//     });
// };

// buyMeBicycle()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

const getfiles = function () {
    return new Promise((resolve, reject) => {
        request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                resolve(request.responseText);
            } else if (request.readyState === 4) {
                reject('sorry something went wrong');
            }
        });
        request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        request.send();
    });
};

getfiles()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

const getStarted = () => {
    return new Promise((resolve, reject) => {
        request = new XMLHttpRequest();
        request.addEventListener(readystatechange, () => {
            if (request.readyState === 4 && request.status === 200) {
                resolve(request.responseType);
            } else if (request.readyState === 4) {
                reject('sorry something is not right');
            }
        });
        request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        request.send();
    });
};

getStarted()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
