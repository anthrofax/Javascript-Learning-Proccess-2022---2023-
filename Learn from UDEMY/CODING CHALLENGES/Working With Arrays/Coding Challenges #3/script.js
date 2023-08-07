const calcAverageHumanAge = (ages) =>
    ages
    .map((curDog) => (curDog <= 2 ? 2 * curDog : 16 + curDog * 4))
    .filter((curDogAge) => curDogAge >= 18)
    .reduce((acc, curDogAdultAge, i, entireArray) => acc + curDogAdultAge / entireArray.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));