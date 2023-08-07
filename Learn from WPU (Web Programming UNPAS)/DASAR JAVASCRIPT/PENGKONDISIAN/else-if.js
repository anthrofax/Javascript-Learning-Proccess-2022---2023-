var angka = prompt('Masukkan angka, terserah anda :)')

if (angka % 2 == 0) {
    alert(angka + ' adalah bilangan GENAP')
} else if (angka % 2 == 1) {
    alert(angka + ' adalah bilangan GANJIL')
} else {
    alert(angka + ' bukan ANGKA, melainkan huruf!')
}