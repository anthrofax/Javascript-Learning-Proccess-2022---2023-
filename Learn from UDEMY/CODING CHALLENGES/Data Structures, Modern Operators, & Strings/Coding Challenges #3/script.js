const gameEvents = new Map([
    [17, "⚽ GOAL"],
    [36, "🔁 Substitution"],
    [47, "⚽ GOAL"],
    [61, "🔁 Substitution"],
    [64, "🔶 Yellow card"],
    [69, "🔴 Red card"],
    [70, "🔁 Substitution"],
    [72, "🔁 Substitution"],
    [76, "⚽ GOAL"],
    [80, "⚽ GOAL"],
    [92, "🔶 Yellow card"],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set([...gameEvents.values()])];
console.log(events);
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
console.log("Before the event deleted : ", gameEvents);
gameEvents.delete(64);

const gameArray = [...gameEvents];
console.log("After the event deleted : ", gameArray);
// 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
let gameKeys = [...gameEvents.keys()].pop();
console.log(`An event happened, on average, every ${gameKeys / gameEvents.size} minutes`);

// let time = 0;
// let prosesPencarian = 0;
// let penandaProsesPencarian = 0;

// Cara 1 (Men-skip pencarian yang sudah pernah di eksekusi)
// while (time <= 90) {
//     while (prosesPencarian < gameArray.length) {
//         if (time >= gameArray[prosesPencarian][0]) {
//             console.log(`On minute ${time}, ${gameArray[prosesPencarian][1]} happened`);
//             prosesPencarian += 1;
//             penandaProsesPencarian = prosesPencarian;
//             break;
//         }
//         prosesPencarian++;
//     }
//     prosesPencarian = penandaProsesPencarian;
//     time += 9;
// }

// Cara 2
// let eventsHappened = [];
// while (time <= 90) {
//     if (time < gameArray[0][0]) {
//         console.log(`On minute ${time}, There isn't event yet.`);
//     } else {
//         for (let i = 0; i < gameArray.length; i++) {
//             if (time >= gameArray[i][0] && time < gameArray[i + 1][0]) {
//                 for (const timeEvents of[...gameEvents.keys()]) {
//                     if (i !== 0 && timeEvents <= time && timeEvents > time - 9) {
//                         eventsHappened.push(gameEvents.get(timeEvents));
//                     } else if (i == 0 && timeEvents <= time) {
//                         eventsHappened.push(gameEvents.get(timeEvents));
//                     }
//                 }

//                 if (eventsHappened.length == 0) {
//                     console.log(`On minute ${time}, Still the same as before...`);
//                 } else {
//                     console.log(`On minute ${time}, ${eventsHappened.join()} happened`);
//                 }
//                 eventsHappened = [];
//                 break;
//             }
//         }
//     }
//     time += 9;
// }

// 4. Loop over 'gameEvents' and log each element to the console, marking
//    whether it's in the first half or second half (after 45 min) of the game, like this:
//    [FIRST HALF] 17: ⚽ GOAL
let str = "";
for (const [key, events] of gameEvents) {
    // 1. Menggunakan IF ELSE Statement
    // if (key < 45) str = "FIRST";
    // else str = "SECOND";

    // 2. Menggunakan Ternary Operator
    str = key < 45 ? "FIRST" : "SECOND";
    console.log(`[${str} HALF] ${key} : ${events}`);
}