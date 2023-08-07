// Exporting Module

console.log('Exporting Module');

const shippingCost = 10;
export const cart = [];

export const addCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} telah dimasukkan ke keranjang.`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} telah dimasukkan ke keranjang.`);
}
