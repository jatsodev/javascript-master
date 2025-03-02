// Program that opens a new window with the size chosen by the user

let little = document.querySelector("#little");
let medium = document.querySelector("#medium");
let big = document.querySelector("#big");

let window1 = (width, height) => {
    window.open("https://pokemon.com",
        "_blank",
        `width=${width},height=${height}`);
    return true;
};

little.addEventListener("click", () => {
    window1(450, 350);
});

medium.addEventListener("click", () => {
    window1(650, 550);
});

big.addEventListener("click", () => {
    window1(850, 750);
});
