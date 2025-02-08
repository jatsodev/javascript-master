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
console.log(gadgets);