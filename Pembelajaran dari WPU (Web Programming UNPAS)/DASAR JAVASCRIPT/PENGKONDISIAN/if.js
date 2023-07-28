var NilaiAwal = 1
var JumlahAngkot = 10
var AngkotBeroperasi = 6

for (AngkotBeroperasi; NilaiAwal <= JumlahAngkot; NilaiAwal++) {
    if (NilaiAwal <= AngkotBeroperasi) {
        console.log('Angkot No.' + NilaiAwal + ' beroperasi dengan baik.')
    } else {
        console.log('Angkot No.' + NilaiAwal + ' tidak sedang beroperasi.')
    }
}