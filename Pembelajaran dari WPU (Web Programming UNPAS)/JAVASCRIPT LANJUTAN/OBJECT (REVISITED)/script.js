// Cara membuat object dalam Javascript

// 1. Object Literal
// let mahasiswa1 = {
//     nama: 'Afridho',
//     energy: 10,
//     makan: function(porsi) {
//         this.energy += porsi
//         return console.log(`Halo ${this.nama}, selamat makan! Energy anda sekarang sebanyak ${this.energy} :D`)
//     }
// }
// let mahasiswa2 = {
//     nama: 'Ikhsan',
//     energy: 20,
//     makan: function(porsi) {
//         this.energy += porsi
//         return console.log(`Halo ${this.nama}, selamat makan! Energy anda sekarang sebanyak ${this.energy} :D`)
//     }
// }

// 2. Function Declaration
// const methodMahasiswa = {
//     makan: function(porsi) {
//         this.energy += porsi
//         console.log(`Halo ${this.nama}, selamat makan! energy anda sekarang sebanyak ${this.energy} :D`)
//     },
//     bermain: function(waktu) {
//         this.energy -= waktu
//         console.log(`Halo ${this.nama}, selamat bermain! energy anda sekarang sebnyak ${this.energy} :D`)
//     }
// }

// function Mahasiswa(a, b) {
//     let mahasiswa = {}

//     mahasiswa.nama = a
//     mahasiswa.energy = b
//     mahasiswa.makan = methodMahasiswa.makan
//     mahasiswa.bermain = methodMahasiswa.bermain

//     return mahasiswa
// }

// let afridho = Mahasiswa('Afridho', 10);
// let ikhsan = Mahasiswa('Ikhsan', 12);

// 3. Object.create()
const methodMahasiswa = {
    makan: function(porsi) {
        this.energy += porsi
        console.log(`Halo ${this.nama}, selamat makan! energy anda sekarang sebanyak ${this.energy} :D`)
    },
    bermain: function(waktu) {
        this.energy -= waktu
        console.log(`Halo ${this.nama}, selamat bermain! energy anda sekarang sebnyak ${this.energy} :D`)
    }
}

function Mahasiswa(a, b) {
    let mahasiswa = Object.create(methodMahasiswa)

    mahasiswa.nama = a
    mahasiswa.energy = b

    return mahasiswa
}

let afridho = Mahasiswa('Afridho', 10)
    // 4. Constructor Function
    // function Mahasiswa(a, b) {
    //     this.nama = a
    //     this.energy = b

//     this.makan = function(porsi) {
//         this.energy += porsi
//         console.log(`Halo ${this.nama}, selamat makan! energy anda sekarang sebanyak ${this.energy} :D`)
//     }

//     this.bermain = function(waktu) {
//         this.energy -= waktu
//         console.log(`Halo ${this.nama}, selamat bermain! energy anda sekarang sebnyak ${this.energy} :D`)
//     }
// }

// let afridho = new Mahasiswa('Afridho', 10);
// let ikhsan = new Mahasiswa('Ikhsan', 12);