
let year = 1990;
let objective = 2177;
let interference = 2117;

while (year <= objective) {
    console.log("We are in the year: " + year);

    if (year === interference) {
        break;
    }

    year++;
}

//do while

let num = 47;

do{
    console.log(num);
    num--;
}while(num >= 0);