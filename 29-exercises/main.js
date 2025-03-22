//Web application where the user can add, display and delete their
//favorite movies. Each movie has a title, save date and popularity score.
//Movies remain saved even when the page is reloaded.

//Stages:
// Exercise 39: Create a form
// Exercise 40: Function to save movies
// Exercise 41: Fuction to show movies
// Exercise 42: Automatically load movies when the website is opened
// Exercise 43: Function to delete

function deleteMovie(index){
    //Get the array of objects from localStorage
    let savedMovies = JSON.parse(localStorage.getItem("movies"));

    //Delete
    savedMovies.splice(index, 1);

    //Update array 
    localStorage.setItem("movies", JSON.stringify(savedMovies));

    //Show list
    show();
}

function show(){
    //Select list 
    let list = document.querySelector("#list");
    list.innerHTML = "";

    //Take out localStorage's movies
    let savedMovies = JSON.parse(localStorage.getItem("movies"));

    //Validation
    if (savedMovies.length === 0) {
        list.innerText = "There are no movies to show";

        return false;
    }

    //Traverse array and show

    savedMovies.forEach((movie, index) => {
        const movieArticle = document.createElement("article");
        movieArticle.innerHTML = `
            <h3>${movie.title}</h3>
            <p>Date: ${movie.date}</p>
            <p>Popularity: ${movie.popularity}</p>
        `;
        //Create button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => deleteMovie(index));

        movieArticle.appendChild(deleteBtn);
        movieArticle.appendChild(document.createElement("hr"));

        list.appendChild(movieArticle);
    });

    return true;


}

function save() {
    //Select input and get the value
    let inputTitle = document.querySelector("#title");
    let title = inputTitle.value;

    //Validation
    if (title.trim() === "") {
        alert("Empty input");

        return false;
    }

    //Date
    const date = new Date();
    const currentDate = date.toLocaleDateString() + " " + date.toLocaleTimeString();

    //Generate random number
    let popularity = Math.floor(Math.random() * 100) + 1;

    //Create movie object
    let movie = {
        title, 
        date: currentDate,
        popularity
    };

    
    //Take out all the movies
    let savedMovies = JSON.parse(localStorage.getItem("movies"));

    if(!savedMovies){
        savedMovies = [];
    }

    //Add the new movie to the array
    savedMovies.push(movie);

    //Save everything in localStorage
    localStorage.setItem("movies", JSON.stringify(savedMovies));

    //Clean input
    inputTitle.value = "";
    //Show movies
    show();

    return true;
}

window.addEventListener("load", () => {
    //Load all movies
    show();

    //Apply event to form to save
    let form = document.querySelector("#form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        save();
    });
});

