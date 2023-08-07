// 1. Destructure Return Value (Array)
// function kalkulasiAngka(a, b) {
//     return [a + b, a - b, a * b];
// }

// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasiAngka(2, 3);
// console.log(bagi)

// 2. Destructure Return Value (Object)
// function penjumlahanPerkalian(a, b) {
//     return {
//         jumlah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const { kali, jumlah, bagi, kurang } = penjumlahanPerkalian(2, 3);
// console.log(kali)

// Destructure Function Arguments

// Contoh 1
// const mhs1 = {
//     nama: 'Afridho Ikhsan',
//     umur: 18,
//     email: 'afridhoikhsan@gmail.com'
// }

// function cetakMhs({ nama, umur }) {
//     return `Halo, nama saya ${nama}, dan saya berumur ${umur}`
// }

// console.log(cetakMhs(mhs1))

// Contoh 2
const mhs1 = {
    nama: 'Afridho Ikhsan',
    umur: 18,
    email: 'afridhoikhsan@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 90
    }
}

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
    return `Halo, nama saya ${nama}, saya berumur ${umur}, dan nilai UAS saya ${uas}`
}

console.log(cetakMhs(mhs1))