// Functions

// A function groups a series of instructions so that they can be used several times 

// It is a reusable grouping of a set of instructions

function greeting(name = "Amelia", food = "potato omelet"){
    console.log("Hi, grandmother " + name);
    console.log("How are you?");
    console.log("Can you give me the recipe for your " + food + "?");
    console.log("**********************");

    name = "x";

    return "Grandmother " + name + " greeted correctly";
}



let message = greeting("Maria", "Tacos");

alert(message);

greeting("Pepe", "Cemita");
greeting("Geno", "Ice cream");
greeting("Laura", "Mole");
greeting("Gloria", "Milanesas");

greeting();

/*for(let i = 0; i < 10 ; i++){
    greeting();
    greeting();
    greeting();
}*/

function operation(num1, num2){
    let results = {
        "sum": (num1 + num2),
        "rest": (num1 - num2),
        "multi": (num1 * num2),
        "div": (num1 / num2)
    };

    return results;
}

function byConsole(num1, num2){

    let results = operation(num1, num2);

    console.log("Sum: " + results.sum);
    console.log("Rest: " + results.rest);
    console.log("Multiplication: " + results.multi);
    console.log("Division: " + results.div);

    return true;
}


function byScreen(num1, num2){
    let results = operation(num1, num2);

    document.write("<h2>Calculator</h2>");
    document.write("<h2>Sum: " + results.sum + "</h2>");
    document.write("<h2>Rest: " + results.rest + "</h2>");
    document.write("<h2>Multiplication: " + results.multi + "</h2>");
    document.write("<h2>Division: " + results.div + "</h2>");
    document.write("<hr>");

    return true;
}

function calculator(num1, num2, show = true){
    if(show == false){
        byConsole(num1, num2);
    } else{
        byScreen(num1, num2);
    }

    return true;
}

calculator(7,9);
calculator(7, 12, true);

//parameters ...REST

function myFilms(movie1, movie2, ...rest_movies){
    console.log(movie1);
    console.log(movie2);
    console.log(rest_movies);
}

myFilms("Star Wars IV", "Jurassic Park", "Scary Movie", "Goodfather", "Terminator");

//SPREAD

let numbers = [1,2,3,4];
let myNumbers = [...numbers,5,6,7,8,9,10];
console.log(myNumbers);

let myFavoritMovies = ["Matrix", "Terminator"];

myFilms(...myFavoritMovies, "Toy Story", "Spiderman 2", "In time");