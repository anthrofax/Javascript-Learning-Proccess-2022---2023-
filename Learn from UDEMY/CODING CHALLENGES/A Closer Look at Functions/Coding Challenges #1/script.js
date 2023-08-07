var answers = [5, 2, 3];
// var data2 = [1, 5, 3, 9, 6, 1];

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const reply = prompt(`${this.question}\n${this.options[0]}\n${this.options[1]}\n${this.options[2]}\n${this.options[3]}\n(Write option number)`);

        if (reply >= 0 && reply <= 3) this.answers[reply]++;
        else alert("Wrong Input!");

        this.displayResults();
    },

    displayResults(type = "array") {
        if (type === "string") console.log(`Poll results are ${this.answers.join()}`);
        else if (type === "array") console.log(this.answers);
    },
};

document.querySelector("button").addEventListener("click", poll.registerNewAnswer.bind(poll));

// BONUS
// 1. MY WAY
// poll.answers = data1;
console.log("BONUS");
poll.displayResults.call(this, "array");
// poll.displayResults("string");
// poll.answers = data2;
// poll.displayResults("array");
// poll.displayResults("string");

// 2. JONAS' WAY
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "array");
poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [5, 2, 3] }, "array");