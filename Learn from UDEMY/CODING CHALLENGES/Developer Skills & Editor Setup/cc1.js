let tempOne = [17, 21, 23];
let tempTwo = [12, 5, -5, 0, 4];

let printForecast = function(a, b) {
    for (let i = 0; i <= 1; i++) {
        console.log(`Test on data ${i + 1}`);
        if (i == 0) {
            a.forEach((tempRepresentation, b) => {
                console.log(`${tempRepresentation} C in day ${b + 1}`);
            });
        } else if (i == 1) {
            b.forEach((tempRepresentation, b) => {
                console.log(`${tempRepresentation} C in day ${b + 1}`);
            });
        }
    }
};

printForecast(tempOne, tempTwo);