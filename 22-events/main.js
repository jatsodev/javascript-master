//Events

let happyButton = document.querySelector("#happy-button");

happyButton.addEventListener("click", (event) => {
    alert("HAPPY!!!!");
    console.log(event.clientX);
    // console.log(event);
});

//Double click

let doubleClick = document.querySelector("#double-click");
doubleClick.addEventListener("dblclick", () => {
    alert("You've clicked twice");
});

//MouseOver

let textArea = document.querySelector("#text-area");
textArea.addEventListener("mouseover", () => {
    console.log("You've passed over the text area :D");
});
textArea.addEventListener("mouseout", () => {
    console.warn("You've left the text area");
})
textArea.addEventListener("mousemove", () => {
    console.error("You're moving inside the text area");
})

//Keyboard event

let fieldText = document.querySelector("#field-text");
fieldText.addEventListener("keydown", (event) => {
    console.log("You've pressed the key: " + event.key);
});
fieldText.addEventListener("keyup", (event) =>{
    console.warn("You've released the key: " + event.key);
});
fieldText.addEventListener("keypress", (event) => {
    console.error("You hold down the key: " + event.key);
});

//Form events

let superForm = document.querySelector("#super-form");

superForm.addEventListener("submit",  (event) => {
    event.preventDefault();

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let gender = document.querySelector("#gender").value;

    alert(name);
    alert(email);
    alert(gender);
});

let inputName = document.querySelector("#name");

inputName.addEventListener("input", () =>{
    console.log("The user has written " + inputName.value);
});

let selectGender = document.querySelector("#gender");

selectGender.addEventListener("change", function(){
    console.warn("You've changed to " + this.value);
});

let emailField = document.querySelector("#email");

emailField.addEventListener("focus", () => {
    console.log("You just entered the email field");

    emailField.style.border = "2px solid blue";
    emailField.style.outline = "none";
    emailField.style.borderRadius = "5px";
});

emailField.addEventListener("blur", () => {
    console.warn("You've left focus!!!");

    emailField.style.border = "2px solid gray";
    emailField.style.borderRadius = "30px";
});

//Document and window events

document.addEventListener("DOMContentLoaded", () => {
    //Here I code all

    console.log("All the DOM is loaded");
});


window.addEventListener("load", () => {
    console.warn("The entire website is loaded, including the resources");
});

window.addEventListener("resize", () => {
    console.error("Resized window " + window.innerWidth + " "+window.innerHeight);
});

window.addEventListener("scroll", () => {
    console.log("You are at the pixel " + Math.round(window.scrollY) + " of the web scroll");
});

//Clipboard event

let clipboard1 = document.querySelector("#clipboard");

clipboard1.addEventListener("copy", (event) => {
    alert("Do not copy, it is prohibited");
    // navigator.clipboard.writeText("");
    event.clipboardData.setData("text/plain", "");
    event.preventDefault();
});

clipboard1.addEventListener("paste", () => {
    alert("You have pasted a text in the input");
});

clipboard1.addEventListener("cut", () => {
    alert("You have cut the text");
});

clipboard1.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    console.warn("The user has opened the context menu");
})


//Stop listening to events

let happyButton2 = document.querySelector("#happy-button2");

function alert2(){
    alert("HAPPY2!!!!");
}

happyButton2.addEventListener("click", alert2);

setTimeout(() => {
    happyButton2.removeEventListener("click", alert2);
    alert("You can no longer use the button");
}, 10000);

//Events propagation

let parentBox = document.querySelector("#parent-box");
let childButton = document.querySelector("#child-button");

parentBox.addEventListener("click", () => {
    alert("You've clicked the parent element");
});

childButton.addEventListener("click", (event) => {
    event.stopPropagation();
    alert("You've clicked the child element");
});