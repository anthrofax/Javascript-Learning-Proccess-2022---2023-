// TEST 1

// DATA 1
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markBmi = markWeight / markHeight ** 2;
const johnBmi = johnWeight / (johnHeight * johnHeight);
markHigherBMI = markBmi > johnBmi;

console.log(markBmi, johnBmi, markHigherBMI);

// DATA 2
const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

const mark2Bmi = markWeight2 / markHeight2 ** 2;
const john2Bmi = johnWeight2 / (johnHeight2 * johnHeight2);

const johnHigherBMI = mark2Bmi > john2Bmi;

console.log(mark2Bmi, john2Bmi, johnHigherBMI);

// TEST 2

// DATA 1
if (markBmi > johnBmi) {
    console.log(`Mark\'s BMI (${markBmi}) is higher than John\'s (${johnBmi})`);
} else {
    console.log(`John\'s BMI (${johnBmi}) is higher than Mark\'s (${markBmi})`);
}

// DATA 2
if (mark2Bmi > john2Bmi) {
    console.log(`Mark\'s BMI (${mark2Bmi}) is higher than John\'s (${john2Bmi})`);
} else {
    console.log(`John\'s BMI (${john2Bmi}) is higher than Mark\'s (${mark2Bmi})`);
}