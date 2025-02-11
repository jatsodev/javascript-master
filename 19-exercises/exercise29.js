
//Program that counts the vowels in a word

function myVowels(word){

    const vowels = "aeiouAEIOU";

    let count = 0;

    for(let letter of word){
        if(vowels.includes(letter)){
            count++;
        }
    }

    return count;
}

console.log("The number of vowels in the word is " + myVowels(prompt("Write your word:")));