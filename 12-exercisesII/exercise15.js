

let sum = 0;
let cont = 0;
let average = 0;
let num = 0;

do {
    num = parseInt(prompt("Enter a positive number:"));
    if (isNaN(num)) {
        num = 0;
    } else if (num >= 0){
        sum += num;
        cont++;
    }
    
} while(num >= 0);
average = sum / cont;
alert(`Sum: ${sum}
    Average: ${average}`);