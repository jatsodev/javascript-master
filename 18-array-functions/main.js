//Empty array
let emptyArray = new Array(4);
console.log(emptyArray);

//Array

let gadgets = ["pc", "Laptop", "Cellphone", "Tablet"];
console.log(gadgets);

//Length of the array

console.log(gadgets.length);

//Add element
gadgets.push("ps5");
gadgets.push("Camera");

console.log(gadgets);

//Delete element

gadgets.pop();
gadgets.pop();
gadgets.pop();

console.log(gadgets);

//Add elements to the beginning

gadgets.unshift("ps4");
gadgets.unshift("psp");

console.log(gadgets);

//Add elements to the end

gadgets.shift();
gadgets.shift();

console.log(gadgets);

//Search returns index

let index = gadgets.indexOf("Laptop");

console.log(index);

//Search to see if element exists

let exist = gadgets.includes("pc");

console.log(exist);

//Filter arrays

gadgets.push("ps4");
gadgets.push("ps5");
gadgets.push("robot");
gadgets.push("server");
gadgets.push("smartphone");

let gadgetsWithA = gadgets.filter(gadget => gadget.includes("a"));

console.log(gadgetsWithA);

//Reduce

// let reduce = gadgets.reduce((total, current) => total + ", " + current);
let reduce = gadgets.reduce((total, current, index) => {

    let capitalizeTotal = total;
    console.log(index);

    if(index === 1){
        capitalizeTotal = total[0].toUpperCase() + total.slice(1).toLowerCase();    
    }
    
    let capitalizeCurrent = current[0].toUpperCase() + current.slice(1).toLowerCase();
    return capitalizeTotal + ", " + capitalizeCurrent;

    
});

console.log(reduce);

let num = [1,2,3,4];

let sum = num.reduce((accumulator, currentValue, currentIndex) => accumulator + currentValue);
console.log(sum);

//Sort

gadgets.sort();
console.log(gadgets);

//Revert

gadgets.reverse();
console.log(gadgets);

//Combine arrays

let union = gadgets.concat(num);
console.log(union);

//Convert to string

let tags = gadgets.join(", ");
console.log(tags);

//copy portion of array

let myFavoriteGadgets = gadgets.slice(3,6);
console.log(myFavoriteGadgets);

//Search

let searching = gadgets.find(gadget => gadget.length > 7);
console.log(searching);

//Index searching

let indexSearching = gadgets.findIndex(gadget => gadget.length > 7);
console.log(indexSearching);

//Some
let eLetters = gadgets.some(gadget => gadget.includes("e"));
console.log(eLetters);

//Every
let aLetters = gadgets.every(gadget => gadget.includes("a"));
console.log(aLetters);

//Flat
let years = [
    [1991, 1992, 1993],
    [1994, 1995, 1996],
    [1997, 1998, 1999, [2001, 2002, 2003, [2004, 2005, 2006]]]
];

let flat = years.flat(3);
console.log(flat);

//CopyWithin
let dates = ["01-01-1991", "02-02-1992", "03-03-1993", "04-04-1994", "05-05-1995"];
dates.copyWithin(0,3);
console.log(dates);

//String to array

let name = "Jatso";
let arrayString = Array.from(name);
console.log(arrayString);

//Destructuring
let [one, two, three] = [1, 2, 3];
console.log(one);

let [actor, ...restOfActors] = ["Joaquin Phoenix", "Liam Neeson", "Morgan Freeman"];

console.log(restOfActors);

//Expand arrays 

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let completeArray = [...array1, ...array2];
console.log(completeArray);

//From array to string
console.log(gadgets.toString());


//From string to array

let phrase = "Welcome to the coolest javascript course";

let words = phrase.split(" ");
console.log(words);

//Seo slug
let slug = words.join("-").toLowerCase();
console.log(slug);