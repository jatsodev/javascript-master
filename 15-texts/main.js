//length

let name = "Jatso";

console.log(name.length);

//conversion to text

let num = 123465;
console.log(typeof num.toString());

//convert text to uppercase

let web = "cemita.com";

let webUpp = web.toUpperCase();

console.log(webUpp);

//convert text to lowercase

let meal = "PIZZA NAPOLITANA";

console.log(meal.toLowerCase());

//get a specific letter

let phrase = "The new laptop is comming";

console.log(phrase.charAt(10));

//check if one string has another-
let slogan = "The best way to improve is by practicing"

if(slogan.includes("improve")){
    console.log("The word IMPROVE does exist in the slogan");
}else{
    console.log("That word does not exist");
}

//Find the position of a word
let msg = "You are learning JavaScript very well";

console.log(msg.indexOf("JavaScript"));
console.log(msg.charAt(17));

//Extract part of a text

let course = "Master in JavaScript";
console.log(course.slice(10,14));
console.log(course.slice(10));

//replace part of a text
// .replace   replace an occurence of a word
// .replaceAll   replace all ocurrences of a word

let movie = "The Good, the Bad and the Ugly, Good movie";
console.log(
    movie.replaceAll("Good", "Brave")
);

// trim or remove blank spaces
let email = "           cemita@jatso.com                ";
console.log(
    email.trim()
);

//Split chain into parts

let shoppingList = "eggs,hamburgers,bananas,lettuce,tomato,yogurt";

let listArray = shoppingList.split(",");

console.log(listArray);

//Extract part of a text

let courseTwo = "React Master";

console.log(courseTwo.substring(0,6));

//Concatenate or join text strings

let city = "Mercia";
let country = "Spain";

let finalPhrase = "My city is " + city + "and my country is " + country ;

finalPhrase = `My city is ${city} and it is in ${country}`;

finalPhrase = "".concat("My city is ", city, " and it is in ", country);

console.log(finalPhrase);

//Check if it starts with a specific word

let phraseTwo = "Welcome to my new programming course";

console.log(
    phraseTwo.startsWith("Welcome")
);

//Check if it ends with a specific word

let phraseThree = "Welcome to my new programming course";

console.log(
    phraseThree.endsWith("course")
);

//Repeat words

let message = "Javascript rocks!!!! \n";

console.log(
    message.repeat(10)
);

//Search text in a string

let myString = "Have you ever seen an UFO?... AN UFO?"

console.log(
    // myString.search("ever")
    // myString.match("ever")
    myString.match(/UFO/g)
);
