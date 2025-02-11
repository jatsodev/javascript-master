
//Function that takes a number and returns its factorial

let factorial = (num) => { //function in a variable

    if(num <= 1){
        return 1;
    }

    let factorial = 1;

    for(let i = 2; i <= num; i++){
        factorial *= i;
    }

    return factorial;

}

console.log(
    factorial(
        Number(prompt("enter a number and I will tell you its factorial: ", 0))
    )
);