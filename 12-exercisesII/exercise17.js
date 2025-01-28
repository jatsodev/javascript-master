
// Show all the odd numbers between two numbers
// that the user gives us

let num1 = parseInt(prompt("Insert a positive number: ", 1));
let num2 = parseInt(prompt("Insert a positive number: ", 1));

while(num1 < num2){
    num1++;

    if(num1 % 2 != 0){
        console.log(`${num1} is odd`);
    }
}

