// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least

// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time

// TEST DATA
// DATA 1 : Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
let dolphins = [44, 23, 71];
let koalas = [65, 54, 49];

const calcAverage = (teamYangDihitung) => {
    teamYangDihitung.reduce((acc, cur) => {
        teamYangDihitung = acc + cur;

        return teamYangDihitung;
    });

    return teamYangDihitung / 3;
};

let dolphinsAverage = calcAverage(dolphins);
console.log(`Rata-rata nilai team Dolphins adalah ${dolphinsAverage}`);
let koalasAverage = calcAverage(koalas);
console.log(`Rata-rata nilai team Koalas adalah ${koalasAverage}`);

let cekAkhirPemenang;

const checkWinner = (teamPertama, teamKedua) => {
    if (teamPertama >= teamKedua * 2) {
        console.log(`Pemenang nya adalah tim Dolphin`);
    } else if (teamKedua >= teamPertama * 2) {
        console.log(`Pemenang nya adalah Tim Koala`);
    } else {
        console.log("Tidak ada pemenang sama sekali.");
    }
};