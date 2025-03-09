// Form that displays the information entered
//  on screen using a send button

const form = document.querySelector("#form");
const boxInfo = document.querySelector(".info");

let name = document.querySelector("#name");
let lastName = document.querySelector("#lastName");
let age = document.querySelector("#age");

let infoName = document.querySelector("#infoName strong");
let infoLastName = document.querySelector("#infoLastName strong");
let infoAge = document.querySelector("#infoAge strong");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("Submitted form");

    boxInfo.style.display = "block";
    infoName.textContent = name.value;
    infoLastName.textContent = lastName.value;
    infoAge.textContent = age.value;
})