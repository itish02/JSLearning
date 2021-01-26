'use strict';

// Function declaration 
/*
function calcAge1(birthYear) {
    return 2035 - birthYear;
}
const age1 = calcAge1(1998);

// Function expression
const calcAge2 = function (birthYear) {
    return 2035 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

// Arrow fumction
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1965);
console.log(age3);

const yearsUnitlRetirement = (birthYear, firstName) => {
    const age = 2036 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUnitlRetirement(1991, 'Jonas'));
*/

/*
const percentageOfWorld3 = population => { return population / 7900 * 100; }
console.log(percentageOfWorld3(120));
console.log(percentageOfWorld3(55));
console.log(percentageOfWorld3(83));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

const percentageOfWorld3 = populations => { return populations / 7900 * 100; }

function describeCountry(country, population) {
    const percentPop = percentageOfWorld3(population);
    const description = `${country} has ${population} million people in the world which is about ${percentPop} percent of the world population`;
    return description;
}
console.log(describeCountry('India', 140));
console.log(describeCountry('China', 168));
console.log(describeCountry('USA', 45));

const calcAge = function (birthYear) { return 2037 - birthYear; }

const yearsUnitlRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        return retirement;
    }
    else { return -1; }


    // return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUnitlRetirement(1991, 'Jonas'));
*/
// CODING CHALLENGE 
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreKoalas = console.log(calcAverage(44, 23, 71));
const scoreDolphins = console.log(calcAverage(65, 54, 49));

