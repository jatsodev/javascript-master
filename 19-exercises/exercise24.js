
// Program to guess a number, contains an array of 10 numbers, from 1 to 100.

// let nums = new Array(10);
let nums = [23, 12, 54, 63, 25, 67, 86, 73, 16, 93];
// let nums2 = Array.from({length: 10}, () => Math.floor(Math.random()*100)+1); 

let userNum = prompt("Enter a number from 1 to 100:", 1);

if(nums.includes(Number(userNum))){
    alert("You got it right");
}else{
    alert("Try it again.");
}
