
// Program that shows the multiplication table of the number that 
// ther user chooses 

let num = parseInt(prompt("What number will the multiplicatioin table be?", 1));

let completeResult = "Multiplication table of " + num;

for(let i = 0; i <= 10; i++){
    let multiplication = i * num;

    completeResult += "\n" + i + "X" + num + "=" + multiplication; 
}

console.log(completeResult);
alert(completeResult);