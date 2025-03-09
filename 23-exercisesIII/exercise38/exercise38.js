// Form that displays the information entered
//  on screen using a send button with validation

const form = document.querySelector("#form");
const boxInfo = document.querySelector(".info");

let name = document.querySelector("#name");
let lastName = document.querySelector("#lastName");
let age = document.querySelector("#age");

let infoName = document.querySelector("#infoName strong");
let infoLastName = document.querySelector("#infoLastName strong");
let infoAge = document.querySelector("#infoAge strong");

let errorName = document.querySelector("#errorName");
let errorLastName = document.querySelector("#errorLastName");
let errorAge = document.querySelector("#errorAge");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    //Validate Name
    if(name.value.trim() == null || name.value.trim().length == 0){
        let msg = "The name is not valid";

        alert(msg);
        errorName.textContent = msg;
        
        return false;
    }else{
        errorName.style.display = "none";
    }
    

    //Validate Last Name
    if(lastName.value.trim() == null || lastName.value.trim().length == 0){
        let msg = "The last name is not valid";

        alert(msg);
        errorLastName.textContent = msg;
        
        return false;
    }else{
        errorLastName.style.display = "none";
    }

    let myAge = parseInt(age.value);
    //Validate Age
    if(myAge == null || myAge <= 0 || isNaN(myAge)){
        let msg = "The age is not valid";

        alert(msg);
        errorAge.textContent = msg;
        
        return false;
    }else{
        errorAge.style.display = "none";
    }



    boxInfo.style.display = "block";
    infoName.textContent = name.value;
    infoLastName.textContent = lastName.value;
    infoAge.textContent = age.value;
})