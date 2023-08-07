let angkaPertama = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]

let angkaKedua = angkaPertama.filter(function(e) {
    return e >= 3
})

console.log(angkaKedua)

// Konsep filter dengan menggunakan loopoing 
// for (let i = 0; i <= angkaPertama.length; i++) {
//     if (angkaPertama[i] >= 3) {
//         angkaKedua.push(angkaPertama[i])
//     }
// }

// console.log(angkaKedua)