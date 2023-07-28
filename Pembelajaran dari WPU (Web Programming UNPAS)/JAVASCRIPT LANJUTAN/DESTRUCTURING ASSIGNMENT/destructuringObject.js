// 1. Destructuring Object
// const mhs = {
//     nama: 'Afridho Ikhsan',
//     umur: 18
// }

// const { nama, umur } = mhs;
// console.log(nama)

// 2. Destructuring Object dengan variable yang berbeda dengan property objectnya
// const mhs = {
//     nama: 'Afridho Ikhsan',
//     umur: 18
// }

// 3. Assignment tanpa deklarasi object
// ({ nama, umur } = {
//     nama: 'Afridho Ikhsan',
//     umur: 18
// });
// console.log(nama)


// 4. Memberikan Default Value
// const mhs = {
//     nama: 'Afridho Ikhsan',
//     umur: 18,
//     email: 'hiprofax@gmail.com'
// }

// const { nama, umur, email = 'afridhoikhsan@gmail.com' } = mhs;
// console.log(email)

// 5. Memberikan nilai default + nilai assign ke variable baru
// const mhs = {
//     nama: 'Afridho Ikhsan',
//     umur: 18,
//     email: 'hiprofax@gmail.com'
// }

// const { nama: a, umur: b, email: c = 'afridhoikhsan@gmail.com' } = mhs;
// console.log(c)

// 6. Rest Parameter
// const mhs = {
//     nama: 'Afridho Ikhsan',
//     umur: 18,
//     email: 'hiprofax@gmail.com'
// }

// const { nama, ...values } = mhs;
// console.log(nama);
// console.log(values);
// console.log(values.umur);
// console.log(values.email)

// 7. Mengambil field pada object, setelah dikirim sebagai parameter untuk function

// Biasanya sebelum kita menggunakan Destructuring Object, kita mengambil field pada object dengan cara seperti ini 

const mhs = {
    id: 123,
    nama: 'Afridho Ikhsan',
    umur: 18,
    email: 'hiprofax@gmail.com'
}

function getIdMhs(contohFunctionMhs) {
    return mhs.nama;
}

console.log(getIdMhs(mhs));

// Namun jika kita menggunakan Destructuring Object, kita bisa melakukan nya seperti ini

const mhsDua = {
    id: 456,
    nama: 'Andrew Isaac',
    umur: 18,
    email: 'andrewisaac@gmail.com'
};

function getIdMhsDua({ id, nama }) {
    return nama
}

console.log(getIdMhsDua(mhsDua))