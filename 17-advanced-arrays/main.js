let frameworks = ["Angular", "React", "Vue", "Astro", "NodeJS", "Svelte", "SolidJS", "Qwik", "ExpressJS"];

//Manual access

console.log(frameworks[0]);
console.log(frameworks[1]);
console.log(frameworks[2]);
console.log(frameworks[3]);
console.log(frameworks[4]);
console.log(frameworks[5]);

//Loop access

for(let i = 0; i < frameworks.length; i++){
    console.log(frameworks[i]);
}

//Display on screen 
document.write("<h1>List of Frameworks</h1>");
document.write("<ul>");
for(let i = 0; i < frameworks.length; i++){
    document.write("<li>"+frameworks[i]+"</li>");
}
document.write("</ul>");