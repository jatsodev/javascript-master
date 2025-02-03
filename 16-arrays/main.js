//arrays 

let name = "Jatso";

let names = ["Jatso", "Yoyo", "Looky", "Cronos", "Laika"];

let films = new Array("Iron Man", "Spiderman", "Mama mia");

console.log(names);
console.log(names.length);

console.log(films);
console.log(films.length);

//Access elements
console.log(names[3]);
console.log(names[0]);

//Modify array elements
names[3] = "Zozo";
names[0] = "Jatsodev";

console.log(names);

//Exercise

let element = parseInt(prompt("What user do you want from the array?",0));

if(element >= names.length){
    alert("Upps!!! That specific user does not exist, choose another");
}else{
    alert("Good!!! The selected user is ".concat(names[element]));
}