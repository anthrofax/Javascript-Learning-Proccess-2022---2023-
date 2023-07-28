// Callback

// function halo(nama) {
//     alert(`Halo ${nama}!`)
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan Nama:');
//     callback(nama)
// }

// tampilkanPesan(halo);

function getDataMahasiswa(url, success, error) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.response);
            } else if (xhr.status === 404) {
                error();
            }
        }
    };

    xhr.open("get", url);
    xhr.send();
}

getDataMahasiswa();

// const mhs = [{
//         "nama": "Sandhikla Galih",
//         "nrp": "043040023",
//         "email": "sandhikagalih@unpas.ac.id",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": "1"
//     },
//     {
//         "nama": "Doddy Ferdiansyah",
//         "nrp": "133040123",
//         "email": "doddy@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": "2"
//     },
//     {
//         "nama": "Erik",
//         "nrp": "104040001",
//         "email": "erik@gmail.com",
//         "jurusan": "Teknik Industri",
//         "idDosenWali": "2"
//     }
// ]

// console.log('Mulai!');
// mhs.forEach(e => {
//     for (let i = 0; i <= 10000000; i++) {
//         let date = new Date();
//     }
//     console.log(e.nama)
// });
// console.log('Selesai!')