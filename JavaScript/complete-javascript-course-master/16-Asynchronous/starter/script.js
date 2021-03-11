'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className) {
    const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${+(data.population/100000000).toFixed(1)} million people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>
    `
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

const renderError = function(msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
};


///////////////////////////////////////

// const getCountryData = function(country) {
//     const request = new XMLHttpRequest;
//     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//     request.send();

//     request.addEventListener('load', function() {
//         let [data, data2] = JSON.parse(this.responseText);
//         if (country === 'india') {
//             data = data2;
//         }
//         console.log(data);
//         const html = `
//     <article class="country">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${+(data.population/100000000).toFixed(1)} million people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//         </div>
//     </article>
//     `
//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1;
//     });
// }

// getCountryData('india');
// getCountryData('germany');
// getCountryData('united kingdom');

// const getCountryAndNeighbor = function(country) {
//     const request = new XMLHttpRequest;
//     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//     request.send();

//     request.addEventListener('load', function() {
//         let [data, data2] = JSON.parse(this.responseText);
//         if (country === 'india') {
//             data = data2;
//         }
//         console.log(data);

//         // render country
//         renderCountry(data);

//         // render neighbors
//         const [neighbor] = data.borders;
//         if (!neighbor) return;

//         // AJAX call 2
//         const request2 = new XMLHttpRequest;
//         request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//         request2.send();

//         request2.addEventListener('load', function() {
//             const data2 = JSON.parse(this.responseText);
//             renderCountry(data2, 'neighbour');
//         })
//     });
// }

// getCountryAndNeighbor('ireland');

// setTimeout(() => {
//     console.log('1 second passed');
//     setTimeout(() => {
//         console.log('2 second passed');
//         setTimeout(() => {
//             console.log('3 second passed');
//             setTimeout(() => {
//                 console.log('4 second passed');
//             }, 1000)
//         }, 1000)
//     }, 1000);
// }, 1000)

// const request = new XMLHttpRequest;
// request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
// request.send();

// modern way of api calling

// const getCountry = function(country) {
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function(response) {
//         console.log(response);
//         return response.json();
//     }).then(function(data) {
//         console.log(data);
//         renderCountry(data[0]);
//     })

// const getJSON = function(url, errorMsg = 'Something went wrong.') {
//     return fetch(url).then(response => {
//         if (!response.ok)
//             throw new Error(`${errorMsg} (${response.status})`);
//         return response.json();
//     });
// };

// const getCountry = function(country) {
//     // country 1
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`).
//     then(response => {
//         console.log(response);
//         if (!response.ok)
//             throw new Error(`Country not found! (${response.status})`);
//         return response.json()
//     }).
//     then(data => {
//             renderCountry(data[0]);
//             // const neighbour = data[0].borders[0];
//             const neighbour = 'sss';
//             if (!neighbour) return;

//             // country 2
//             return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//         })
//         .then(response => {
//             if (!response.ok)
//                 throw new Error(`Country not found! (${response.status})`);
//             return response.json();
//         })
//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(err => {
//             console.error(`${err} ❌ ❌ ❌ `);
//             renderError(`Something went wrong ❌ ${err.message}. Try again!`);
//         })
//         .finally(() => { countriesContainer.style.opacity = 1; });
// };

// const getJSON = function(url, errorMsg = 'Something went wrong.') {
//     return fetch(url).then(response => {
//         if (!response.ok)
//             throw new Error(`${errorMsg} (${response.status})`);
//         return response.json();
//     });
// };

// const getCountry = function(country) {
//     // country 1
//     getJSON(`https://restcountries.eu/rest/v2/name/${country}`, 'Country not found')
//         .then(data => {
//             renderCountry(data[0]);
//             const neighbour = data[0].borders[0];
//             // const neighbour = 'sss';
//             if (!neighbour) throw new Error('No neighbour found!');

//             // country 2
//             return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbour}`, 'Country not found.')
//         })
//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(err => {
//             console.error(`${err} ❌ ❌ ❌ `);
//             renderError(`Something went wrong ❌ ${err.message}. Try again!`);
//         })
//         .finally(() => { countriesContainer.style.opacity = 1; });
// };

// btn.addEventListener('click', function() {
//     getCountry('australia');
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// const whereAmI = function(lat, lng) {
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//         .then(response => {
//             if (!response.ok) throw new Error(`Something ain't right, problem with geocoding ${response.status}`);
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//             console.log(`you are currently in ${data.city}, ${data.country}.`);
//             return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//         })
//         .then(response => {
//             if (!response.ok)
//                 throw new Error(`Country not found! (${response.status})`);
//             return response.json();
//         })
//         .then(data => renderCountry(data[0]))
//         .catch(err => console.error(`${err.message} ❗`));
// };


// whereAmI(52.508, 13.381);
// whereAmI(-33.933, 18.474);
// //whereAmI(-30.933, 18.474);

// console.log('Test start');
// setTimeout(() => console.log('0 second timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//     for (let i = 0; i < 100; i++);
//     console.log(res);
// })
// console.log('Test ends');

// const lotteryPromise = new Promise(function(resolve, reject) {
//     console.log('Lottery draw is happening. 🔮 ');
//     setTimeout(function() {
//         if (Math.random() >= 0.5) {
//             resolve('You WIN 💰 ');
//         } else {
//             reject(new Error('You lost your money. 😧'));
//         }
//     }, 2000)
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // Promisifying setTimeout
// const wait = (seconds) => new Promise(resolve => setTimeout(resolve, seconds * 1000));

// wait(3)
//     .then(() => {
//         console.log('I waited for 6 seconds');
//         return wait(1);
//     })
//     .then(() => {
//         console.log('I waited for 5 seconds');
//         return wait(1);
//     })
//     .then(() => {
//         console.log('I waited for 4 seconds');
//         return wait(1);
//     })
//     .then(() => {
//         console.log('I waited for 3 seconds');
//         return wait(1);
//     })
//     .then(() => {
//         console.log('I waited for 2 seconds');
//         return wait(1);
//     })
//     .then(() => console.log('I waited for 1 second'));

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));

navigator.geolocation.getCurrentPosition(position =>
    console.log(position),
    err => console.error(err));