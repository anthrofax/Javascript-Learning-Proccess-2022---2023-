// HTML Fragments
// const mahaSiswa = {
//     nama: 'Afridho Ikhsan',
//     umur: 18,
//     nrp: '02910128240',
//     email: 'afridhoikhsan@gmail.com'
// };

// const el = `<div class="mhs">
// <h2>${mahaSiswa.nama}</h2>
// <span class="nrp">${mahaSiswa.nrp}</span
// </div>`

// 2. Looping
// const mhs = [{
//         nama: 'Afridho Ikhsan',
//         email: 'afridhoikhsan@gmail.com'
//     },
//     {
//         nama: 'Miftahul Alif',
//         email: 'miftahulalif@gmail.com'
//     },
//     {
//         nama: 'Robin Fauzi',
//         email: 'robinfauzi@gmail.com'
//     }
// ]

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`;

// 3. Conditionals
// Ternary
// const lagu = {
//     judul: 'Tetap Dalam Jiwa',
//     penyanyi: 'Isyana Sarasvati',
//     feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
//     <h2>Lagu Favorit</h2>
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `feat. ${lagu.feat}` : ''}</li>
//     </ul>
// </div>`;

// 4. Nested 
// HTML Fragments bersarang.
const mhs = {
    nama: 'Afridho Ikhsan',
    semester: 5,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemrograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Object'
    ]
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester ${mhs.semester}</span>
    <h4>Mata Kuliah</h4>
    <ul>
       ${mhs.mataKuliah.map(p => `<li>${p}</li>`).join('')}
    </ul>
</div>`;

document.body.innerHTML = el