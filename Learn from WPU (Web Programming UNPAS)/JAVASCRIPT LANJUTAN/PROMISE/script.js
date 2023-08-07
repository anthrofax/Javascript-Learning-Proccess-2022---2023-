// 1. Memanggil Ajax menggunakan Jquery
// $.ajax({
//     url: "http://www.omdbapi.com/?apikey=f268da81&s=harry potter",
//     success: (results) => console.log(results),
//     error: (results) => console.log(results.responseText),
// });

// 2. Memanggil Ajax menggunakan Vanilla Javascript (Javascript Murni)
// const memanggilAjax = new XMLHttpRequest();

// memanggilAjax.onreadystatechange = function() {
//     if (memanggilAjax.status === 200) {
//         if (memanggilAjax.readyState === 4) {
//             console.log(JSON.parse(memanggilAjax.response));
//         }
//     } else {
//         console.log(memanggilAjax.responseText);
//     }
// };

// memanggilAjax.open("get", "http://www.omdbapi.com/?apikey=f268da81&s=harry potter");
// memanggilAjax.send();

// 3. Memanggil Ajax menggunakan Fetch (Javascript Murni juga)
// const movies = fetch("http://www.omdbapi.com/?apikey=f268da81&s=harry potter");

// Jika di console.log akan variable movies akan mengembalikan dalam bentuk promise *pending
// console.log(movies);

// Jika ingin melihat isinya (filmnya) kita cukup tuliskan seperti ini
// fetch("http://www.omdbapi.com/?apikey=f268da81&s=harry potter")
//     .then((e) => e.json())
//     .then((e) => console.log(e));

// PROMISE
// Merupakan object yang merepresentasikan keberhasilan atau kegagalan dari sebuah event yang asynchronus yang akan terjadi di masa yang akan datang

// janji (terpenuji / ingkar)👇
// states (fulfilled / rejected / pending)

// Untuk melakukan keadaan yang dijelaskan di atas(Promise)
// Kita memiliki lakukan antara 3 fungsi callback diantaranya
// callback (resolve / reject / finally)
// Resolve = kita buat saat promise/janji nya terpenuhi
// Reject = kita buat saat promise/janji nya tidak terpenuhi
// Finally = Ketika waktu tunggu nya selesai, baik itu janji nya terpenuhi maupun tidak

// Di dalam promise terdapat aksi yang akan kita lakukan ketika janji nya terpenuhi ataupun tidak
// aksi (then / catch)
// then = Aksi yang dilakukan saat promise/janji nya terpenuhi
// catch = Aksi yang dilakukan saat promise/janji nya tidak terpenuhi

// Contoh implementasi coding dengan peran promise (Hanya contoh, tidak benar" request ke API)

// Contoh 1
// let diTepati = true;
// const janjiSatu = new Promise((resolve, reject) => {
//     if (diTepati) {
//         // Ini hanya contoh! Dalam aplikasi nyatanya kita bisa request ke API, ataupun menjalankan sebuah proses yang  kompleks
//         resolve("Janji telah ditepati!");
//     } else {
//         reject("Ingkar janji!");
//     }
// });

// janjiSatu.then((valueResolveNya) => console.log("OK! : " + valueResolveNya)).catch((valueRejectNya) => console.log("NOT OKAY! : " + valueRejectNya));

// Contoh 2 (Hampir sama dengan contoh 1, bedanya contoh 2 ini promise/janji nya tidak langsung di eksekusi/ditepati (karena dalam aplikasi dunia nyata memang seperti itu))
// let diTepati = true;
// const janjiDua = new Promise((resolve, reject) => {
//     if (diTepati) {
//         setTimeout(() => {
//             resolve("Ditepati setelah beberapa waktu!");
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject("Tidak ditepati setelah beberapa waktu!");
//         }, 2000);
//     }
// });

// console.log("Mulai!");
// janjiDua
// // Method finally akan dieksekusi lebih dulu sebelum then/catch
//     .finally(() => console.log("Selesai menunggu!"))
//     .then((valueResolveNya) => console.log("OK! : " + valueResolveNya))
//     .catch((valueRejectNya) => console.log("NOT OKAY! : " + valueRejectNya));
// console.log("Selesai!");

// Promise.all()
// Digunakan saat kita memiliki banyak promise dan ingin menjalankan semua Promise nya sekaligus

const film = new Promise((resolve) => {
    setTimeout(() => {
        resolve([{
            judul: "Avengers",
            sutradara: "Sandhika",
            pemeran: "Doddy, Erik",
        }, ]);
    }, 1000);
});

const cuaca = new Promise((resolve) => {
    setTimeout(() => {
        resolve([{
            kota: "Bandung",
            temp: 26,
            kondisi: "Cerah Berawan",
        }, ]);
    }, 500);
});

// Jika kita ingin melakukan promise nya tanpa menggunakan Promise.all() biasanya kita lakukan dengan seperti ini
// film.then((valueResolveNya) => console.log(valueResolveNya));
// cuaca.then((valueResolveNya) => console.log(valueResolveNya));

// Namun disarankan untuk menggunakan Promise.all() untuk melakukannya kita cukup menuliskannya seperti ini (Mengembalikan dalam bentuk Array (jadinya array dalam array))
// Promise.all([film, cuaca]).then((valueResolveNya) => console.log(valueResolveNya));

// Jika kita ingin Array nya terpisah, kita bisa menggunakan spread operator
Promise.all([film, cuaca]).then((valueResolveNya) => {
    const [film, cuaca] = valueResolveNya;
    console.log(film);
    console.log(cuaca);
});