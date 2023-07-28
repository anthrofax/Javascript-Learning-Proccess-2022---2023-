// Tagged Template

const nama = 'Afridho Ikhsan';
const umur = 18;

// Masukkan contoh nya disini!

const str = highlight `Halo, nama saya ${nama}, saya ${umur} tahun :D`;
document.body.innerHTML = str

// CONTOH

// 1. MENGOTAK-ATIK PARAMETER
// function coba(e, y, z, a) {
//     return a
// };

// const str = coba `Halo, nama saya ${nama}, saya ${umur} tahun :D`;
// console.log(str);

// MENGGUNAKAN REST PARAMETER (TIDAK PERLU MENGUBAH PARAMETER)

// 2. Menggunakan Rest Parameter (1)
// function coba(e, ...y) {
//     let ubahTulisan = '';
//     e.forEach((seeText, indexString) => {
//         ubahTulisan += `${seeText}${y[indexString] || ''}`
//     })

//     return ubahTulisan
// };

// 3. Menggunakan Rest Parameter (2) Menggunakan Reduce
// function coba(e, ...y) {
//     return e.reduce((aqq, currentValues, indexReduce) => `${aqq}${currentValues}${y[indexReduce] || ''}`, '')
// };

// 4. Highlight
// function highlight(e, ...y) {
//     return e.reduce((aqq, isiString, indexString) => `${aqq}${isiString}<span class="markedText">${y[indexString] || ''}</span>`, '')
// };