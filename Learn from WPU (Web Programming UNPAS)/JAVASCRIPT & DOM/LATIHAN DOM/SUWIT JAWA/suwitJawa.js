const pilihanJempol = document.querySelector('.gajah');
const pilihanOrang = document.querySelector('.orang');
const pilihanSemut = document.querySelector('.semut');
let pilihanPlayer;
let pilihanComputer;
const gambarComputer = document.querySelector('.gambarkomputer')
const tampilanGame = document.querySelector('.info')

let getComputer = function() {
    pilihanComputer = Math.random();

    if (pilihanComputer <= 0.33) {
        pilihanComputer = 'semut'
    } else if (pilihanComputer > 0.33 && pilihanComputer <= 0.66) {
        pilihanComputer = 'orang'
    } else {
        pilihanComputer = 'gajah'
    }
}

let getHasil = function(a, b) {
    if (a == b) {
        gambarComputer.setAttribute('src', pilihanComputer + '.png')
        tampilanGame.innerHTML = ' SERI!'
    } else if (a == 'gajah' && b == 'semut') {
        gambarComputer.setAttribute('src', 'semut.png')
        tampilanGame.innerHTML = ' KALAH!'
    } else if (a == 'gajah' && b == 'orang') {
        gambarComputer.setAttribute('src', 'orang.png')
        tampilanGame.innerHTML = ' MENANG!'
    } else if (a == 'orang' && b == 'gajah') {
        gambarComputer.setAttribute('src', 'gajah.png')
        tampilanGame.innerHTML = ' KALAH!'
    } else if (a == 'orang' && b == 'semut') {
        gambarComputer.setAttribute('src', 'semut.png')
        tampilanGame.innerHTML = ' MENANG!'
    } else if (a == 'semut' && b == 'gajah') {
        gambarComputer.setAttribute('src', 'gajah.png')
        tampilanGame.innerHTML = ' MENANG!'
    } else if (a == 'semut' && b == 'orang') {
        gambarComputer.setAttribute('src', 'orang.png')
        tampilanGame.innerHTML = ' KALAH!'
    }
}

function putarGambar() {
    const gambarPilihan = ['orang', 'semut', 'gajah']
    let i = 0
    const waktuMulai = new Date().getTime()


    setInterval(function() {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        gambarComputer.setAttribute('src', gambarPilihan[i++] + '.png')

        if (i == gambarPilihan.length) {
            i = 0;
        }

    }, 100)
}

// GAME EXECUTION
pilihanJempol.addEventListener('click', function() {
    pilihanPlayer = pilihanJempol.className
    getComputer()
    getHasil(pilihanPlayer, pilihanComputer)
})
pilihanOrang.addEventListener('click', function() {
    pilihanPlayer = pilihanOrang.className
    getComputer()
    getHasil(pilihanPlayer, pilihanComputer)
})

pilihanSemut.addEventListener('click', function() {
    pilihanPlayer = pilihanSemut.className;
    putarGambar();

    setTimeout(function() {
        getComputer();
        getHasil(pilihanPlayer, pilihanComputer);
    }, 1000)

})