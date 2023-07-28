var s = ''
var ss = ''
var sss = ''
var r = ''
var rr = ''

for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= i; j++) {
        s += '*'
    }
    s += '\n'
}
console.log(s)
console.log('\n')

for (var k = 10; k > 0; k--) {
    for (var l = 0; l < k; l++) {
        ss += '*'
    }
    ss += '\n'
}
console.log(ss)
console.log('\n')

for (m = 1; m <= 10; m++) {
    for (n = 1; n <= 10; n++) {
        if (n + 1 <= m) {
            sss += ' '
        } else {
            sss += '*'
        }
    }
    sss += '\n'
}
console.log(sss)
console.log('\n')

for (var a = 1; a <= 10; a++) {
    for (var b = 1; b <= a; b++) {
        r += '*'
    }
    r += '\n'
}
for (var c = 9; c > 0; c--) {
    for (var d = 1; d <= c; d++) {
        r += '*'
    }
    r += '\n'
}
console.log(r)
console.log('\n')