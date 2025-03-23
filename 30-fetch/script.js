// FETCH is used to make AJAX requests to external services (REST API or any backend).
// It allows sending requests to servers and receiving responses.
// It can retrieve data from a URL as JSON or HTML and send data to another URL, connecting a frontend application to an online service (backend).

// Endpoint: A URL that stores or returns data.

//Fetching data from a backend asynchronously
let idUser = 2;

fetch("https://reqres.in/api/users/" + idUser) //The request is made here
    .then(response => response.json()) //We wait for the response and convert it to a json when it is loaded
    .then(user => { //I collect the data with another then
        console.log(user.data);
        showUser(user.data);
    })
    .catch(error => {
        console.error("Error al pedir datos del servidor", error);
    });

    function showUser(user){
        let box = document.querySelector("#user");

        box.innerHTML = `
            <h2>${user.first_name} ${user.last_name}</h2>
            <img src="${user.avatar}" />
        `;
    }

//Save data
const userToSave = {
    name: "Jatso",
    job: "Video Game Developer"
};

fetch("https://reqres.in/api/users", {
    method: "POST", //http method to use, POST to save information
    headers: {  //indicate in what format the content is sent
        "Content-Type":"application/json"
    }, 
    body: JSON.stringify(userToSave) //the data sent, jsonstring format
})//Ready to send the information and wait for the server's response
.then(response => response.json())//a return, I collect the response and convert it into a json
.then(data => {//access data
    console.log(data);
})
.catch(error => {//catch errors
    console.log(error);
});

//Sintaxis de promesas con async y await

async function getUsers(){ //asynchronous function
    try{
        let response = await fetch("https://reqres.in/api/users?page=2"); //wait for a result
        let data = await response.json();

        data.data.forEach(user => {
            console.log(user);
        });

    }catch(error){
        console.log("Error al conseguir la info: ", error);
    }
}

getUsers();