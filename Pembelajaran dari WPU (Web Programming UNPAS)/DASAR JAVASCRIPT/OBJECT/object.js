function PengelolaanAngkot(nama, trayek, penumpang, uangKas) {
    this.nama = nama;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.uangKas = uangKas;

    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang)

        return this.penumpang
    }

    this.penumpangTurun = function(namaPenumpangTurun, uanggKas) {
        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpangTurun) {
                this.penumpang[i] = undefined
            }
        }

        this.uangKas += uanggKas

        return this.penumpang
    }
}

var angkot01 = new PengelolaanAngkot('Afridho Ikhsan', ['Indonesia', 'Korea'], [], 0);

var angkot02 = new PengelolaanAngkot('Syharul Destian', ['India', 'Indonesia'], [], 0);

var angkot03 = new PengelolaanAngkot('Miftahul Alif', ['Indonesia', 'Zimbabwe'], [], 0);

var angkot04 = new PengelolaanAngkot('Robin Fauzi', ['Jatisari', 'Pondok Gede'], [], 0)