
// We have a collection of numbers from 1 to 17
// and the user must guess which one is choosen
// in the program they must guess the number

const numberGuess = 7;

let trying;

while (trying != numberGuess) {
    trying = parseInt(prompt("Guess the number from 1 to 17: "));

    if (numberGuess == trying) {
        alert("Congratulations, you got the number right, it was " + numberGuess);
    } else {
        alert("Keep trying");
    }
}
