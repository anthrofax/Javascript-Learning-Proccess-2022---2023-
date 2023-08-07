const calcAverageHumanAge = function(ages) {
    const dogAgeInHumanYears = ages.map(function(curDog) {
        // 1. MY WAY
        // let humanAge = 0;
        // if (curDog <= 2) humanAge = 2 * curDog;
        // else if (curDog > 2) humanAge = 16 + curDog * 4;

        // 2. JONAS' WAY
        const humanAge = curDog <= 2 ? 2 * curDog : 16 + curDog * 4;

        return humanAge;
    });

    const adultDogs = dogAgeInHumanYears.filter((curDogAge) => curDogAge >= 18);

    // MY WAY
    // const totalAdultDogAges = adultDogs.reduce((acc, curDogAdultAge) => acc + curDogAdultAge) / adultDogs.length;

    // JONAS' WAY
    const totalAdultDogAges = adultDogs.reduce((acc, curDogAdultAge, i, entireArray) => acc + curDogAdultAge / entireArray.length, 0);

    return totalAdultDogAges;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));