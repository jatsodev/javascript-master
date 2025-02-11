
//Program that requests numbers to order and search for them


let nums = [];

for (let cont = 1; cont <= 6; cont++){
    let num = parseInt(prompt("Enter a number:", 0));
    nums.push(num);
}

//Show

function show(array){
    console.log(array);

    document.write("<h1>Array content</h1>");
    document.write("<ul>");

    array.forEach(element => {
        document.write("<li>"+element+"</li>");

    });

    document.write("</ul>");

    return array;
}

show(nums);

//Order numbers

nums.sort((a,b) => a-b);
show(nums);

//Reverse numbers

nums.reverse();
show(nums);

//Show number of elements

document.write(`<h1> The array has ${nums.length} elements.</h1>`);

//Search

let search = Number(prompt("Look for a number"));

let position = nums.findIndex(number => number === search);

if(position && position != -1){
    console.log("FOUND!!!! The search position is " + position);
}else{
    console.log("Number not found");
}


