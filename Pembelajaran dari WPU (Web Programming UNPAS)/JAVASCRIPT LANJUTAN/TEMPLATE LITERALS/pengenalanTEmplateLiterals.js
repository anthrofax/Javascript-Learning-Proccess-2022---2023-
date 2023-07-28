// 1. Template Literals atau Template String 
const nama = 'Afridho Ikhsan';
const umur = 18;

// Cara Lama
console.log('Halo, nama saya ' + nama + '! Dan saya ' + umur + ' tahun.')

// Dengan Template Literals 
console.log(`Halo, nama saya ${nama}! Dan saya ${umur} tahun.`)

// 2. Embedded Expression
console.log(`${ 1 + 1 }`);
console.log(`${alert('Halo!')}`);

const x = 11;
console.log(`${(x % 2 == 0) ? 'GENAP' : 'GANJIL'}`)

// HTML FRAGMENTS
const mhs = {
    nama: 'Afridho Ikhsan',
    umur: 18,
    nrp: 901290128390,
    email: 'afridhoikhsan@gmail.com'
};

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el)