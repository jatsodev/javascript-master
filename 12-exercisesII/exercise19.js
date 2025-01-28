
// Shows all the divisor numbers that is entered at a prompt

let num = parseInt(prompt("Enter a number: ", 1));
let list = "The divisors of " + num + " are: ";

for(let i = 1; i <= num; i++){
    if(num % i == 0){
        list += i + ", "
    }
}

alert(list);