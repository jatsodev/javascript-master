// Program that shows how many keys the user has pressed inside the text box

let counter = document.querySelector("#counter");
let boxKeyPressed = document.querySelector("#keyPressed");

let realKeyPressed = 0;

counter.addEventListener("input", () => {

    // let text = counter.value.length;
    realKeyPressed++;

    boxKeyPressed.textContent = `Keys pressed: ${realKeyPressed}`;
});