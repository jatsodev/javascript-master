//  Arithmetic operators
let num1 = 12;
let num2 = 44;

let sum = num1 + num2;
let rest = num1 - num2;
let multi = num1 * num2;
let division = num1 / num2;
let remainder = num1 % num2; 
let power = num1 ** 2;

console.log("Sum: " + sum);
console.log("Rest: " + rest);
console.log("Multiplication: " + multi);
console.log("Division: " + division);
console.log("Remainder: " + remainder);
console.log("Power: " + power);
console.log("Number 1: " + num1 + " Number 2: " + num2);
//Assignment

let numbi = 17;

//numbi = 17 + 3;

// numbi -= 3;
// numbi *= 3;
// numbi /= 3;
numbi += 3;

console.log("Numbi: "+ numbi);

//Comparison

let num3 = 31;

console.log(num3 == "31");
console.log(num3 === "31"); //strict
console.log(num3 != "31");
console.log(num3 !== "31"); //strict
console.log(num3 > 55);
console.log(num3 < 55);
console.log(num3 >= 31);
console.log(num3 <= 30);

//Logicians

let isAdult = true;
let haveticket = true;

console.log(isAdult && haveticket);
console.log(isAdult || haveticket);

console.log(!isAdult);

//Chain

let message1 = "Hello";
let message2 = "How's it going?"

let total_message = message1 + " " + message2;

total_message += " Im Jatso";

console.log(total_message);
//Increment & decrement :D

let figure = 1200;

//figure = 1200 + 1;
//figure = figure + 1;

figure++;
figure++;
figure++;
figure++;
figure++;
figure++;
figure++;

figure--;
figure--;
figure--;
figure--;
figure--;

console.warn(figure);

