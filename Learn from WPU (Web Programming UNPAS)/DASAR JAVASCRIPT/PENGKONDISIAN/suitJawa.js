let hasil = ''
let ulang = true

while (ulang) {
    let player = prompt('Pilih : gajah, semut, atau orang!')
        // Pilihan Computer
    let pilihanComputer = Math.random();

    if (pilihanComputer <= 0.33) {
        pilihanComputer = 'semut'
    } else if (pilihanComputer > 0.33 && pilihanComputer <= 0.66) {
        pilihanComputer = 'orang'
    } else if (pilihanComputer > 0.66 && pilihanComputer <= 1) {
        pilihanComputer = 'gajah'
    }

    // Menentukan Rules
    if (player == pilihanComputer) {
        hasil = 'ANDA SERI'
        alert(hasil)
        ulang = confirm('Mau coba lagi?')
    } else if (player == 'semut') {
        hasil = (pilihanComputer == 'orang') ? 'ANDA KALAH!' : 'ANDA MENANG!'
        alert(hasil)
        ulang = confirm('Mau coba lagi?')
    } else if (player == 'orang') {
        hasil = (pilihanComputer == 'semut') ? 'ANDA MENANG' : 'ANDA KALAH!'
        alert(hasil)
        ulang = confirm('Mau coba lagi?')
    } else if (player == 'gajah') {
        hasil = (pilihanComputer == 'orang') ? 'ANDA MENANG!' : 'ANDA KALAH'
        alert(hasil)
        ulang = confirm('Mau coba lagi?')
    } else {
        hasil = 'KEYWORD YANG ANDA MASUKKAN SALAH!'
        alert(hasil)
    }

    // MENAMPILKAN HASIL

}
alert('Terima Kasih, telah bermain :D')