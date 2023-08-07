const kartuEdo = document.querySelector('.card')
const tombolClose = document.querySelectorAll('.close')
const kontakOrang = document.querySelectorAll('.card')

for (let i = 0; i < 4; i++) {
    tombolClose[i].addEventListener('click', function() {
        kontakOrang[i].style.display = 'none'
    })
}