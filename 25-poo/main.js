//Mold

class Dog {

    constructor(name = "Looky", breed, color){
        //Properties or attributes
        this.name = name;
        this.breed = breed;
        this.color = color;
    }

    //Methods 
    bark(){
        console.log(`${this.name} says: Guau Guau!!!!`);
    }

    jump(){
        console.log(`${this.name} has jumped`);
    }

    getBreed(){
        return this.breed;
    }

    setBreed(breed){
        this.breed = breed;
    }

    get getColor(){
        return this.color;
    }

    set setColor(color){
        this.color = color;
    }
}


let myDog = new Dog("Niko", "Crossbreed", "White with brown spots");
myDog.setBreed("Chihuahua");
console.log(myDog.getBreed());

myDog.bark();
myDog.jump();

myDog.setColor = "Black";
console.log(myDog.getColor);

let myDog2 = new Dog("Cronos", "Rotweiller", "Black with brown spots");
console.log(myDog2.name);

myDog2.bark();
myDog2.jump();