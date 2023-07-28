var NilaiAwal = 1
var JumlahAngkot = 10
var AngkotBeroperasi = 6

for (NilaiAwal; NilaiAwal <= 10; NilaiAwal++) {
    if (NilaiAwal <= AngkotBeroperasi && NilaiAwal != 5) {
        console.log('Angkot No.' + NilaiAwal + ' beroperasi dengan baik.')
    } else if (NilaiAwal == 8 || NilaiAwal == 10 || NilaiAwal == 5) {
        console.log('Angkot No.' + NilaiAwal + ' sedang lembur.')
    } else {
        console.log('Angkot No.' + NilaiAwal + ' sedang tidak beroperasi.')
    }
}