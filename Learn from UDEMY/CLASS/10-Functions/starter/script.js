'use strict';

const greet = greeting => name => console.log(`${greeting} ${name}!`);

const greetName = greet('hello');
greetName('Afridho');

greet('hey')('edo');

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNumber, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
        );

        this.bookings.push({ flight: this.iataCode + flightNumber, name });
    },
};

const euroWings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const bookFunction = lufthansa.book;

// Untuk test, apakah method call mutlak merubah tujuan this keyword?
// Jawab : tidak berpengaruh
bookFunction.call(euroWings, 211, 'Afridho Ikhsan');
console.log(euroWings);
lufthansa.book(492, 'Rizki Septiana');
console.log(lufthansa);

// Untuk test , apakah bind secara harfiah membuat method baru ke object yang dituju?
// Jawaban : Bukan, melainkan bind method menjadikan suatu function menjadi first class function. (Tidak langsung memanggil)
const ewBook = lufthansa.book.bind(euroWings, 232);
ewBook('Afridho');
ewBook(242, 'Edo');

// Untuk test, apakah Partial Application bisa diskip (Tanpa harus merubah posisi parameter yang ingin dijadikan Partial Application menjadi yang pertama)
// Jawab : Tidak bisa. Jadi, posisi parameter yang ingin dijadikan Partial Application harus di paling awal
const addTAX = (rate, value) => value + rate * value;

const addVAT = addTAX.bind(null, 0.23);
// TEST ---> const addVAT2 = addTAX.bind(null, rate, 0.23);
console.log(addVAT(100));

// Challenge untuk membuat contoh di atas tapi dalam bentuk function yang me-return-kan function
const addTAX2 = function(rate) {
    return value => value + rate * value;
};

const VAT2 = addTAX2(0.23);
console.log(VAT2(100));

//ILFE
(function() {
    console.log('This will never run again');
    const isPrivate = 23;
});

console.log(isPrivate);

() => console.log('This will ALSO never run again');