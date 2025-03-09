// Program that moves the window to different positions on the screen

const width = window.screen.width;
const height = window.screen.height;

const btnWindow = document.querySelector("#window");
const upLeft = document.querySelector("#upLeft");
const upRight = document.querySelector("#upRight");
const downLeft = document.querySelector("#downLeft");
const downRight = document.querySelector("#downRight");

let myWindow = null;

btnWindow.addEventListener("click", () => {

    myWindow = window.open("", "New Window", "width=400, height=400");

});

upLeft.addEventListener("click", () => {

    if(myWindow){
        myWindow.moveTo(0,0);
    }
    

});

upRight.addEventListener("click", () => {

    if(myWindow){
        myWindow.moveTo(width - myWindow.outerWidth, 0);
    }

});

downLeft.addEventListener("click", () => {

    if(myWindow){
            myWindow.moveTo(0,height - myWindow.outerHeight);
        }

});

downRight.addEventListener("click", () => {

    if(myWindow){
        myWindow.moveTo(width - myWindow.outerWidth,height - myWindow.outerHeight);
    }

});

