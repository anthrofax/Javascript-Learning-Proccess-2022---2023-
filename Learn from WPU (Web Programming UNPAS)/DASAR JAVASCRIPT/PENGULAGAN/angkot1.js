var nilaiawal = 1;
var JumlahAngkot = 10;
var AngkotBerjalan = 5;

while (nilaiawal <= AngkotBerjalan) {
    console.log('Angkot No.' + nilaiawal + ' beroperasi dengan baik.');

    nilaiawal++;
}

for (var AngkotBerjalan = AngkotBerjalan + 1; AngkotBerjalan <= JumlahAngkot; AngkotBerjalan++) {
    console.log('Angkot No.' + AngkotBerjalan + ' tidak beroperasi dengan baik.');
}