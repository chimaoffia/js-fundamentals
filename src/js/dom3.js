// assignment
// using DOM create a div with a class of header and h1 in it .then style the heading with a background color with a text "big header"

// using same method create also a div with the class footer and a p "alright reserve 2022" add padding and margin
// lastly change the background color

document.body.style.backgroundColor = 'lightgrey';

const div = document.createElement('div');
div.className = 'header';
div.style.backgroundColor = 'purple';
div.style.marginBottom = '500px';
const h = document.createElement('h1');
h.textContent = 'BIG HEADER';
h.style.textAlign = 'center';
div.appendChild(h);
// console.log(div);
document.body.appendChild(div);

const di = document.createElement('div');
di.className = 'footer';
di.style.backgroundColor = 'green';
const f = document.createElement('h1');
f.textContent = 'Alright Reserve 2022';
f.style.textAlign = 'center';
di.appendChild(f);
// console.log(di);
document.body.appendChild(di);
