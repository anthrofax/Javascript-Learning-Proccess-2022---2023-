const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        ["Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski"],
        ["Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// THE TASK

// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
for (const [loopIndex, player] of game.scored.entries()) {
    console.log(`Goal ${loopIndex + 1}: ${player}`);
}
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)\
for (const oddValues of Object.values(game.odds)) {
    if (oddValues == 1.33) var avgOdd = 0;
    avgOdd += oddValues;
    if (oddValues == 6.5) avgOdd /= Object.values(game.odds).length;
}
console.log(avgOdd);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names 😉
for (const [whoIsWinner, oddValue] of Object.entries(game.odds)) {
    // 1. Using If else statement
    // if (whoIsWinner == "x") console.log("Odd of draw: 3.25");
    // else console.log(`Odd of victory ${game[whoIsWinner]}: ${oddValue}`);

    // 2. Using Short Circuiting Operator
    whoIsWinner == "x" && console.log("Odd of draw: 3.25");
    whoIsWinner == "x" || console.log(`Odd of victory ${game[whoIsWinner]}: ${oddValue}`);
}

// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }
let playerScored = [];
for (let i = 0; i < game.scored.length; i++) {
    if (i == 2) continue;
    let goalsScored = 0;
    for (let j = 0; j < game.scored.length; j++) {
        if (game.scored[i] == game.scored[j]) goalsScored++;
    }
    playerScored.push(goalsScored);
    console.log(playerScored);
}

const scorers = {
    [game.scored[1]]: playerScored[1],
    [game.scored[3]]: playerScored[2],
    [game.scored[0]]: playerScored[0],
};
console.log(scorers);