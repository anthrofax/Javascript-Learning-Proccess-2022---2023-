// Spread Operator
// Memecah iterables menjadi single element

// 1. Pada Array
// const mhs = ['Afridho', 'Ikhsan', 'Masputra']
// console.log(mhs)
// console.log(...mhs)

// 2. Pada String
// const mhs = ['Afridho', 'Ikhsan', 'Masputra']
// console.log(...mhs[0])

// Menggabungkan 2 Array menjadi satu
// const mhs = ['Afridho', 'Syahrul', 'Alip'];
// const dosen = ['Sandhika', 'Ade', 'Hendra'];
// const orang = [...mhs, 'contohMenyisipkanString', ...dosen];
// console.log(orang)

// Sebenarnya ada cara lain selain Spread Operator
// Yaitu method concat (khusus array)
// const mhs = ['Afridho', 'Syahrul', 'Alip', 'contohStringSisipan'];
// const dosen = ['Sandhika', 'Ade', 'Hendra'];
// const orang = mhs.concat(dosen);

// console.log(orang);

// Meng-copy Array
// Contoh 1
// const mhs = ['Afridho', 'Syahrul', 'Alip'];
// const mhs1 = [...mhs];
// mhs1[0] = 'Ikhsan';
// console.log(mhs1);
// console.log(mhs);

// Contoh 2
// Pada saat kita ingin mengambil Text Content pada li lalu menampungnya pada sebuah Array

// Cara 1 (Menggunakan Array.from & map)
// const isiLi = Array.from(document.querySelectorAll('ul li'));
// const tampungMahasiswa = [];
// isiLi.map(e => tampungMahasiswa.push(e.textContent))
// console.log(tampungMahasiswa)

// Cara 2 (Menggunakan Spread Operator)
// const isiLi = document.querySelectorAll('ul li');
// const mhs = [...isiLi].map(e => e.textContent);

// console.log(mhs)

// Contoh 3
// Kita ingin setiap kita hover sebuah huruf pada H1 maka akan lakukan animasi
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(e => `<span>${e}</span>`).join('');
nama.innerHTML = huruf

console.log(huruf)