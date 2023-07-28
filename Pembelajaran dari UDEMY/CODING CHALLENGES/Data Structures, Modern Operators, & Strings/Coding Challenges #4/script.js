document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const textArea = document.querySelector("textarea");
const button = document.querySelector("button");

button.addEventListener("click", function() {
    textAreaArray = textArea.value.split("\n");
    const correctVariableNames = [];
    let j = 1;

    for (const variable of textAreaArray) {
        const word = variable.split("_");
        let i = 0;
        const perWord = [];

        for (const correctWord of word) {
            if (i == 0) {
                perWord.push(correctWord.replace(correctWord[0], correctWord[0].toLowerCase()).trim());
            } else {
                perWord.push(correctWord.replace(correctWord, correctWord[0].toUpperCase() + correctWord.slice(1).toLowerCase()));
            }

            i++;
        }

        correctVariableNames.push(perWord.join("") + " " + "✅".repeat(j));

        console.log(correctVariableNames[j - 1]);
        j++;
    }
});