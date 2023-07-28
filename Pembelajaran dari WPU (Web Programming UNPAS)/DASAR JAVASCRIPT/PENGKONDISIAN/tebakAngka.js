var kesempatan = 3
var comp = parseInt(Math.random() * 10)
var hasil = ''
var tanya = true


while (tanya) {
    alert('Tebak angka antara 1-10 \n Anda memiliki ' + kesempatan + '  kesempatan untuk menebak.')

    while (kesempatan >= 1) {
        var player = (prompt('Masukkan angka tebakan!'))

        if (player == comp) {
            kesempatan = 0
            hasil = 'SELAMAT JAWABAN ANDA BENAR! ANGKA TEBAKAN YANG DICARI ADALAH ' + comp
        } else if (player < comp || player > comp) {
            kesempatan -= 1
            if (kesempatan == 0) {
                hasil = 'Maaf, kesempatan anda telah habis.'
            } else if (player > comp) {
                hasil = 'TERLALU BESAR \nAyo masih tersisa ' + kesempatan + ' kesempatan lagi'
            } else if (player < comp) {
                hasil = 'TERLALU RENDAH \nAyo masih tersisa ' + kesempatan + ' kesempatan lagi'
            }
        } else {
            hasil = 'Keyword yang anda masukkan SALAH!'
        }
        alert(hasil)
    }
    if (tanya = true) {
        kesempatan = 3
    }
    tanya = confirm('Mau coba lagi?')
}

alert('Terima kasih telah bermain tebak angka!')