// importing module
// import { addToCart, totalPrice as price, totalQty } from './shoppingCart.js';
// addToCart('beers', 5);
// console.log(price, totalQty);


import add, { cart } from './shoppingCart.js'
add('pizza', 2);
add('burgers', 3);
add('beers', 6);
console.log(cart);

// import * as ShoppingCart from './shoppingCart.js';
// console.log('importing modules');
// console.log(ShoppingCart);
// console.log(ShoppingCart.beer);
// ShoppingCart.addToCart('beers', 6);

// import add, { addToCart, totalPrice as price, totalQty } from './shoppingCart.js'; (possible, but not advisable)
// import add, { cart } from './shoppingCart.js';
// add('salamis', 10);
// add('johnnie walker, gold label', 2);
// add('whole chicken', 1);

// console.log(cart);

// const shoppingCart2 = (function() {
//     const cart = [];
//     const shippingCost = 10;
//     const totalPrice = 237;
//     const totalQty = 10;

//     const addToCart = function(product, quantity) {
//         cart.push({ product, quantity })
//         console.log(`${quantity} ${product} added to cart`);
//     }

//     const orderStuff = function(product, quantity) {
//         console.log(`${quantity} ${product} ordered from supplier`);
//     }

//     return {
//         addToCart,
//         cart,
//         // shippingCost,
//         totalPrice,
//         totalQty,
//     };
// })();

// shoppingCart2.addToCart('beers', 6);
// shoppingCart2.addToCart('pizza', 2);
// console.log(shoppingCart2);
// console.log(shoppingCart2.shippingCost);

import cloneDeep from 'lodash-es';

const state = {
    cart: [
        { product: 'bread', qty: 4 },
        { product: 'beer', qty: 6 }
    ],
    user: {
        isLoggedIn: true,
    },
};

const clone = Object.assign({}, state);
const deepClone = cloneDeep(state);
state.user.isLoggedIn = false;
// console.log(clone);
console.log(deepClone);

if (module.hot) {
    module.hot.accept();
}

console.log('you are now using parcel');

// class Person {
//     greeting = 'Hey'
//     constructor(name) {
//         this.name = name;
//         console.log(`${this.greeting} ${this.name}`);
//     }
// };

// const iti = new Person('Itish');
console.log(cart.find(el => el.quantity >= 2));

import 'core-js/stable/array/find';

// pollyfilling async functions
import 'regenerator-runtime/runtime';