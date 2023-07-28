const pTiga = document.querySelector('.p3')

function eventInline() {
    pTiga.style.backgroundColor = 'lightskyblue'
}



const pDua = document.querySelector('.p2')

function eventPDua() {
    pDua.style.backgroundColor = 'lightgreen'
}

pDua.onclick = eventPDua;

const pEmpat = document.querySelector('section#b p')
pEmpat.addEventListener('click', function() {
    const ulLama = document.querySelector('section#b ul')
    const liBaru = document.createElement('li')

    const teksLiBaru = document.createTextNode('Item Baru!')

    liBaru.appendChild(teksLiBaru)

    ulLama.appendChild(liBaru)

})