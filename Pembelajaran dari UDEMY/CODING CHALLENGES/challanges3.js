// TEST 3

// DATA 2
// const dolphins = [96, 108, 89];
// const koalas = [88, 91, 110];

// const totalSkorDolphine = dolphins.reduce((prev, current) => prev + current);
// const totalSkorKoala = koalas.reduce((prev, current) => prev + current);

// const avgDolphines = totalSkorDolphine / 3;
// const avgKoalas = totalSkorKoala / 3;

// if (avgDolphines == avgKoalas) {
//     console.log(`HASIL DARI PERMAINANNYA SERI!`);
// } else if (avgDolphines > avgKoalas) {
//     console.log(`Dolphine memiliki skor rata-rata ${avgDolphines}, sedangkan Koalas memiliki skor ${avgKoalas}. Sehingga pemenangnya adalah Dolphine!`);
// } else {
//     console.log(`Dolphine memiliki skor rata-rata ${avgDolphines}, sedangkan Koalas memiliki skor ${avgKoalas}. Sehingga pemenangnya adalah Koala!`);
// }

// DATA 2
const dolphins = [97, 112, 101];
const koalas = [109, 95, 123];

function hitungRata2(a) {
    let totalNilai = a.reduce((acc, cur) => {
        return acc + cur;
    });

    return totalNilai / 3;
}
const dolphinsAvg = hitungRata2(dolphins);
const koalasAvg = hitungRata2(koalas);

console.log("SELAIN MEMILIKI SCORE YANG LEBIH BESAR DARI LAWAN, SEBUAH TEAM HARUS MEMILIKI POINT RATA-RATA LEBIH DARI 100 POINT UNTUK MENANG!");
if (dolphinsAvg == koalasAvg) {
    console.log("DRAW!");
} else if (dolphinsAvg > koalasAvg && dolphinsAvg > 100) {
    console.log(`Dolphin Team has ${dolphinsAvg} points on average score, while the Koalas Team has ${koalasAvg} points on average score. So, the winner of the competition is Dolphin!`);
} else if (koalasAvg > dolphinsAvg && koalasAvg > 100) {
    console.log(`Dolphin Team has ${dolphinsAvg} points on average score, while the Koalas Team has ${koalasAvg} points on average score. So, the winner of the competition is Koalas!`);
} else {
    console.log(`Dolphin has ${dolphinsAvg} points on average score, koalas has ${koalasAvg} points on average score. So, The is no Winner, because there is no team who has Average Score that more than 100 points!`);
}