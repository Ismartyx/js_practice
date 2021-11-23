// const p = document.querySelector('p');
const esm = 'Saeed'
const middle = "iSmartyx"
const last = `Ojari\
s\
OJ`;

// const hello = "hello my name is " + nam + " how are you";

const hello = `hello my name is ${esm}. Nice to meet you. I am ${28 + 1} years old`;

const html = `
 <div>
    <h2>${esm}</h2>
    <p>${hello}</p>
 </div>
`;

console.log(html);

// document.addEventListener('DOMContentLoaded', function () {
// document.body.innerHTML = html;
// });

const smarties = 30;
const kids = 5;
const eachkid = Math.floor(smarties/kids);
console.log(`Each kids get ${eachkid} smarties.`);

function CBill(x, y = 5, z) {
    const total = x + x * z + x * y + 2;
    return total;
}

// const myTotal = CBill(1, 2, 3);

const myBill4 = CBill(100, undefined, 0.2);
console.log(myBill4);

const Doc = function(firstName) {
    return `Dr. ${firstName}`;
}

function Docc(firstName) {
    return `Dr. ${firstName}`;
}

// function inchToCM(inches) {
//     const cm = inches * 2.54;
//     return cm;
// }

const inchToCM = (inches) => inches * 2.54

const makeABaby = (first, last) => ({name :`${first} ${last}`, age : 0})

 
(function(age) {
    console.log('Saeed')
    return `You are cool and age ${age}`;
  })(10);

  setTimeout(() => {
    console.log('DONE! Time to eat!');
  }, 5000);

  const dog = 'Sag';
  function Sag1() {
      console.log(dog);
  }

function sag2() {
    const dog = "heyvun";
    Sag1();
}
sag2();

function outer() {
    const outerVar = "I am the outer Var!";
    return function inner() {
        const innerVar = 'I am the inner Var!';
        console.log(innerVar);
        console.log(outerVar);
    }
}

const innerFn = outer();
setTimeout(() => {
    innerFn();
  }, 2000);

  function CG(greeting = '') {
    const myGreet = greeting.toUpperCase();
    return function(name) {
        return `${myGreet} ${name}`
    }
  }
const sayHello = CG('Hello');
console.log(sayHello('Sadra'));

function createGame(gamename) {
    let score = 0;
    return function win() {
        score++;
        return `Your name ${gamename} score is ${score}`;
    }
}
  
const MW = createGame('ModernWarfare');
const BT = createGame('BattleField');

function ppWes() {
const pWes = document.querySelector(".wes");
const pizza1 = document.querySelector('.pizza');
const pic2 = document.querySelector('.nice');
// pWes.textContent = hello;
// console.dir(pWes.textContent);
console.log(pWes.innerHTML);
console.log(pWes.outerHTML);
pizza1.insertAdjacentText('beforeend', 'American');
console.log(pic2.classList);

function toggleRound() {
    pic2.classList.toggle('round');
}
pic2.addEventListener('click', toggleRound);
pic2.alt = 'Cute pup';
console.log(pic2.alt);
window.addEventListener('load', function(){
    console.log(pic2.naturalWidth);
})

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function() {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last} `);
});

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';
myDiv.insertAdjacentElement('afterbegin', heading);

const myUl = document.createElement('ul');
const myLi = document.createElement('li');
myLi.textContent = 'first Li';
myUl.appendChild(myLi);
document.body.insertAdjacentElement("afterbegin", myUl);

const myLi2 = document.createElement('li');
myLi2.textContent = 'two Li';
myUl.appendChild(myLi2);

const myLi3 = myLi2.cloneNode(true);
myLi3.textContent = 'three Li';
myUl.insertAdjacentElement('beforeend', myLi3);

const width = 250;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup`
const myHTML = `
<div class="wrapper">
<h2>Cute ${desc}</h2>
<img src="${src}" alt="${desc}"/>
</div>
`;
const myFragment = document.createRange().createContextualFragment(myHTML);
document.body.appendChild(myFragment);
console.log(typeof myHTML)

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();

console.log(p);

document.body.appendChild(p); //we can add p again after remove mothod.
}


document.addEventListener('DOMContentLoaded', ppWes);

