// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property.
// Do not create a new array, simply loop over the array.
//  Formula:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

dogs.forEach((dog) => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) 🤓
console.log(dogs);

const dogsEatAmountChecker = function (dog) {
  let str = "";
  if (dog.curFood < dog.recommendedFood * 0.9) str = "Owner's dog is eating too little, because it ate less than its recommended portion";
  else if (dog.curFood > dog.recommendedFood * 1.1) str = "Owner's dog is eating too much, because it ate more than its recommended portion";
  else str = "Owner's dog eats in an okay amount, because it ate more than 90% of recommended portion and less than 110% of recommended portion";

  console.log(str);
};

const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
dogs.forEach((dog) => dogsEatAmountChecker(dog));

// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').
console.log(dogs);
const ownersEatTooMuch = dogs.filter((dog) => dog.curFood > dog.recommendedFood * 1.1).flatMap((dogEatTooMuch) => dogEatTooMuch.owners);
const ownersEatTooLittle = dogs.filter((dog) => dog.curFood < dog.recommendedFood * 0.9).flatMap((dogEatTooLittle) => dogEatTooLittle.owners);

console.log(ownersEatTooLittle, ownersEatTooMuch);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(ownersEatTooLittle.join(" and ") + "'s dogs eat too little");
console.log(ownersEatTooMuch.join(" and ") + "'s dogs eat too much");

// 5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)
console.log(dogs.some((dog) => dog.curFood == dog.recommendedFood));

// 6. Log to the console whether there is any dog eating an okay amount of food (just true or false)
console.log(dogs.some((dog) => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1));

// 7. Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)
const dogEatsWithOkayAmount = dogs.filter((dog) => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1);
console.log(dogEatsWithOkayAmount);

// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects 😉)
const dogs2 = [...dogs];
dogs2.sort((curDog, nextDog) => curDog.recommendedFood - nextDog.recommendedFood);
console.log(dogs2);
