// Dalam merubah InnerHTML, bisa menambahkan tag baru juga
const merubahInner = document.getElementById('judul')

merubahInner.innerHTML = 'Klik link <a href="www.tokopedia.com/niagatop">ini</a> untuk mengunjungi website Tokopedia!'

merubahInner.style.backgroundColor = 'limegreen'

// Implementasi node.appendChild()
// Menambahkan element baru di AKHIR sebuah parent
const pBaru = document.createElement('p');
const teksNodeBaru = document.createTextNode('Paragraf Baru!');

pBaru.appendChild(teksNodeBaru)

const sectionA = document.getElementById('a')

sectionA.appendChild(pBaru)

pBaru.style.backgroundColor = 'limegreen'

// Implementasi node.insertBefore()
// Menyisipkan sebuah elemen di posisi yang kita mau pada sebuah parent  
const ulLama = document.querySelector('ul')
const pSesudah = ulLama.getElementsByTagName('li')[1]

const liBaru = document.createElement('li')
const teksLiBaru = document.createTextNode('Item Baru!')

liBaru.appendChild(teksLiBaru)

ulLama.insertBefore(liBaru, pSesudah)

liBaru.style.backgroundColor = 'limegreen'


// Menghapus elemen yang sudah ada pada sebuah parent
const linkTerhapus = document.querySelector('section#a a')
sectionA.removeChild(linkTerhapus)

//Mengganti elemen yang sudah ada pada sebuah parent dengan element baru
const itemTiga = ulLama.querySelector('li:nth-child(4)')

const gantiItem = document.createElement('li')
const isiItem = document.createTextNode('Item Disisipkan!')

gantiItem.appendChild(isiItem)

ulLama.replaceChild(gantiItem, itemTiga)

gantiItem.style.backgroundColor = 'limegreen'