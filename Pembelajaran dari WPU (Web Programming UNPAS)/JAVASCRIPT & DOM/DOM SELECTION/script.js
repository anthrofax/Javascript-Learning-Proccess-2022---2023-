// DOM Selection

// DENGAN CARA INI (getElementById), kita tidak perlu menuliskan index, tinggal panggil saja variable seleksi nya, karena getElementById menghasilkan ELEMENT
// const helloWorld = document.getElementById('judul')
// helloWorld.style.color = 'red'
// helloWorld.style.backgroundColor = 'blue'

// KETIKA MENYELEKSI DOM YANG PENGEMBALIANNYA DALAM BENTUK HTMLCOLLECTION, KITA HARUS MENULISKAN INDEXNYA TERLEBIH DAHULU

// PENULISAN INDEX HTMLCOLLECTION KETIKA MENDEKLARASIKAN VARIABLE
// const tagSelection = document.getElementsByTagName('p')[0]
// tagSelection.innerHTML = 'Ini diubah dari Javascript '

// PENULISAN INDEX HTMLCOLLECTION KETIKA MEMANIPULASI DOM NYA
// const tagSelection2 = document.getElementsByTagName('p')
// tagSelection2[1].innerHTML = 'INI DIUBAH DARI JAVASCRIPT JUGA!'

// MEMANIPULASI DOM DENGAN FOR

// const forExample = document.getElementsByClassName('p1');

// for (let i = 0; i < forExample.length; i++) {
//     forExample[i].style.backgroundColor = 'lightskyblue'
// }

// const contohQSelector = document.querySelector('p')
// contohQSelector.style.backgroundColor = 'red'

const selectorAwal = document.getElementById('a')
const selectorAkhir = selectorAwal.querySelectorAll('p')
selectorAkhir[0].style.backgroundColor = 'red'
selectorAkhir[1].style.backgroundColor = 'lightSkyBlue'
selectorAkhir[2].style.backgroundColor = 'limeGreen'

// const selectorAwal = document.querySelector('section#a')
// const selectorAkhir = selectorAwal.getElementsByTagName('p')

// selectorAkhir[0].style.backgroundColor = 'red'
// selectorAkhir[1].style.backgroundColor = 'yellow'
// selectorAkhir[2].style.backgroundColor = 'green'