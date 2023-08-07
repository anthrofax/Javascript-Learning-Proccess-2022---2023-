const kotakPertama = document.querySelector('.box')

kotakPertama.addEventListener('click', function() {
    this.classList.toggle('size')
        // Karena kita ingin warna nya berubah saat perubahan size nya selesai, maka kita gunakan setTimeout untuk class .caption nya

    setTimeout(function() {
        this.classList.toggle('caption')
    }, 600)
})