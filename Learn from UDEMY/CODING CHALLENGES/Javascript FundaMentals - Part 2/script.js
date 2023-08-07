// // CHALLENGE #1

// // DATA 1
// const dolphins1 = [44, 23, 71];
// const koalas1 = [65, 54, 49];

// // DATA 2
// const dolphins2 = [85, 54, 41];
// const koalas2 = [23, 34, 27];

// const calcAverage = (a) => {
//     const totalScore = a.reduce((acc, cur) => acc + cur);

//     return totalScore / 3;
// };

// const checkWinner = (avgDolphins, avgKoalas) => {
//     if (avgDolphins / 2 >= avgKoalas) {
//         console.log(`The winner of the competition is Dolphins with ${avgDolphins} score points, while Koalas have ${avgKoalas} score points`);
//     } else if (avgKoalas / 2 >= avgDolphins) {
//         console.log(`The winner of the competition is Koalas with ${avgKoalas} score points, while Dolphins have ${avgDolphins} score points`);
//     } else {
//         console.log(`Koalas = ${avgDolphins}, Koalas ${avgKoalas}. There's no winner :(`);
//     }
// };

// checkWinner(calcAverage(dolphins1), calcAverage(koalas1));
// checkWinner(calcAverage(dolphins2), calcAverage(koalas2));

// // CHALLENGES #2

// // TEST DATA (BILL) : 125, 555, 44

// const bills = [125, 555, 44];

// const calcTip = (a) => {
//     if (a >= 50 && a <= 300) {
//         return a * 0.15;
//     } else {
//         return a * 0.2;
//     }
// };

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// // ARRAY OF TOTAL BILLS (BILLS + TIPS)
// const totalBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// // SHOW THE RESULTS
// console.log(bills);
// console.log(tips);
// console.log(totalBills);

// // CHALLANGES #3

// // TEST DATA : Marks Weights 78 kg and is 1.69 m tall. John Weights 92 kg and is 1.95 m tall.

// const mark = {
//     fullname: "Mark Miller",
//     mass: 78,
//     height: 1.69,

//     calcBMI: function() {
//         return mark.mass / mark.height ** 2;
//     },
// };

// const john = {
//     fullname: "John Smith",
//     mass: 92,
//     height: 1.95,

//     calcBMI: function() {
//         return john.mass / john.height ** 2;
//     },
// };

// console.log(`mark's BMI (${mark.calcBMI()}) is higher than John's (${john.calcBMI()})`);

// CHALLENGES #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totalBills = [];

function calcTIp() {
    for (let i = 0; i <= 9; i++) {
        if (bills[i] >= 50 && bills[i] <= 300) {
            tips.push(bills[i] * 0.15);
        } else {
            tips.push(bills[i] * 0.2);
        }

        totalBills.push(bills[i] + tips[i]);
    }

    console.log(bills);
    console.log(tips);
    console.log(totalBills);
}

calcTIp();