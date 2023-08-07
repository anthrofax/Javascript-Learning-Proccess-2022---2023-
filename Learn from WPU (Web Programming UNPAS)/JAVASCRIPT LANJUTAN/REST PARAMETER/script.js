// Rest Parameter

// function myFunc() {
//     return arguments;
// }

// console.log(myFunc(1, 2, 3, 4, 5))


// PENGGUNAAN REST PARAMETER PADA FUNCTION (MENJUMLAHKAN SELURUH REST PARAMETER)
// function jumlahkanArguments(...myArgs) {
//     // Contoh 3
//     return myArgs.reduce((acc, currentValue) => acc + currentValue)
// }

// console.log(jumlahkanArguments(1, 2, 3, 4, 5))

// Array Destructuring
// const kelompokSatu = ['Afridho', 'Syahrul', 'Alip', 'Robin', 'Dimas'];
// const [ketua, wakil, ...anggota] = kelompokSatu;

// console.log(ketua);
// console.log(wakil);
// console.log(anggota)

// Object Destructuring
// const teamSatu = {
//     projectManager: 'Afridho',
//     frontEndSatu: 'Doddy',
//     frontEndDua: 'Erik',
//     backEnd: 'Fajar',
//     ux: 'Hendra',
//     devOps: 'Ferry'
// }

// const { projectManager: a, ...b } = teamSatu;

// console.log(a);
// console.log(b)

// Filtering
function filterBy(type, ...values) {
    return values.filter(e => typeof e === type)
}

console.log(filterBy('boolean', 1, 2, 'Afridho', false, 10, true, 'Doddy'))