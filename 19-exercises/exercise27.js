// Program that classifies movie characters

const characters = [
    "V:Joker",
    "H:Batman",
    "V:Green Goblin",
    "H:Spiderman",
    "V:Voldemort",
    "H:Harry Potter",
    "H:Frodo",
    "V:Sauron",
];

let heroes = characters.filter(character => character.startsWith("H:"));
let villains = characters.filter(character => character.startsWith("V:"));

console.log("Heroes:");

heroes.forEach(heroe => {
console.log(heroe.split(":")[1]);
});

console.log("-------------");

villains.forEach(villain => {
    console.log(villain.slice(2));
});