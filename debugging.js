const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
    // debugger;
  if(person.name === 'Wes') {
    console.warn('Dumb name');
  }
});

// people.forEach((person, index) => {
//     console.group(`${person.name}`);
//     console.log(person.country);
//     console.log(person.cool);
//     console.log('Done')
//     console.groupEnd(`${person.name}`)
//   });

console.table(people);

// Console Methods

// Callstack, stack Trace

// Grabbing Elements
// $
// $$

// Breakpoints
// debugger;
// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doALotStuff() {
    console.group('Doing some change');
    console.log('Im tired');
    console.warn('who tired?');
    console.error('Enemy');
    console.groupEnd('Doing some change');
};

function doctorize(name) {
  console.count(`Ruuuuuun for learn ${name}`);
    return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
