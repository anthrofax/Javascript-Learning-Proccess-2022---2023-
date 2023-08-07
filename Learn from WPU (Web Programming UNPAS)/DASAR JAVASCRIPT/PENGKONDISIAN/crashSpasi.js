var hasil = ''

for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        for (var j = 1; j <= 5; j++) {
            hasil += '# '
        }
    } else {
        for (var k = 1; k <= 5; k++) {
            hasil += ' #'
        }
    }

    hasil += '\n'
}
console.log(hasil)