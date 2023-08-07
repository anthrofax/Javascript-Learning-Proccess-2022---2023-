const Mahasiswa = function() {
    this.nama = 'Afridho';
    this.umur = 18;

    this.sayHello = function() {
        console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`)
    }

    function nambahSesuatu() {
        console.log(this.umur++);
    }
}

const afridho = new Mahasiswa()