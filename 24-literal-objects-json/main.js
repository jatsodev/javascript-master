//Literal objects
//Data structure that groups properties and methods under the same name.

let movie = {
    title: "Star Wars IV - A New HOPE",
    year: 1977,
    genre: "Science fiction",
    director: "George Lucas",
    prota: "Luke Skywalker"
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


//JSON