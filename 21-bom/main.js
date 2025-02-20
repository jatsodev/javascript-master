//BOM - Browser Object Model


// alert("Hello world");
// prompt("What's your name?");
// confirm("Do you have pets");

//Window

console.log(window);
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth, window.outerHeight);
console.log(window.closed, window.document, window.navigator.userAgent);

// setInterval(() => {
//     console.log("Hi everyone");
// }, 1000);

console.log(window.scrollX, window.scrollY);

//Navigator

console.log(navigator);

// if(!navigator.onLine){
//     alert("You are offline");
// }else{
//     alert("You are online");
// }

//Location

console.log(location.href);
console.log(location.hostname);

// location.href = "https://pokemon.com";

// location.reload();

//History

// history.back();
// history.forward();
// history.go(1);
// history.length;


//Screen

console.log(screen.width, screen.height);

//Pop ups


let myWeb = window.open("https://pokemon.co.jp",
                        "Pokemon website",
                        "width=850, height=500, left=450, top=150"
);

// myWeb.close();