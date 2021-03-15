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

const getJSON = function(url, errorMsg = 'Something went wrong.') {
    return fetch(url).then(response => {
        if (!response.ok)
            throw new Error(`${errorMsg} (${response.status})`);
        return response.json();
    });
};

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

// wait(1)
//     .then(() => {
//         // console.log('I waited for 6 seconds');
//         return wait(1);
//     })
//     .then(() => {
//         // console.log('I waited for 5 seconds');
//         return wait(1);
//     })
//     .then(() => {
//         // console.log('I waited for 4 seconds');
//         return wait(1);
//     })
//     .then(() => {
//         // console.log('I waited for 3 seconds');
//         return wait(1);
//     })
//     .then(() => {
//         // console.log('I waited for 2 seconds');
//         return wait(1);
//     })
//     .then(() => console.log('I waited for 1 second'));

// // Promise.resolve('abc').then(x => console.log(x));
// // Promise.reject(new Error('Problem!')).catch(x => console.error(x));


// const getPosition = function() {
//     return new Promise(function(resolve, reject) {
//         //     navigator.geolocation.getCurrentPosition(position =>
//         //         console.log(position),
//         //         err => console.error(err));
//         // })
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
// };
// getPosition().then(pos => console.log(pos));

// const whereAmI = function() {
//     getPosition()
//         .then(pos => {
//             const { latitude: lat, longitude: lng } = pos.coords;
//             return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//         })
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
//         .then(data => data[1].name === 'India' ? renderCountry(data[1]) : renderCountry(data[0]))
//         .catch(err => console.error(`${err.message} ❗`));
// };

// btn.addEventListener('click', whereAmI);

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. 
This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. 
When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. 
The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Consume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image 
   (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

// const imgContainer = document.querySelector('.images');

// const createImage = function(imgPath) {
//     return new Promise(function(resolve, reject) {
//         const img = document.createElement('img');
//         img.src = imgPath;
//         img.addEventListener('load', function() {
//             imgContainer.append(img);
//             resolve(img);
//         })
//         img.addEventListener('error', function() {
//             reject(new Error('Image not found!'));
//         })
//     });
// }
// let currImg;
// createImage('img/img-1.jpg')
//     .then(img => {
//         currImg = img;
//         console.log('1 image loaded');
//         return wait(2)
//     })
//     .then(() => {
//         currImg.style.display = 'none';
//         return createImage('img/img-2.jpg')
//     })
//     .then(img => {
//         currImg = img;
//         console.log('2 images loaded');
//         return wait(2);
//     })
//     .then(() => {
//         currImg.style.display = 'none';
//         return createImage('img/img-3.jpg')
//     })
//     .then(img => {
//         currImg = img;
//         console.log('3 images loaded');
//         // currImg.style.display = 'none';
//         return wait(2);
//     })
//     .catch(err => console.error(err));

// createImage(`img/img-${i}.jpg`).then(img => console.log(img)).catch(err => console.error(err));
// createImage(`img/img-${i}.jpg`).then(img => console.log(img)).catch(err => console.error(err));

// const whereAmI = async function(country) {
//     const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
//     const data = await res.json();
//     console.log(data);
//     renderCountry(data[0]);
// }

// whereAmI('spain');
// console.log('FIRST');

// const getPosition = function() {
//     return new Promise(function(resolve, reject) {
//         //     navigator.geolocation.getCurrentPosition(position =>
//         //         console.log(position),
//         //         err => console.error(err));
//         // })
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     })
// };

// const whereAmI = async function(country) {
//     try {
//         // geolocation
//         const pos = await getPosition();
//         const { latitude: lat, longitude: lng } = pos.coords;

//         // reverse geocoding
//         const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//         if (!resGeo.ok) throw new Error('Problem getting location data.');
//         const dataGeo = await resGeo.json();
//         // console.log(dataGeo);

//         // country data
//         const res = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.country}`);
//         if (!res.ok) throw new Error('Problem getting location data of the country.');
//         const data = await res.json();
//         // console.log(data);
//         renderCountry(dataGeo.country === 'India' ? data[1] : data[0]);
//         return `You are currently in ${dataGeo.city}, ${dataGeo.country}`;
//     } catch (err) {
//         console.error(`${err} ❗`);
//         renderError(`Something went wrong. ❗ ${err.message}`);

//         throw err;
//     }

// }

// console.log('1: Getting location');
// whereAmI()
//     .then(city => console.log(`2: ${city}`))
//     .catch(err => console.error(`2: ${err.message} ❗`))
//     .finally(() => console.log('3: finished getting location'));
// whereAmI();
// whereAmI();

// try {
//     let y = 1;
//     const x = 2;
//     x = y;
// } catch (err) {
//     alert(err.message);
// }

// (async function() {
//     try {
//         const city = await whereAmI();
//         console.log(`2: ${city}`);
//     } catch (err) {
//         console.error(`2: ${err.message} ❗`)
//     }
//     console.log('3: finished getting location')
// }());

const get3countries = async function(c1, c2, c3) {
    try {
        // const [data1] = await getJSON(`https://restcountries.eu/rest/v2/name/${c1}`);
        // const [data2] = await getJSON(`https://restcountries.eu/rest/v2/name/${c2}`);
        // const [data3, data4] = await getJSON(`https://restcountries.eu/rest/v2/name/${c3}`);
        //console.log([data1.capital, data2.capital, data4.capital]);

        const data = await Promise.all([getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
            getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
            getJSON(`https://restcountries.eu/rest/v2/name/${c3}`)
        ]);
        console.log(data.map(d => d[0].capital));
    } catch (err) {
        console.error(err);
    }
}

get3countries('usa', 'canada', 'bharat');