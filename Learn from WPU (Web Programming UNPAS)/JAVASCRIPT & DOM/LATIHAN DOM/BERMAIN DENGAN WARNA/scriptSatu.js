const warnaKesukaan = document.querySelector('.tombolSatu');

warnaKesukaan.onclick = function() {
    document.body.classList.toggle('ubahWarnaKesukaan')
}

// Membuat struktur tombol acak warna
const tombolAcak = document.createElement('button');
tombolAcak.setAttribute('type', 'button');
const teksTombolAcak = document.createTextNode('Acak Warna!');
tombolAcak.appendChild(teksTombolAcak);

// Meletakkan (TOMBOL ACAK WARNA) setelah (TOMBOL WARNA KESUKAAN)
warnaKesukaan.after(tombolAcak)

// Membuat nilai random untuk nilai RGB dinamis


// MEMBUAT AKSI SAAT CLICK TOMBOL ACAK WARNA
tombolAcak.addEventListener('click', function fAcakWarna() {
    const r = Math.round(Math.random() * 256);
    const g = Math.round(Math.random() * 256);
    const b = Math.round(Math.random() * 256);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})

// Membuat Slider RGB
// 1. SLIDE MERAH
const sMerah = document.querySelector('input[name=slideMerah]')

sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})

// 2. SLIDE HIJAU
const sHijau = document.querySelector('input[name=slideHijau]')

sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})

// 3. SLIDE BIRU
const sBiru = document.querySelector('input[name=slideBiru]')

sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})

// MEMBUAT PERGERAKKAN MOUSE MENJADI PERUBAHAN WARNA BACKGROUND BODY

document.body.addEventListener('mousemove', function(event) {
    const xPos = Math.round(event.clientX / window.innerWidth * 255);
    const yPos = Math.round(event.clientY / window.innerHeight * 255);

    document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',100)'
})