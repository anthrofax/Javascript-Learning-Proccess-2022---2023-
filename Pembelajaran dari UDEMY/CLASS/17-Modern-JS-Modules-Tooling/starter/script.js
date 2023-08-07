// Importing Module

// Import more than 1 external variable from other module at once ---- AND ---- changing imported variable name (totalPrice -> price)
import { totalPrice as price, tq } from './shoppingCart.js';

console.log('Importing Module');

console.log(price, tq);

addCart('buku', 12);
addCart('pulpen', 3);
addCart('tipe x', 1);

console.log(cart);

// Mixing between Named Import & Default Import
import addCart, { cart } from './shoppingCart.js';

// Top Level Await
// console.log('Start Fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const post = await res.json();
// console.log(post);
// console.log('Finish Fetching');

// Contoh dari implementasi import dari library external
// import deepCloneObject from './node_modules/lodash-es/cloneDeep.js';
import deepCloneObject from 'lodash-es/cloneDeep.js';

const state = {
  cart: [
    { producut: 'pizza', quantity: 5 },
    { producut: 'bread', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const clonedState = deepCloneObject(state);
const clonedState2 = Object.assign({}, state);
const clonedState3 = { ...state };

state.user.loggedIn = false;
state.cart.push('edo');
state.cart[0].producut = 'pencil';

console.log(state); //Object original
console.log(clonedState); // Deep Cloned Object (Nested object property tidak berubah meskipun pada object original diubah)

//Shallow copy (Nested object ikut berubah saat object original diubah)
console.log(clonedState2);
console.log(clonedState3);

// LIHAT CARA CLONING OBJECT DI VIDEO SEBELUMNYUA
// Kesimpulannya Deep Cloning hanya bisa kita lakukan menggunakan external library menggunakan Lodash seperti di atas, kareana menggunakan Object.assign({}, (object yang ingin dicopy)) dan {...(object yang ingin kita copy)} (Menggunakan spread operator) tidak bisa melakukan cloning pada nested object (hanya mampu first level copy).

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const edo = new Person('edo');

console.log('edo' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

// Polyfilling adalah membuat ulang (Recreate) function yang dideklarasikan (Yang masih belum support di ES5) sehingga membuat function tersebut tersedia dan dapat digunakan dengan fungsi yang sama di bundle yang berkaitan

// Package yang perlu diimport untuk bisa dilakukannya polyfilling pada code kita :
import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Polifilling async functions
import 'regenerator-runtime/runtime';

// (Parcel biasanya sudah otomatis ada fitur polyfilling, namun sekarang mereka merekomendasikan library eksternal untuk kita import)
