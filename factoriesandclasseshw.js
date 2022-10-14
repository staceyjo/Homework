// Hamster
// attributes:
    // owner - string, initially set as an empty string
    // name - string, set the name from parameter in constructor method
    // price - integer, set as 15
// methods:
    // wheelRun() - log "squeak squeak"
    // eatFood() - log "nibble nibble"
    // getPrice() - return the price

class Hamster {
    constructor (name) {
        this.ownerParam = "";
        this.nameParam = name;
        this.priceParam = 15
    }

    wheelRun() {
        console.log("squeak squeak")
    }

    eatFood() {
        console.log("nibble nibble")
    }

    getPrice() {
        return this.priceParam
    }
}

// let hamster1 = new Hamster ("Hank")
// console.log(hamster1)
// hamster1.wheelRun()
// hamster1.eatFood()
// hamster1.getPrice()

// Person
// attributes:
    // name - set name from parameter in constructor method
    // age - initially 0
    // height - initially 0
    // weight - initially 0
    // mood - integer starting at 0 initially
    // hamsters - empty array initially
    // bankAccount - initially set to 0

    // methods:
        // getName() - returns name
        // getAge() - returns age
        // getWeight() - returns weight
        // greet() - logs a message with person's name
        // eat() - increment weight, increment mood
        // exercise() - decrement weight
        // ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
        // buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())

class Person {
    constructor(name) {
        this.nameParam = name;
        this.ageParam = 0;
        this.heightParam = 0;
        this.weightParam = 0;
        this.moodParam = 0;
        this.hamstersParam = [];
        this.bankAccountParam = 0
    }
    
    getName() {
        return this.nameParam
    }
    
    getAge() {
        return this.ageParam
    }
    
    getWeight() {
        return this.weightParam
    }
    
    greet() {
        console.log(`Hello ${this.nameParam}!`)
    }

    eat() {
        this.weightParam++
        this.moodParam++
    }

    exercise() {
        this.weightParam--
    }

    ageUp() {
        this.ageParam++
        this.heightParam++
        this.weightParam++
        this.moodParam--
        this.bankAccountParam = this.bankAccountParam += 10
    }
    buyHamster(hamster) {
        this.hamstersParam.push(hamster)
        this.moodParam += 10
        this.bankAccountParam -= hamster.getPrice() 
    }

}


// Creating a story with the Person class
// Feel free to update or add methods to automate some of these tasks.

// 1. Instantiate a new Person named Timmy
const timmy = new Person("Timmy")
console.log("========== Meet Timmy ==========")
console.log(timmy)


// 2. Age Timmy five years
console.log("========== Age Timmy by 5 years ==========")
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
console.log(timmy)


// 3. Have him eat five times.
console.log("========== Make Timmy eat 5 times ==========")
timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();
console.log(timmy)


// 4. Have him exercise five times
console.log("========== Make Timmy exercise 5 times ==========")
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
console.log(timmy)


// 5. Age Timmy 9 more years
console.log("========== Age Timmy 9 more years ==========")
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
console.log(timmy);


// 5. Create a hamster named "Gus"
console.log("========== Meet Gus the hamster ==========")
const hamster = new Hamster("Gus")
console.log(hamster)

// 6. Set Gus's owner to the string "Timmy"
console.log("========== Timmy buys Gus- update empty string for owner ==========")
hamster.ownerParam = timmy.nameParam
//hamster.owner="Timmy"
console.log(hamster)


// 7. Have Timmy "buy" Gus
console.log("========== Timmy buys Gus- using method ==========")
timmy.buyHamster(hamster)
console.log(timmy)

// 8. Age Timmy 15 years
console.log("========== Add 15 more years to Timmy ==========")
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
console.log(timmy)

console.log("========== Timmy eats twice ==========")
// 9. Have Timmy eat twice
timmy.eat()
timmy.eat()
console.log(timmy)


// 10. Have Timmy exercise twice
console.log("========== Timmy exercises twice ==========")
timmy.exercise()
timmy.exercise()
console.log(timmy)

// 1 Chef should be a factory of Dinner
// 2. Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.



class Dinner {
    constructor(appetizer, entree, dessert) {
        this.appetizerParam = appetizer
        this.entreeParam = entree 
        this.dessertParam = dessert
    }
    
}

// 3. Add a method on chef that takes three arguments 
// and returns a new Dinner based on those arguments.


class Chef {
    
    makeNewDinner(appetizerParam, entreeParam, dessertParam) {
        const newMeal = new Dinner (appetizerParam, entreeParam, dessertParam)
        return newMeal
    }
}

// 4. Have the Chef create 3 dinners, log the dinners

let chef1 = new Chef()
console.log("========== Chef makes 3 dinners ==========")
// chef1.makeNewDinner("cheese sticks", "pizza", "brownie")
// chef1.makeNewDinner("brushetta", "pasta alfredo", "creme brulee")
// chef1.makeNewDinner("bread sticks", "bakes ziti", "red velvet")
console.log(chef1.makeNewDinner("cheese sticks", "pizza", "brownie"))
console.log(chef1.makeNewDinner("brushetta", "pasta alfredo", "creme brulee"))
console.log(chef1.makeNewDinner("bread sticks", "baked ziti", "red velvet"))

