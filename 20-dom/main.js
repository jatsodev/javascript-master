// window.addEventListener("DOMContentLoaded", () =>{
//     let box = document.getElementById("box");

//     console.log(box);
// });

//DOM (Document Object Model)

// getElementById Select elemnts by their Id
let box = document.getElementById("box");


//Modify characteristics of a selected item


box.innerHTML = "<h2>Hi, I'm Jatso</h2>";

console.log(box.innerText);

// box.style.background = "lightblue";
// box.style.maxWidth = "50%";
// box.style.margin = "0 auto";
// box.style.padding = "35px";
// box.style.textAlign = "center";
// box.style.fontFamily = "Arial";

box.classList.add("little-boxy");
box.classList.add("box");
box.classList.add("box2");


function changeColor(color, radius){
    box.style.background = color;
    box.style.borderRadius = radius;
}

//Console => changeColor("pink", "100px") *0* MAGIC!!!

// box.className = "little-boxy box box2"

console.log(box.className);


