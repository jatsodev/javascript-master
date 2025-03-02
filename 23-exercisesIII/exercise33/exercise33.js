// Button that counts clicks, shows when the click 
// limit has been reached and restarts the counter


let counter = 0;

let number = document.querySelector("#numberClicks");
let button = document.querySelector("#countingClicks");

button.addEventListener("click", () => {
    counter++;
    console.log(counter);

    if(counter === 17){
        number.textContent = "LIMITE REACHED!!!!!";
        counter = 0;
    }else{
        number.textContent = counter + " clicks";
    }
});