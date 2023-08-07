'use strict';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        mon: [9, 22],
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    // 1. Method with destructure arguments
    // appOrderNotification: function({ starterIndex, mainIndex, time, address }) {
    //     console.log(
    //         `Order recieved! Your ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} on ${time}.`
    //     );
    // },

    // 2. Method with arguments that written manually
    appOrderNotification: function(starterIndex, mainIndex, time, address) {
        console.log(
            `Order recieved! Your ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} on ${time}.`
        );
    },
};

// Usecase using Rest Pattern & Spread Operator at the same time
// const { tuesday, ...otherPropertes } = {
//     ...restaurant.openingHours,
//     tuesday: { open: 8, close: 22 },
//     sunday: { open: 7, close: 23 },
// };
// console.log(tuesday, otherPropertes);

const add = function(...number) {
    // let sum = 0;
    // for (let i = 0; i < number.length; i++) {
    //     sum += number[i];
    //     console.log(number[i] + ' + ');
    // }
    // return sum;
    console.log(number);
};

add([2, 3, 1, 20, 39, 50]);

// 1. Method call with destructure arguments
// restaurant.appOrderNotification({
//     starterIndex: 0,
//     mainIndex: 0,
//     time: '14:00',
//     address: 'Komplek BCA Block DE/2, Jatisari.',
// });

// 2. Method call with old way
// restaurant.appOrderNotification(
//     0,
//     0,
//     '19:00',
//     'Komplek BCA Block DE/2, Jatisari'
// );

// for (const day of Object.keys(restaurant)) {
//     console.log(day);
// }

// console.log(Object.values(restaurant));

const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again!'],
]);
console.log(question);
const answer = 3;
console.log(question.get(answer === question.get('correct')));

const convertMaptoArray = [...question];
console.log(convertMaptoArray);
console.log(Object.entries(restaurant));

// Working with strings

// PART 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

// We can get a certain character from a string by specify the string with index number
console.log(plane[0]);
console.log(plane[1]);
console.log(Number(plane[2]));

// We can do the same directly on a string
console.log('Afridho Ikhsan' [0]);

// Read the length from string
console.log(airline.length);
console.log('Afridho'.length);

// String Methods
// 1. indexOf (The first occurrence)
console.log(airline.indexOf('r'));
console.log('Afridho Ikhsan'.indexOf('i'));
console.log(airline.indexOf('Portugal'));

// 2. lastIndexOf (The last occurrence)
console.log(airline.lastIndexOf('r'));

// Dengan menggunakan method di atas, kita bisa mudah dalam menggunakan method slice yang mana membutuhkan index sebagai parameternya
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf('P')));
console.log(airline.slice(-2));
console.log(airline.slice(0, -1));

// PART 2
console.log(airline.toLocaleLowerCase());
console.log(airline.toLocaleUpperCase());

console.log('Afridho'.toLocaleUpperCase());

// Fix capitalization in name
const passenger = 'jOnAs';
const passengerLowerCase = passenger.toLowerCase();
console.log(
    passengerLowerCase[0].toLocaleUpperCase() + passengerLowerCase.slice(1)
);

// Comparing Email
const email = 'anthrofax@gmail.com';
const loginEmail = '  AnthRofax@Gmail.com \n';

const correctEmailFormat = loginEmail.toLowerCase().trim();
console.log(email == correctEmailFormat);

// Replacing
const priceGB = '288,97 £';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
    'All the passenger come to boarding door 23, Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

// String method that returns Boolean
// includes, startsWith, endsWith
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.startsWith('Airb'));

console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('A320'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo'))
    console.log('Part of the NEW Airbus Family!');

// Practice Exercise
const checkBaggage = function(items) {
    const baggage = items.toLowerCase();

    if (baggage.includes('knife') || baggage.includes('gun'))
        console.log('You not allowed to aboard!');
    else console.log('Welcome aboard :D');
};

checkBaggage('i bring Knife, parasol, camera, socks, only that.');
checkBaggage("There's only leptop & my shirt on my baggage sir.");
checkBaggage('Oww i brought gUn, baseball hat, & pillow in there');

// FINAL PART

// Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Afridho Ikhsan'.split(' '));

const [firstName, lastName] = 'Afridho Ikhsan'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// Working with Split & Join to Capitilize Word
const capitilizeName = function(name) {
    const nameArray = name.split(' ');

    // 1. Cara 1
    // let returnedName = '';

    // for (const n of nameArray) {
    //     returnedName += ' ' + n[0].toUpperCase() + n.slice(1);
    // }

    //  2. Cara 2
    // const capitilizeName2 = [];
    // for (const n of nameArray) {
    //     capitilizeName2.push(n[0].toUpperCase() + n.slice(1));
    // }

    // 3. Cara 3
    const capitilizeName2 = [];
    for (const n of nameArray) {
        capitilizeName2.push(n.replace(n[0], n[0].toUpperCase()));
    }

    console.log(capitilizeName2.join(' '));
};

capitilizeName('afridho ikhsan');
capitilizeName('sopian syauri');
capitilizeName('rizki septiana');
capitilizeName('reiza alithian syah');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(23, '+').padEnd(30, '+'));
console.log('Afridho'.padStart(15, '+').padEnd(30, '+'));

const maskedCreditCard = function(number) {
    const strNumber = number + '';

    console.log(strNumber.slice(-4).padStart(strNumber.length, '*'));
};

maskedCreditCard(1497209378405);
maskedCreditCard(4849023099385934933);
maskedCreditCard(29237704290);

// Repeat
const message2 = 'Bad weather.... All departures delayed!';
console.log(message2.repeat(5));

const planesInLine = function(number) {
    console.log(`There are ${number} planes in line : ${'🛩'.repeat(number)}`);
};

planesInLine(12);
planesInLine(5);
planesInLine(8);

console.log('');

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

for (const flight of flights.split('+')) {
    const flightInfo = flight.split(';');
    let str = '';

    if (flightInfo[0].includes('Delayed')) str += '🔴 ';

    // flightInfo[0].includes('Delayed') ?
    //     (str = `🔴 ${flightInfo[0]
    //     .replaceAll('_', ' ')
    //     .trim()} from ${flightInfo[1]
    //     .slice(0, 3)
    //     .toUpperCase()} to ${flightInfo[2]
    //     .slice(0, 3)
    //     .toUpperCase()} (${flightInfo[3].replace(':', 'h')})`) :
    //     (str = `${flightInfo[0].replaceAll('_', ' ').trim()} from ${flightInfo[1]
    //     .slice(0, 3)
    //     .toUpperCase()} to ${flightInfo[2]
    //     .slice(0, 3)
    //     .toUpperCase()} (${flightInfo[3].replace(':', 'h')})`);

    str += `${flightInfo[0].replaceAll('_', ' ').trim()} from ${flightInfo[1]
    .slice(0, 3)
    .toUpperCase()} to ${flightInfo[2]
    .slice(0, 3)
    .toUpperCase()} (${flightInfo[3].replace(':', 'h')})`;

    console.log(str.padStart(44));
}

// EVALUATION (THE DIFFRENCE BETWEEN JONAS' SOLUTION AND MINE)
// 1. HE USED TERNARY OPERATOR DIRECTLY WHEN ASSIGNING STR VARIABLE FOR DETERMINE WHETER IT NEEDS 🔴 FOR DELAYED FLIGHT OR NOT
// 2. He used DESTRCUTURE to define each index of Flight Info Array
// 3. He used padStart method directly when assigning str variable after all the other methods that used to format use
// 4. He made a little refactor for repeated syntax. That is, when formatting location to Upper Case.