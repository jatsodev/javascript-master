//anonymous functions
//It is a function "without name"

const greeting = function(name = ""){
    console.log("Hello nana, "+ name +" how are you?");
};

greeting();

//Callback's functions
//They are passed as a parameter to another function so that
//the other function executes them.

let times = 0;
setTimeout(function(){
    times++;
    console.log("Timeout has been executed " + times + "times.")
},1000);

// setInterval(function(){
//     times++;
//     console.log("Timeout has been executed " + times + "times.")
// },1000);

//setInterval(greeting, 1000); //callback 
//setInterval(greeting("Amelia"), 1000);//no callback

/*setInterval(function(){//solution for a function with a parameter
    greeting("Amelia");
}, 1000);*/

// Advanced Callback features

function restme(n1, n2, show, multByThree){
    let rest = n1 - n2;

    show(rest);
    multByThree(rest);

    return rest;
}

restme(20, 5, function(result){
    console.log(result);
}, 
function(result){
    console.log(result*3);
});

// variable scope

let web = "cemita.com";

function showWeb(){
    console.warn(web);
    let name = "Jatso";
    console.log(name);
}

// console.log(name); //no scope
console.warn(web);
showWeb();


//global
if(true){
    var sport = "my favorite sport is karate"; 
    console.log(sport);

}

console.log(sport);

//error
// if(true){
//     let sport = "my favorite sport is karate"; 
//     console.log(sport);

// }

// console.log(sport);

//HOISTING

//car = "jeep";

console.log(car);

var car = "ferrari";

console.log(car);

//console.log(moto);
let moto = "ducati";

//ARROW FUNCTIONS

let newCourse = hours => {
    console.log("This is a new python course " + hours + " hours")
};

newCourse(99);

//callback
setTimeout(() => {
    console.log("I'm usig a arrow function");
}, 2000);