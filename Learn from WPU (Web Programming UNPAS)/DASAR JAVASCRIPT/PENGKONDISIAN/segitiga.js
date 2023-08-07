var hasil = ''

for (var i = 1; i <= 5; i++) {
    for (var j = 1; i == 1 && j <= 9; j++) {
        if (j == 5) {
            hasil += '*'
        } else {
            hasil += ' '
        }
    }

    for (var k = 1; i == 2 && k <= 9; k++) {
        if (k == 4 || k == 5 || k == 6) {
            hasil += '*'
        } else {
            hasil += ' '
        }
    }

    for (var l = 1; i == 3 && l <= 9; l++) {
        if (l == 1 || l == 2 || l == 8 || l == 9) {
            hasil += ' '
        } else {
            hasil += '*'
        }
    }

    for (var m = 1; i == 4 && m <= 9; m++) {
        if (m == 1 || m == 9) {
            hasil += ' '
        } else {
            hasil += '*'
        }
    }

    for (var n = 1; i == 5 && n <= 9; n++) {
        hasil += '*'
    }

    hasil += '\n'
}
console.log(hasil)