let msjPop = "Nice for the party";
let msjRock = "Let's break the bass";
let msjRap = "Try to follow me fella";

let musicGenre = prompt("What musical genre do you like? pop, rock or rap?")

switch (musicGenre) {
    case "pop":
        alert(msjPop);
        break;
    case "rock":
        alert(msjRock);
        break;
    case "rap":
        alert(msjRap);
        break;

    default:
        alert("No way!!!!")
        break;
}