//Program that simulates a traffic light,
//where the user will change the color of
//the lights with a click

let button = document.querySelector("#btnTraficLight");
let lights = document.querySelectorAll(".light");
let index = 0;

button.addEventListener("click", () => {
    //Remove active lights
    lights.forEach(light => light.classList.remove("active"));

    //Turn on a light
    lights[index].classList.add("active");

    //Change the index for the next light
    index++;
    if(index > 2){
        index = 0;
    }
});