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
setInterval(function(){
    times++;
    console.log("Timeout has been executed " + times + "times.")
},1000);

//setInterval(greeting, 1000); //callback 
//setInterval(greeting("Amelia"), 1000);//no callback

/*setInterval(function(){//solution for a function with a parameter
    greeting("Amelia");
}, 1000);*/