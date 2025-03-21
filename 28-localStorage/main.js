//LocalStorage

//Check availability

if (typeof(Storage) !== "undefined") {

    console.log("LocalStorage available!!!!");

}else{
    console.log("LocalStorage not available!!!!");
}

//Save data
localStorage.setItem("meal", "pizza");
localStorage.setItem("drink", "cola");

//Obtain data
console.log(localStorage.getItem("meal"));
console.log(localStorage.getItem("drink"));

document.querySelector("#meal").textContent = localStorage.getItem("meal");
document.querySelector("#drink").textContent = localStorage.getItem("drink");

//Save object

let animal = {
    species: "Feline",
    name: "Tita", 
    color: "White"
};

localStorage.setItem("animal", JSON.stringify(animal));

//Get back object

let animalJS = JSON.parse(localStorage.getItem("animal"));

console.log(animalJS);

//Remove items

localStorage.removeItem("animal");

//Empty Storage

document.querySelector("#empty").addEventListener("click", () => {
    localStorage.clear();
});