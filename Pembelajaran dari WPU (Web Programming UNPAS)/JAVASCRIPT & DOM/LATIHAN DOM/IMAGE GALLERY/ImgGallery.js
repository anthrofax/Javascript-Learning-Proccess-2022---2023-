const gambarKecil = document.querySelectorAll('.thumbnail img')
const gambarJumbo = document.querySelector('.jumbo')
const galleryGambarKecil = document.querySelector('.thumbnail')


galleryGambarKecil.addEventListener('click', function(e) {
    if (e.target.className == 'thumb') {

        gambarJumbo.classList.add('animasisatu')
        gambarJumbo.setAttribute('src', e.target.src)

        setTimeout(function() {
            gambarJumbo.classList.remove('animasisatu')
        }, 500)

        gambarKecil.forEach(function(f) {
            if (f.classList.contains('klikHitam')) {
                f.classList.remove('klikHitam')
                e.target.style.transition = '1s'
            }
        })

        e.target.classList.add('klikHitam')

    }
})