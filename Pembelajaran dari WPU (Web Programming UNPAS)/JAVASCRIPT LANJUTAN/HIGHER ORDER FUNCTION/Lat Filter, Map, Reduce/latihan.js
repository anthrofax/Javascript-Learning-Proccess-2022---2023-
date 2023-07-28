// Ambil semua elemen video
const semuaVideo = Array.from(document.querySelectorAll('[data-duration]'))
    // pilih hanya yang 'Javscript Lanjutan'
let videoJavascript = semuaVideo.filter(x => x.textContent.includes('JAVASCRIPT LANJUTAN'))

// Jumlahkan durasi dari semua video Javascript Lanjutan
.map(y => y.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
.map(z => {
    const diPecah = z.split(':').map(arrayMenitDetik => parseFloat(arrayMenitDetik))
    return diPecah[0] * 60 + diPecah[1]
})

// jumlahkan semua detik
.reduce((a, b) => a + b);

// ubah formatnya jadi jam menit detik
const jam = Math.floor(videoJavascript / 3600);
videoJavascript = videoJavascript - jam * 3600;
const menit = Math.floor(videoJavascript / 60);
const detik = Math.floor(videoJavascript - menit * 60);

// simpan di DOM
const tampilanDurasi = document.querySelector('.total-durasi');
tampilanDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`

// Jumlahkan video yang merupakan Javascript Lanjutan
const mengandungJavascript = semuaVideo.filter(f => f.textContent.includes('JAVASCRIPT LANJUTAN')).length;

const ubahTampilanJumlahVideo = document.querySelector('.jumlah-video');
ubahTampilanJumlahVideo.textContent = `${mengandungJavascript} Video.`