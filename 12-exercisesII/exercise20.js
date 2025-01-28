

// Based on the number that the user gives us
// indicate if it is even or odd

let num;

while (isNaN(num)) {
    num = parseInt(prompt("Enter a number to validate if it is even or odd: "));
}


if (num % 2 === 0) {
    alert("EVEN NUMBER");
} else {
    alert("ODD NUMBER");
}