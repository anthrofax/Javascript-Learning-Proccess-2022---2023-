'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
containerMovements.innerHTML = '';

// 1. Penggunaan method insertAdjacentHTML dalam membuat elemen baru di HTML dengan menggunakan Javascript
const displayMovements = function (movements) {
  movements.forEach(function (curMov, curI) {
    const movType = curMov > 0 ? 'Deposit' : 'Withdrawal';
    const html = ` 
    <div class="movements__row">
      <div class="movements__type movements__type--${movType.toLowerCase()}">${
      curI + 1
    } ${movType.toUpperCase()}</div>
      <div class="movements__value">${curMov}€</div>
   </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// 2. Penggunaan Reduce Method dalam Perhitungan Total Balance yang akan ditampilkan di Label Balance
const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, curMov) => acc + curMov, 0);

  labelBalance.textContent = `${account.balance}€`;
};

// 3. Implementasi Chaining Method (Map, Filter) dalam menentukan withraw ataupun deposit dalam summary application
const calcDisplaySummary = function (account) {
  const income = account.movements
    .filter(curMov => curMov > 0)
    .reduce((acc, curMov) => acc + curMov);

  const expenditure = account.movements
    .filter(curMov => curMov < 0)
    .reduce((acc, curMov) => acc + curMov);

  const interest = account.movements
    .filter(curMov => curMov > 0)
    .map(deposits => (deposits * account.interestRate) / 100)
    // Kasih penjelasan langkah di bawah (filter)
    // Bankist memiliki aturan hanya memberi bunga jika deposit yang masuk minimal 1 EUR
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int);

  labelSumIn.textContent = `${income}€`;
  labelSumOut.textContent = `${Math.abs(expenditure)}€`;
  labelSumInterest.textContent = `${interest}€`;
};

const updateUI = function (account) {
  // Display Movements
  displayMovements(account.movements);

  // Display Balance
  calcDisplayBalance(account);

  // Display Summary
  calcDisplaySummary(account);
};

// 4. Implementasi Map & forEach dalam membuat username pada masing" account
const createEachAccUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(e => e[0])
      .join('');
  });
};

createEachAccUsername(accounts);

// EVENT HANDLER
let logginedAcc;
btnLogin.addEventListener('click', function (e) {
  // PREVENT FORM FROM SUBMITTING
  e.preventDefault();

  // SEARCHING THE ACCOUNT THAT HAS THE SAME USERNAME & CORRECT PIN
  // 1. MY WAY
  // logginedAcc = accounts.find(
  //     acc =>
  //     acc.username === inputLoginUsername.value &&
  //     acc.pin == inputLoginPin.value
  // );

  // 2. JONAS' WAY
  logginedAcc = accounts.find(acc => acc.username === inputLoginUsername.value);

  if (Number(inputLoginPin.value) === logginedAcc?.pin) {
    // Welcome message
    labelWelcome.textContent = `Welcome back, ${
      logginedAcc.owner.split(' ')[0]
    } :D`;

    // Display UI
    containerApp.style.opacity = '100';

    // Clear Input Fields
    inputLoginUsername.value = inputLoginPin.value = '';

    // MAKE THE LAST INPUT FIELD WE FILLED DOESN'T HAVE FOCUS ANYMORE
    inputLoginPin.blur();

    updateUI(logginedAcc);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const reciever = accounts.find(acc => inputTransferTo.value === acc.username);
  const amount = Number(inputTransferAmount.value);

  if (
    reciever &&
    reciever.username !== logginedAcc.username &&
    amount > 0 &&
    amount <= logginedAcc.balance
  ) {
    logginedAcc.movements.push(-amount);
    reciever.movements.push(amount);
    updateUI(logginedAcc);
  }
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && logginedAcc.movements.some(mov => mov >= amount * 0.1)) {
    logginedAcc.movements.push(amount);
  }
  updateUI(logginedAcc);

  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === logginedAcc.username &&
    Number(inputClosePin.value) === logginedAcc.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === logginedAcc.username
    );
    accounts.splice(index, 1);

    containerApp.style.opacity = '0';
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

// Exercises
// 1. Menghitung seluruh jumlah (nilai) deposit dari semua akun yang ada di bank
const bankDepositSUm = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, curMov) => acc + curMov, 0);
console.log(bankDepositSUm);

// 2. Menghitung ada berapa jumlah deposit yang terjadi di bank (yang nilai nya minimal 1000$)
// With easier solution
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;

console.log(numDeposits1000);

// With reduce method
const numDeposits10002 = accounts
  .flatMap(acc => acc.movements)
  // 1. My Way
  // .reduce((acc, curValue) => (curValue >= 1000 ? (acc += 1) : (acc += 0)), 0);
  // 2. Jonas' Way
  // .reduce((acc, curValue) => (curValue >= 1000 ? acc + 1 : acc), 0);
  .reduce((acc, curValue) => (curValue >= 1000 ? ++acc : acc), 0);

console.log(numDeposits10002);

// 3. Membuat object menggunakan reduce method yang di dalamnya memuat total deposit dan withdraw dari semua akun di bank
const { deposits: pemasukkan, withdrawals: pengeluaran } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (objectNew, curMov) => {
      objectNew[curMov > 0 ? 'deposits' : 'withdrawals'] += curMov;
      return objectNew;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(pemasukkan, pengeluaran);

// /////////////////////////////////////////////////
// ////////////// ///////////////////////////////////
// // LECTURES

// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

///////////////////////////////////////////////
// // 1. SLICE (Tidak merubah original array)
// // Mengambil sebagian elemen dari array, value yang dihasilkan dari slice membuat array baru
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice());

// // 2. SPLICE = Untuk menghapus elemen pada array (Merubah original array)
// // Sama seperti slice. Bedanya, value yang diambil oleh splice akan terhapus dari original array nya
console.log(arr.splice(2)); //Menampilkan value yang dihapus (bukan value yang masih tersisa)
arr.splice(-1);
console.log(arr); //Baru, yang ditampilkan adalah value yang tersisa setelah dihapus menggunakan splice

// // 3. REVERSE (Merubah original array)
// const arrr = [...arr];
// const arr2 = ['f', 'g', 'h', 'i', 'j'];
// console.log(arrr.reverse());
// console.log(arrr); //Array nya berubah
// arrr.reverse(); //Mengembalikan posisi elemen array seperti semula

// // 4. CONCAT (Tidak merubah original array)
// // Menggabungkan 2 array menjadi 1
// const letters = arrr.concat(arr2);
// console.log(arrr.concat(letters));

// // 5. JOIN
// console.log(letters.join(' - '));

// // 6. AT
// // Untuk mengambil elemen dari array (mampu mengambil elemen dengan index minus (berdasarkan index terakhir))
// console.log(arr2.at(-1));
// // Juga terdapat pada string method
// console.log('Afridho'.at(-1));

// // 7. FOREACH
// // forEach (On Array)
// // - First argument : Current element value
// // - Second argument : Current index element
// // - Third argument : The array that is being looped over
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//     if (movement > 0) console.log(`Movement ${i}: You deposited ${movement}`);
//     else console.log(`Movement ${i}: You withdrew ${Math.abs(movement)}`);
// }

// console.log('----- FOREACH -----');
// movements.forEach(function(mov, i, arr) {
//     if (mov > 0) console.log(`Movement ${i + 1}: You deposited ${mov}`);
//     else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
// });

// // forEach (On Map & Set)
// // - First argument : Current value
// // - Second argument : Current key
// // - Third argument : The entire map that is being looped over

// // MAP
// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map) {
//     console.log(`${key} : ${value}`);
// });

// // SET
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// currenciesUnique.forEach(function(value, _, set) {
//     console.log(`${value} : ${value}`);
//     console.log(set);
// });

// // 8. MAP
// const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUSD = movements2.map(mov => mov * eurToUsd);

// console.log(movementsUSD);
// console.log(movements2);

// // Doing the same as before but using for of loop
// const movementsUSD2 = [];
// for (const mov of movements2) movementsUSD2.push(mov * eurToUsd);
// console.log(movementsUSD2);
// console.log(movements2);

// // Same as forEach, Map also has 3 parameters, which is the current value is the first parameter, current index is the second, and the entire array is the third.

// const movementsDescription = movements2.map(
//     (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescription);

// // 9. FILTER
// const deposits = movements2.filter(mov => mov > 0);
// const withdrawals = movements2.filter(mov => mov < 0);
// console.log(deposits, withdrawals);

// // 10. REDUCE
// const maxValue = movements2.reduce(
//     (acc, curMov) => (curMov > acc ? curMov : acc),
//     movements2[0]
// );
// console.log(maxValue);

// // 11. FIND
// const firstWithdrawal = movements2.find(mov => mov < 0);
// console.log(firstWithdrawal);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// //Using the for of loop to do the same as above
// let acc2;
// for (const acc of accounts) {
//     if (acc.owner === 'Sarah Smith') {
//         acc2 = acc;
//         break;
//     }
// }
// console.log(acc2);

// 12. FIND INDEX

// 13. SOME

// 14 EVERY

// 15. FLAT

// 16 FLAT MAP

// 17. SORT
const x = new Array('a', 'b');
console.log(x);