const checkWinner = function (avgKoalas, avgDolphins) {
    if (scoreKoalas > scoreDolphins && scoreKoalas >= 2 * scoreDolphins) {
        return `Koalas win. ${scoreKoalas} vs ${scoreDolphins}`;
    }
    else if (scoreDolphins > scoreKoalas && scoreDolphins >= 2 * scoreKoalas) {
        return `Dolphins win. ${scoreDolphins} vs ${scoreKoalas}`
    }
    else { return `No winners...` }
}
console.log(checkWinner(scoreKoalas, scoreDolphins));
*/
// ARRAYS
/*
const favChar = ['Michael', 'Tommy', 'Anthony']
const firstName = 'Itish';
const iti = [firstName, 'Dhiman', 1998, 0.2, favChar];
console.log(iti);
console.log(iti.length);

// EXCERCISE
const calcAge = function (birthYear) {
    return 2020 - birthYear;
}

const year = [1998, 1991, 1988, 1965, 2002];
const ages = [calcAge(year[0]), calcAge(year[2]), calcAge(year[year.length - 1]), calcAge(year[3])]
console.log(ages);
*/
/*
const percentageOfWorld3 = populations => { return populations / 7900 * 100; }
const popIndia = 140;
const popChina = 160;
const popUSA = 45;
const popJapan = 13;

const populations = [popIndia, popUSA, popChina, popJapan];

if (populations.length >= 4) {
    console.log(true);
}
else { console.log(false); }

const percentages = [percentageOfWorld3(popIndia), percentageOfWorld3(popChina), percentageOfWorld3(popUSA), percentageOfWorld3(popJapan)];
console.log(percentages);
*/
/*
const favChar = ['Tommy Shelby', 'Barney Stinson', 'Tony Soprano'];

// Add elements
const newLength = favChar.push('John Wick');
console.log(favChar);
console.log(newLength);

favChar.unshift('Carlo Gambino');
console.log(favChar);

// Remove elememnts
favChar.pop();
const popped = favChar.pop();
console.log(popped);
console.log(favChar);

favChar.shift();
console.log(favChar);

console.log(favChar.indexOf('Barney Stinson'));
console.log(favChar.includes('Tommy Shelby'));
console.log(favChar.includes('Bobby'));

if (favChar.includes('Jack')) {
    console.log('Jack is cool too!');
}
else { console.log('forget about it.'); }
*/
// CODING CHALLENGE 
/*
const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        const tip = 0.15 * bill;
        return tip;
    }
    else {
        const tip = 0.2 * bill;
        return tip;
    }
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);

const itish = {
    firstName: 'Itish',
    lastName: 'Dhiman',
    age: 2020 - 1998,
    job: 'unemployed',
    favChar: ['Tommy Shelby', 'Barney Stinson', 'Tony Soprano']
}
console.log(itish.age);
console.log(itish['firstName']);
itish.location = 'India';
itish['twitter'] = '@_MrWick_';
console.log(itish);

console.log(`${itish.firstName} has ${itish.favChar.length} friends. And his best friend is ${itish.favChar[0]}.`);

const myCountry = {
    country: 'India',
    population: 140,
    capital: 'New Delhi',
    language: 'Hindi',
    neighbours: ['China', 'Pakistan', 'Nepal', 'Bhutan']
}


myCountry.population += 2;
myCountry['population'] -= 2;

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)
const iti = {
    firstName: 'Itish',
    lastName: 'Dhiman',
    birthYear: 1998,
    job: 'unemployed',
    favChar: ['Tommy Shelby', 'Barney Stinson', 'Tony Soprano'],
    hasDriversLicense: true,
    calcAge: function () {
        console.log(this);
        return 2020 - this.birthYear;
    }
};
console.log(iti.calcAge());

const neighbours = ['China', 'Pakistan', 'Bangladesh', 'Nepal'];
console.log(neighbours);

neighbours.push('Utopia');
neighbours.push('Sweden');

neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden';
console.log(neighbours);
const iti = {
    firstName: 'Itish',
    lastName: 'Dhiman',
    birthYear: 1998,
    job: 'unemployed',
    favChar: ['Tommy Shelby', 'Barney Stinson', 'Tony Soprano'],
    hasDriversLicense: true,
    calcAge: function () {
        this.age = 2020 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old guy and is ${this.job}. And he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license. `
    }
};
console.log(iti.getSummary());

// CODING CHALLENGE
const mark = {
    fullName: 'Mark Miller',
    mass: 78, // in kgs
    height: 1.69, // in meters
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
mark.calcBMI();
console.log(mark.bmi);

const john = {
    fullName: 'John Smith',
    mass: 92, // in kgs
    height: 1.95, // in meters
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
john.calcBMI();
console.log(john.bmi);


mark.calcBMI() > john.calcBMI() ? console.log(`${mark.fullName}'s BMI(${mark.bmi}) is greater than ${john.fullName}'s BMI(${john.bmi})`)
    : console.log(`${john.fullName}'s BMI(${john.bmi}) is greater than ${mark.fullName}'s BMI(${mark.bmi})`)

const myCountry = {
    name: 'India',
    population: 140, // in millions
    language: 'Hindi',
    neighbours: ['China', 'Pak', 'Nepal', 'Bhutan'],
    describe: function () {
        this.description = `${this.name} has ${this.population} million ${this.language} speaking people`;
        return this.description;
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        return this.isIsland;
    }
}
myCountry.describe();
console.log(myCountry.description);

myCountry.checkIsland();
console.log(myCountry.isIsland);

const itiArray = [
    'Itish',
    'Dhiman',
    2020 - 1998,
    'Unemployed',
    ['Barney', 'Tommy', 'Tony'],
    true
];
const types = [];

for (let i = 0; i < itiArray.length; i++) {
    console.log(itiArray[i], typeof itiArray[i]);
    // types[i] = typeof itiArray[i];
    types.push(typeof itiArray[i]);
}

console.log(types);

const years = [1991, 2007, 1998, 1965];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2020 - years[i]);
}
console.log(ages);
// continue and break
console.log('-----ONLY STRINGS-----')
for (let i = 0; i < itiArray.length; i++) {
    if (typeof itiArray[i] !== 'string') continue;

    console.log(itiArray[i], typeof itiArray[i]);
}

console.log('-----BREAK WITH NUMBER-----')
for (let i = 0; i < itiArray.length; i++) {
    if (typeof itiArray[i] === 'number') break;

    console.log(itiArray[i], typeof itiArray[i]);
}

const populations = [140, 168, 33, 12];
const percentages2 = [];

const percentageOfWorld3 = populations => { return populations / 7900 * 100; }

for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld3(populations[i]);
    percentages2.push(perc);
}
console.log(percentages2);

const iti = [
    'Itish',
    'Dhiman',
    2020 - 1998,
    'Unemployed',
    ['Barney', 'Tommy', 'Tony']
];

for (let i = iti.length - 1; i >= 0; i--) {
    console.log(iti[i]);
}


for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----STARTING EXCERCISE ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: lifting weights repition ${rep}`);
    }
}

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let y = 0; y < listOfNeighbours[i].length; y++) {
        console.log(`Neighbour ${listOfNeighbours[i][y]}`);
    }
}


for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('The loop is about to end..');
}

const populations = [140, 168, 33, 12];
const percentages3 = [];

const percentageOfWorld3 = populations => { return populations / 7900 * 100; }
let i = 0;
while (i < populations.length) {
    const perc = percentageOfWorld3(populations[i]);
    percentages3.push(perc);
    i++;
}
console.log(percentages3);
*/
// CODING CHALLENGE 
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        const tip = 0.15 * bill;
        return tip;
    }
    else {
        const tip = 0.2 * bill;
        return tip;
    }
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);

    const tot = (bills[i] + tips[i]);
    total.push(tot);
}
console.log(bills, tips, total);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    return sum / arr.length;

}
console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(total));

















































































