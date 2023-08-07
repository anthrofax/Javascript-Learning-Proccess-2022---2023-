// Destructuring Variable/Assignment

// 1. Destructuring Array
const perkenalan = ['Halo', 'nama', 'saya', 'Afridho Ikhsan']
const [kataSatu, kataDua, kataTiga, kataEmpat] = perkenalan
// console.log(kataSatu)

// 2. Jika tidka ingin semua elemen pada array dimasukkan ke variable (Skipping Items)
const tellUmur = ['umur', 'saya', 18, 'tahun']
const [firstWord, , thirdWord, ] = tellUmur
// console.log(thirdWord)

// 3. Menukar nilai pada variable (Swap Items)
let a = 1;
let b = 2;
// console.log(a);
// console.log(b);
[a, b] = [b, a]
// console.log(a);
// console.log(b);

// 4. Return value pada function
function coba() {
    return [1, 2]
};

const q = coba();
// console.log(q);
// console.log(q[1]);

// Tapi dengan Destructuring Varible, kita bisa langsung membuat nya seperti ini
const [r, p] = coba();
// console.log(r)

// 5. Rest Parameter
const [k, ...values] = [1, 2, 3, 4, 5];
console.log(k);
console.log(values);
console.log(values[3])