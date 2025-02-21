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
