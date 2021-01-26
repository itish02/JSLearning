/* ASSIGNMENT - 1 */
/*
let country = "India";
let continent = "Asia";
let population = "140 million";

console.log(country);
console.log(continent);
console.log(population);
*/

/* ASSIGNMENT - 2
let country = "India";
let continent = "Asia";
let population = "140 million";
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof language);
console.log(typeof population);
*/

/* ASSIGNMENT - 3
let language = "Hindi";
const birthYear = 1998;
const dateOfBirth = 02031998;
*/
/* MATH OPERATORS
const now = 2021;
const ageIti = now - 1998;
const ageNinni = now - 1991;
const firstName = 'Itish';
const lastName = 'Dhiman';
console.log(firstName + ' ' + lastName);
console.log(ageIti, ageNinni);

/* ASSIGNMENT OPERATORS
let x = 10 + 5;
x += 10; // x = x+10;
x *= 5;
x++;
x--;
x--;
console.log(x);

/* ASSIGNMENT - 5
const country = "India";
const continent = "Asia"
const language = "Hindi";
const population = 14000000;
const avgPopulation = 33000000;

if (population > avgPopulation) {
    console.log("India's population is above average");
}
else {
    console.log(`India's population is ${avgPopulation - population} below average`);
}
*/


/* CODING CHALLENGE
const massMark = 95; // in kgs
const heightMark = 1.88 // in meters
const massJohn = 92; // in kgs
const heightJohn = 1.95; // in meters

const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / heightJohn ** 2;

const markHigherBmi = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBmi);
*/
/*
const age = 17;

const legalAge = age >= 18;

if (legalAge) {
    console.log("Adult");
}

else {
    console.log("Adolscent");
}
*/

/*
const massMark = 95; // in kgs
const heightMark = 1.88 // in meters
const massJohn = 92; // in kgs
const heightJohn = 1.95; // in meters

const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / heightJohn ** 2;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is greater than John's! (${johnBMI})`);
}
else {
    console.log(`John's BMI (${johnBMI})  is greater than Mark's! (${markBMI})`);
}
*/
/*
const country = 'India';
const language = 'Hindi';
const population = 140;
const isIsland = false;

if (language === 'English' && population < 50 && !isIsland) {
    console.log(`${country} is the right place for you!`);
}
else {
    console.log(`${country} does not meet your criteria :/`)
}
*/
const bill = 430;
var tip;
var total;

50 <= bill <= 300 ? tip = 0.15 * bill : tip = 0.2 * bill

total = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip} and the total amount was ${total}`);





















