// it a way writting a function or program that starts now and finish later.

const request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    // console.log(request.responseText);
    if (request.readyState == 4 && request.status == 200) {
        console.log(request.responseText);
    } else if (request.readyState === 4) {
        console.log('sorry something went wrong');
    }
});
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
request.send();

// const buyMeBicycle = new Promise((resolve, reject) => {
//     const random = Math.floor(Math.random() * 3);

//     if (random < 2) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// buyMeBicycle
//     .then(() => {
//         console.log('Ask mum for my credit card. Congratulations');
//     })
//     .catch(() => {
//         console.log('No come close to me');
//     });

// const buyMeBicycle = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const random = Math.floor(Math.random() * 3);

//         if (random < 2) {
//             resolve();
//         } else {
//             reject();
//         }
//     }, 5000);
// });

// buyMeBicycle
//     .then(() => {
//         console.log('Ask mum for my credit card. Congratulations');
//     })
//     .catch(() => {
//         console.log('No come close to me');
//     });

// const buyMeBicycle = function () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const random = Math.floor(Math.random() * 3);

//             if (random < 2) {
//                 resolve();
//             } else {
//                 reject();
//             }
//         }, 5000);
//     });
// };

// buyMeBicycle()
//     .then(() => {
//         console.log('Ask mum for my credit card. Congratulations');
//     })
//     .catch(() => {
//         console.log('No come close to me');
//     });

const amanda = function () {
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

amanda()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
