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

    static greet(){
        console.log("Hello friend, how are you?");
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

Dog.greet();

// myDog.greet(); no objects

class SuperDog extends Dog {
    constructor (name, breed, color, superPower){
        super(name, breed, color);
        this.superPower = superPower;
    }

    setSuperPower(superPower){
        this.superPower = superPower;
    }

    getSuperPower(){
        return this.superPower;
    }

    execute(){
        console.log(`${this.name} is usig his super power of ${this.superPower}.`);
    }
}

let superDog = new SuperDog("Laika", "Golden", "Blond", "Searching");

superDog.execute();
console.log(superDog.getBreed());
superDog.jump();