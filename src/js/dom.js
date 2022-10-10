// document object module
// API Application program interface
console.log(window.document.body.style);

// document.body.style.backgroundColor = 'green';

document.getElementById(''); //target element by its id.
document.getElementsByClassName(''); //target element by it classname.
document.getElementsByTagName(''); //target element by it  tag name.

// document.getElementsByTagName

const h2 = document.getElementsByTagName('h2');

h2[0].style.color = 'blue';
h2[0].style.textAlign = 'center';

// document.getElementsByClassName
const list = document.getElementsByClassName('special');

list[0].style.backgroundColor = 'pink';
list[1].style.backgroundColor = 'yellow';
list[2].style.backgroundColor = 'blue';

//

const parentList = document.getElementById('top-list');

console.log(parentList);

// document.querrySelector("") it only target one item
// and if u have many items in am array then it will only target the first item on the list.

const h1 = document.querySelector('.top-heading');
console.log(h1);

// note => . means ByclassName, # means byId

// document.querrySelectorAll("")
const headings = document.querySelectorAll('.top-heading');
console.log(headings);

const li = document.querySelectorAll('li');
console.log(li);

//
const h4 = document.createElement('h4');
h4.textContent = 'liverpool lost to Napoli 4-1';
h4.className = 'section-4';
document.body.appendChild(h4);
console.log(h4);

// const ul = document.createElement('ul');
// const lis = document.createElement('li');
// lis.textContent = 'liverpool lost';
// lis.className = 'list-items';
// lis.id = 'baby-club';

// ul.appendChild(lis);
// document.body.appendChild(ul);

// const ul = document.createElement('ul');
// ul.className = 'collect-item';

const a = document.createElement('a');
a.className = 'link';
a.setAttribute('href', ' ""');

const lis = document.createElement('li');
lis.className = 'list-item';
lis.textContent = 'Read me';

lis.appendChild(a);
// ul.appendChild(lis);
// console.log(ul);
// document.body.appendChild(ul);

// const unOrdered = ul.append(li);
// document.body.appendChild(unOrdered);

// traversing the dom

const l = document.querySelector('li');
console.log(l);
console.log(l.nextElementSibling);
// console.log(l.nextElementSibling.nextElementSibling);
// console.log(l.nextElementSibling.nextElementSibling.nextElementSibling);
// console.log(l.previousElementSibling);
// console.log(l.previousElementSibling.previousElementSibling);

// parentElementSilbling is used to target different div

// const div =  document.querrySelector('div')
// console.log(div)

const ul = document.querySelector('#top-list');
console.log(ul.children);
