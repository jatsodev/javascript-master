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

//Multidimensional arrays
let categories = ["Action", "Sports", "Adventures", "Fight", "Racing"];
let games = ["Call of duty", "FIFA", "Pokemon", "Tekken", "Forza"];

let videogames = [categories, games];

console.log(videogames);

console.log(videogames[1][3]);
console.log(videogames[0][2]);

//Two-dimensionals arrays

let table = [
    ["Product", "Quantity", "Price"],
    ["PC",          10,         10000],
    ["Smartphones", 20,         10000],
    ["Printers",    15,         5000]
];

console.table(table);

console.log(table[2][0], table[2][2]);

table.forEach(row => {
    console.log(row);
});

table.forEach(row => {
    row.forEach(element => {
        console.log(element);
    });
});


document.write("<table border = 1>");

table.forEach((row, index) => {
    document.write("<tr>");
    row.forEach(element => {

        if(index === 0){
            document.write("<th>" + element + "</th>");
        }else{
            document.write("<td>" + element + "</td>");
        }
    });
    document.write("</tr>");
});

document.write("</table>");

//three-dimensional arrays
console.log("***********************")

let restaurantMenu = [
    ["Food", "Quantity", "Price", "Size"],
    ["Pizza", 2, [8, 10,15], ["Small", "Medium", "Large"]],
    ["Hamburger", 5, [2, 5, 7], ["Small", "Medium", "Large"]],
    ["Paella", 3, [14, 18, 25], ["Small", "Medium", "Large"]]
];

for(let menu of restaurantMenu){
    console.log("--------------");

    console.log(menu);

    if(Array.isArray(menu[2]) && Array.isArray(menu[3])){
        console.log(menu[0]);
        for(let index in menu[2]){
            console.log(menu[2][index], menu[3][index], "euros");
        }
    }

    // for(element of menu){

    //     if(Array.isArray(element)){
    //         for(subElement of element){
    //             console.log(subElement);
    //         }
    //     }else{
    //         console.log(element);
    //     }
        
    // }
}