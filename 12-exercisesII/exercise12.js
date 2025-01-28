
let num1 = parseInt(prompt("Enter a number",0));
let num2 = parseInt(prompt("Enter a number",0));

while (num1 <= 0 || num2 <=0 ||isNaN(num1) || isNaN(num2)){
    num1 = parseInt(prompt("Enter a number",0));
    num2 = parseInt(prompt("Enter a number",0));
}
    
if (num1 === num2 ) {
    alert(`${num1} is the equal to ${num2}`);
}else if (num1 > num2) {
    alert(`${num1} is the greater than ${num2}`);
}else if (num2 > num1) {
    alert(`${num2} is the greater than ${num1}`);
}else{
    alert("Only positive integers");
}


