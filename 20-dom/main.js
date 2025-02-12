// window.addEventListener("DOMContentLoaded", () =>{
//     let box = document.getElementById("box");

//     console.log(box);
// });

//DOM (Document Object Model)

// getElementById Select elemnts by their Id
let box = document.getElementById("box");


//Modify characteristics of a selected item


box.innerHTML = "<h2>Hi, I'm Jatso</h2>";

console.log(box.innerText);

// box.style.background = "lightblue";
// box.style.maxWidth = "50%";
// box.style.margin = "0 auto";
// box.style.padding = "35px";
// box.style.textAlign = "center";
// box.style.fontFamily = "Arial";

box.classList.add("little-boxy");
box.classList.add("box");
box.classList.add("box2");


function changeColor(color, radius){
    box.style.background = color;
    box.style.borderRadius = radius;
}

//Console => changeColor("pink", "100px") *0* MAGIC!!!

// box.className = "little-boxy box box2"

console.log(box.className);

//getElementsByClassName
let articles = document.getElementsByClassName("article");

console.log(articles);

for(let i = 0; i < articles.length; i++){

    articles[i].classList.add("article-base");
    //Add more HTML
    articles[i].innerHTML += "<a href='cemita.com'>Read more...</a>";
    // articles[i].style.border = "1px solid #ccc";
    // articles[i].style.margin = "20px";
    // articles[i].style.padding = "20px";


    //Add a DOM node
    let link = document.createElement("a");

    link.setAttribute("href", "cemita.com");
    link.setAttribute("target", "_blank");
    link.style.color = "green";

    let textLink = document.createTextNode("Keep reading...");

    link.append(textLink);
    articles[i].append(link);


    if(i === 0){
        articles[i].classList.add("yellow-article")
    }

    if(i === (articles.length - 1)){
        articles[i].classList.add("last-article");

        articles[i].innerHTML = "<h2>Keep reading more things at cemita.com</h2>"
    }
}


//getElementsByTagName

let tagsArticle = document.getElementsByTagName("article");

tagsArticle[1].style.backgroundColor = "green";
tagsArticle[1].style.color = "white";

console.log(tagsArticle[1]);


//Advisable: QuerySelector

let sectionArticles = document.querySelector("#articles");

sectionArticles.style.background = "lightblue";
sectionArticles.style.padding = "40px";

console.log(sectionArticles);


//QuerySelectors and classes

let firstArticle = document.querySelector(".article");
firstArticle.style.borderRadius = "10px";

console.log(firstArticle);




//Advisable: QuerySelectorAll


