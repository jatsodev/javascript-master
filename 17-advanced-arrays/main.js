let frameworks = ["Angular", "React", "Vue", "Astro", "NodeJS", "Svelte", "SolidJS", "Qwik", "ExpressJS"];

//Manual access

console.log(frameworks[0]);
console.log(frameworks[1]);
console.log(frameworks[2]);
console.log(frameworks[3]);
console.log(frameworks[4]);
console.log(frameworks[5]);

//Loop access

for(let i = 0; i < frameworks.length; i++){
    console.log(frameworks[i]);
}

//Display on screen 
document.write("<h1>List of Frameworks</h1>");
document.write("<ul>");
for(let i = 0; i < frameworks.length; i++){
    document.write("<li>"+frameworks[i]+"</li>");
}
document.write("</ul>");

//Loops to traverse arrays 

console.log("*************************");

let pokemons = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle", "Pidgey", "Psyduck", "Growlithe", "Machop", "Hitmonchan"];
console.log("List of Pokemons:");

//Loop for
for(let cont = 0; cont < pokemons.length; cont++){
    //console.log(pokemons[cont]);
}

//Loop for of
for(let pokemon of pokemons){
    //console.log(pokemon);
}

//Loop for in
for(let index in pokemons){
    //console.log(pokemons[index], index);
}

//Loop forEach
pokemons.forEach(pokemon =>{
    //console.log(pokemon);
});

//Loop map
let newPokemons = pokemons.map(pokemon => {
    console.log(pokemon);

    return pokemon + " Shiny";
});

console.log(newPokemons);