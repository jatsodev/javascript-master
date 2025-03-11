//Literal objects
//Data structure that groups properties and methods under the same name.

let movie = {
    title: "Star Wars IV - A New Hope",
    year: 1977,
    genre: "Science fiction",
    director: "George Lucas",
    cast: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    details: {
        duration: 120,
        pegi: 18
    },
    prota: "Luke Skywalker", 
    description: function(){
        return `${this.title} is a ${this.genre} film 
                directed by ${this.director} 
                and released in the year ${this.year}
        `;
    },
    showCast: () => {
        console.log("Cast of actors:");
        movie.cast.forEach(name => {
            console.log(name);
        });
    }
};

console.log(
    movie.prota,
    movie.year
);

console.log(movie);

console.log(
    movie["director"], 
    movie["genre"]
);

movie.director = "Jatso";
console.log(movie);

movie.sequel = "Star wars V - The Empire Strikes Back";

console.log(movie);

console.log(movie.description());

console.log(movie.showCast());

console.log(movie.details.duration);

delete movie.genre;
delete movie.cast;

console.log(movie);


//JSON

let receipt = {
    title: "Table 1",
    idTerminal: 31977,
    idTransaction: 4534,
    type: "Credit",
    total: 345,
    waiter: "Luke Skywalker"
};

let receiptJSON = JSON.stringify(receipt);

console.log(receipt);
console.log(receiptJSON);

let convertedObject = JSON.parse(receiptJSON);

console.log(convertedObject);

let box = document.querySelector("#data");

for(let key in receipt){
    box.innerHTML += `<p>${key}: ${receipt[key]}</p>`;
}

