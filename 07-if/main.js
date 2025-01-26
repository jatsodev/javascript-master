
//example one
let raining = true;

if(raining == true){
    console.log("I take my umbrella, it's raining dogs and cats.")
}else{
    console.log("I leave the umbrella");
}

//example two

let wantOnions = false;

//!
//!=
if(wantOnions === true){
    console.log("Your hamburguer doesn't haver onions");
}else{
    console.log("Your hamburger has onions");
}

//example 3

let name = "Yoyo Uribe";
let age = 80;

if(age >= 18){
    console.log(name + "is " + age + " years old and is adult");

    if(age <= 20){
        console.log("Teenager");
    }else if(age >= 70){
        console.log("Old man");
    }else{
        console.log("Adult");
    }
}else{
    console.log(`${name} is ${age} years old and isn't adult`);
}

//example 4

let goodWeather = false;

if(!goodWeather){
    console.log("Let's go to the park");
}

//example 5

let year = 2017;

if(year >= 2000 && year<= 2030){
    console.log("We are in the modern era");
}else if(year > 2030){
    console.log("We are in the post modern era");
}else{
    console.log("We are in the ancient era");
}

//example 6

if(year == 2007 || year == 2017 || year == 2027 || year == 2037){
    console.log("The year ends in 7!!!");
}else{
    console.log("Unknown year");
}