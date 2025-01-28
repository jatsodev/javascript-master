
// Calculator

// Requests two numbers and shows the result adding, 
// subtracting, multiplying and dividing those numbers.
// If a number is entered incorrectly, it will requested again.

let num1;
let num2;

while ((isNaN(num1) || isNaN(num2)) || num2 <= 0 || num1 <= 0){
    num1 = parseInt(prompt("Enter a number: "));
    num2 = parseInt(prompt("Enter a number: ")); 
}

let result = `
${num1} + ${num2} = ${num1 + num2}
${num1} - ${num2} = ${num1 - num2}
${num1} * ${num2} = ${num1 * num2}
${num1} / ${num2} = ${num1 / num2}`;

alert(result);
// document.write(result);