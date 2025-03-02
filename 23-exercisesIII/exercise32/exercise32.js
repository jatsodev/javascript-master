//Program that simulates a 
// shopping list, the user can add and delete products

document.addEventListener("DOMContentLoaded", () => {

    let newProduct = document.querySelector("#newProduct");
    let btnAdd = document.querySelector("#add");
    let shoppingList = document.querySelector("#shoppingList");

    btnAdd.addEventListener("click", () => {
        let productToAdd = newProduct.value.trim();
        if(productToAdd){
            const finalProduct = document.createElement("li");
            finalProduct.textContent = productToAdd;

            const btnDelete = document.createElement("button");
            btnDelete.textContent = "Delete";

            btnDelete.addEventListener("click", () => {
                finalProduct.remove(); 
            });

            finalProduct.appendChild(btnDelete);
            finalProduct.classList.add("product");

            shoppingList.appendChild(finalProduct);
            newProduct.value = "";
        }
    });

});