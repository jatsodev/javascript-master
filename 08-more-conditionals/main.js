//switch

let myBreakfast ="bananas";

switch(myBreakfast){
    case "bananas":
        console.log("You have chosen bananas with cream.");
        break;

    case "eggs": 
        console.log("You have chosen eggs and bacon.");
        break;

    case "cereal": 
        console.log("You have chosen cereal with milk.");
        break;

    default:
        console.log("You have selected a different breakfast.");
}


if(myBreakfast == "bananas"){
    console.log("You have chosen bananas with cream.");
}else if(myBreakfast == "eggs"){
    console.log("You have chosen eggs and bacon.");
}else if(myBreakfast == "cereal"){
    console.log("You have chosen cereal with milk.");
}else{
    console.log("You have selected a different breakfast.");
}

//ternary conditional