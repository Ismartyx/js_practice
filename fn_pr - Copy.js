console.log('fingil');

// var first = 'saeed';
let age = 5;
const cool = true;

// console.log(first);
if(age > 10) {
    console.log('you are old');
};

const person = {
    first : 'saeed',
    age : 20,
    last : `Ojari's`
};

let hello2 = 'hello my name is ';
hello2 = hello2 + person.first;
hello2 = hello2 + ' Nice to meet you';

const hello = `hello my name is ${person.first}. Nice to meet you. I am ${1 + 100} years old`;

function x(fn) {
        return `Dr. ${fn}`;
    };

    function makeABaby(first, last) {
            const baby = {
              name: `${first} ${last}`,
              age: 0
            }
            return baby;
          }

const wes = {
  name: 'Westopher Bos',
  // Method!
  sayHi: function() {
    console.log(`Hey ${this.name}`);
    return 'Hey Wes';
  },
  // Short hand Method
  yellHi() {
    console.log('HEY WESSSSS');
  },
  // Arrow function
  wisperHi: () => {
    console.log('hii wesss im a mouse');
  }
}