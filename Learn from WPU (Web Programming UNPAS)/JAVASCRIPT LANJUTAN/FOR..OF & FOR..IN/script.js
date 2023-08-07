// for..of

// 1. Array
// const mhs = ['Afridho', 'Syahrul', 'Alip'];

// a.) for biasa
// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i])
// };

// b.) forEach
// mhs.forEach(e => console.log(e));

// c.) for..of
// for (const e of mhs) {
//     console.log(e)
// }

// d.) Perbedaan Looping Elemen & Index pada Array menggunakan forEach & for..of
// const mhs = ['Afridho', 'Syahrul', 'Alip'];

// mhs.forEach((e, i) => console.log(`${e} merupakan mahasiswa ke-${i + 1}`))

// for (const e of mhs.entries()) {
//     console.log(e)
// }

// 2. String
// const nama = 'Afridho';
// for (const n of nama) {
//     console.log(n)
// }

// 3. NodeList
// const liNama = document.querySelectorAll('.nama')

// a.) Menggunakan forEach
// liNama.forEach(e => console.log(e.textContent))

// b.) Menggunakan for.off
// for (const e of liNama) {
//     console.log(e.innerHTML)
// }

// 4. Arguments
// function jumlahkanAngka() {
//     let menampungAngka = 0
//     for (e of arguments) {
//         menampungAngka += e
//     }

//     return menampungAngka
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5))

// for..in

const mhs = {
    nama: 'Afridho',
    umur: 18,
    email: 'afridhoikhsan@gmail.com'
}

for (m in mhs) {
    console.log(mhs[m])
}

// for (m in mhs) {
//     console.log(m)
// }