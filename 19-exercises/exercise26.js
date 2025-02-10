
// Program that counts the letters of the words in an array

function countLetters(data){
    let newData = data.map(element => element.length);
    return newData;
}

const words = ["HTML", "CSS", "Python", "PHP", "Javascript"];

console.log(
    countLetters(words)
);



