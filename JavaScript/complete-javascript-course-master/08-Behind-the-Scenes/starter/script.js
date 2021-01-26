'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1999) {
      var mil = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    }
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1998);

console.log(me);
//console.log(job);
//console.log(year);

var me = 'Itish';
let job = 'none';
const year = 1998;

//Functions
console.log(addDecl(3, 7));
//console.log(addExp(3, 7));
//console.log(addArrow(3, 7));

function addDecl(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;


const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1998);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1990);

const itish = {
  year: 1998,
  calcAge: function (birthYear) {
    console.log(2037 - this.year);
  },
};
itish.calcAge();

const mira = {
  year: 2010,
};
mira.calcAge = itish.calcAge;
mira.calcAge();

const itish = {
  firstName: 'Itish',
  year: 1998,
  calcAge: function () {
    console.log(2037 - this.year);

    // Solution 1
    //const self = this;
    //const isMillenial = function () {
    //console.log(self);
    //console.log(self.year >= 1981 && self.year <= 1998); };

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1998);
    };
    isMillenial();
  },
  greet: () => {
    console.log(`hey ${this.firstName}`);
  },
};
itish.greet();
itish.calcAge();

const addExp = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExp(2, 5);
const addArrow = (a, b) => a + b;
*/

// Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Dave'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
