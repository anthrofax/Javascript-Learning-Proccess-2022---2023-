var angkot01 = ['edo', 'arul', 'alip'];

var tambahPenumpang = function(namaPenumpang, penumpang) {
    // jika angkot kosong
    // tambah penumpang di awal array
    // kembalikan isi array & keluar dari function
    if (penumpang.length == 0) {
        penumpang.unshift(namaPenumpang)

        return penumpang
    } else {
        //else
        // telusuri seluruh kursi dari awal 
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == undefined) {
                // jika ada kursi kosong
                // tambah penumpang di kursi tersebut
                // kembalikan isi array & keluar dari function
                penumpang[i] = namaPenumpang

                return penumpang
            } else if (penumpang[i] == namaPenumpang) {
                // jika ada nama yang sama
                // tampilkan pesan kesalahannya
                // tampilkan isi array & keluar dari function

                console.log(namaPenumpang + ' sudah ada di dalam Angkot.')

                return penumpang
            } else if (i == penumpang.length - 1) {
                // jika seluruh kursi terisi
                // tambah penumpang di akhir array
                // kembalikan isi array  keluar dari function

                penumpang.push(namaPenumpang)

                return penumpang
            }
        }
    }
}

var hapusPenumpang = function(a, b) {
    //Jika angkot kosong, tampilkan bahwa angkot kosong
    if (b.length == 0) {
        console.log('Tidak ada yang bisa dihapus, angkot sudah kosong!')

        return b
    } else {
        for (var j = 0; j < b.length; j++) {
            if (b[j] == a) {
                // Jika ada penumpang yang nama nya sesuai, hapus nama penumpang pada array dengan memberi nilai "underfined"
                b[j] = undefined

                return b
            } else if (b[j] != a) {
                // Jika tidak ada nama penumpang yang namanya sesuai, tampilkan pesan kesalahannya
                console.log('Di angkot tersebut tidak ada yang nama nya ' + a)

                return b
            }
        }
    }

}