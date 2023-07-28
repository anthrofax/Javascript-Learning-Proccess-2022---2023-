// const semester1 = [85, 83, 81, 80, 76, 81, 80, 81, 78, 76, 83, 81, 82, 82, 80, 81];
// const semester2 = [86, 84, 82, 81, 81, 83, 83, 80, 81, 81, 83, 82, 84, 84, 80, 80];
// const semester3 = [88, 88, 89, 82, 84, 88, 78, 95, 80, 84, 85, 83, 84, 85, 82];
// const semester4 = [93, 92, 93, 89, 89, 93, 83, 97, 89, 89, 90, 87, 90, 89, 85];
// const semester5 = [94, 93, 94, 92, 91, 92, 92, 90, 93, 92, 93, 91, 92, 92, 91];
// const semester6 = [96, 96, 96, 95, 93, 96, 84, 93, 90, 95, 99, 89, 96, 95, 93];

// function rataNilai(a) {
//     const totalNilai = a.reduce((acc, cur) => acc + cur);

//     return totalNilai / 16;
// }

// function rataNilai2(a) {
//     const totalNilai = a.reduce((acc, cur) => acc + cur);

//     return totalNilai / 15;
// }

// const nilaiRataSemester1 = rataNilai(semester1);
// const nilaiRataSemester2 = rataNilai(semester2);
// const nilaiRataSemester3 = rataNilai2(semester3);
// const nilaiRataSemester4 = rataNilai2(semester4);
// const nilaiRataSemester5 = rataNilai2(semester5);
// const nilaiRataSemester6 = rataNilai2(semester6);

// console.log("Rata-rata nilai masing-masing semester");
// console.log("Semester 1 = " + nilaiRataSemester1);
// console.log("Semester 2 = " + nilaiRataSemester2);
// console.log("Semester 3 = " + nilaiRataSemester3);
// console.log("Semester 4 = " + nilaiRataSemester4);
// console.log("Semester 5 = " + nilaiRataSemester5);
// console.log("Semester 6 = " + nilaiRataSemester6);

// console.log("Total rata-rata nilai semua semester");
// console.log(`${(nilaiRataSemester1 + nilaiRataSemester2 + nilaiRataSemester3 + nilaiRataSemester4 + nilaiRataSemester5 + nilaiRataSemester6) / 6}`);

temperatureSuhu = [2, 9, 10, 98, 237, 38, 21, 190];

const hitungAmplitudoSuhu = function(temperatur) {
    let max = temperatur[0];
    let min = temperatur[0];

    for (let i = 0; i < temperatur.length; i++) {
        if (temperatur[i] > max) max = temperatur[i];
        else if (temperatur[i] < min) min = temperatur[i];
    }

    console.log(max, min);
};

hitungAmplitudoSuhu(temperatureSuhu);