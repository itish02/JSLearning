// exporting module
console.log('exporting module');

const shippingCost = 10;
const cart = [];

export const addToCart = function(product, quantity) {
    cart.push({ product, quantity })
    console.log(`${quantity} ${product} added to cart`);
}

const totalPrice = 237;
const totalQty = 23;
const storeName = 'Ikea';
const beer = 'Guinness';
export { totalPrice, totalQty, storeName as store, beer, cart };

export default function(product, quantity) {
    cart.push({ product, quantity })
    console.log(`${quantity} ${product} added to cart`);
};