// A Promise is an object that represents a future event.
// It is useful for handling tasks that take time, such as fetching API data, loading images, 
// or retrieving information from an external endpoint without blocking the application's flow.
// The code continues running while waiting for the response, which is processed once received.

// A Promise has three states:
// - Pending: The operation is still in progress.
// - Fulfilled: The operation completed successfully.
// - Rejected: The operation failed.


// Fetch is a function that returns a Promise.  
// Custom promises can also be created for handling asynchronous operations.  

let myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        let ok = true;

        if(ok){
            let myObject = {
                name: "Star Wars",
                category: "Science Fiction", 
                year: 1989
            };
            resolve(myObject);//It's called when everything goes well
        }else{
            reject("No se ha cumplido la promesa :(");//It is called when something goes wrong
        }
    }, 6500);

    
});

console.log(myPromise);

// Promises are handled using `then` and `catch`.  
// - `then` executes if the promise is fulfilled.  
// - `catch` executes if the promise is rejected or an error occurs.  

myPromise
    .then(result => {
        console.warn(result);
    })
    .catch(error => {
        console.error("Error: ", error);
    });


//Promise chaining
function servePizza(){
    return new Promise(resolve => {
        setTimeout(() => resolve("Pizza served!!!"), 15000);
    });
}

function serveCemita(){

    return new Promise(resolve => {
        setTimeout(() => resolve("Cemita served!!!"), 8000);
    });
}

function serveTaco(){

    return new Promise( resolve => {
        setTimeout(() => resolve("Taco served!!!"), 12000);
    });
}

// servePizza()
//             .then(result1 => {
//                 console.log(result1);

//                 return serveCemita();
//             })
//             .then(result2 => {
//                 console.log(result2);

//                 return serveTaco();
//             })
//             .then(result3 => {
//                 console.log(result3);

//             })
//             .catch(error => {
//                 console.log("Error", error);
//             });

            //Promises are useful for handling code that takes time to execute.  

//Async and await
//Cualquier cosa que ponga a esperar va a hacer caso y va a esperar hasta que se consiga el resultado

async function serveFood(){
    try {
        let result1 = await servePizza();

        if (result1 != "pizzeta") {
            throw new Error("The pizza didn't come out right, it's not what the customer ordered.");
        }else{
            console.warn(result1);
        }


        let result2 = await serveCemita();
        console.log(result2);

        let result3 = await serveTaco();
        console.log(result3);
    } catch (error) {
        console.log("Error", error)
    }
}

serveFood();


alert("Hi");
alert("I'm");
alert("Jatso");