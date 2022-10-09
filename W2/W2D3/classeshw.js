// JavaScript Class
    // A JavaScript class is not an object. It is a template for JavaScript objects
// JavaScript Class Syntax:
    // 1. Use the keyword class to create a class.
    // 2. Always add a method named constructor():
        /*
            class ClassName {
                constructor() { ... }
            }
        */
    // ==== Car class example from W3:
        /*
            class Car {
                constructor(name, year) {
                    this.name = name;
                    this.year = year;
                }
            }
        */

// JavaScript Class Syntax:The Constructor Method
// The constructor method is a special method:
    // It has to have the exact name "constructor"
    // It is executed automatically when a new object is created
    // It is used to initialize object properties

// ==============Class Methods/Functions==========================
// Class methods are created with the same syntax as object methods.
// Class method syntax: 
/*
            class ClassName {
                constructor() { ... }
                method_1() { ... }
                method_2() { ... }
                method_3() { ... }
            }
*/


// ===============================DIRECTIONS======================================
    // 1. Create a class called Cat
    // 2. give the class at least 3 properties :name, furColor, eyeColor, age, breed, temperment, motivation, gender, friend, enemy
    // 3. give the class at least 3 methods: eat, drink, sleep, strech, talk
    // 4. create two objects/instances of the class (two cats)- catOne, catTwo, catThree
    // 5. log the instances to see their properties
    // 6. invoke each method from both instances

// ============================Create class called Cat==============================
// =========================Give the class at least 3 properties====================
class Cat {
    constructor(name, furColor, eyeColor, age, breed, temperment, motivation, gender, friend, enemy) {
        this.nameParam = name;
        this.furColorParam = furColor;
        this.eyeColorParam = eyeColor;
        this.ageParam = age;
        this.breedParam = breed;
        this.tempermentParam = temperment;
        this.motivationParam = motivation;
        this.genderParam = gender;
        this.friendParam = friend;
        this.enemyParam = enemy;
    }
        // ==============now let's create at least 3 methods/functions to make our cat do stuff
        // methods/functions: eat, drink, sleep, strech, talk and get something . 
        // What we add to the curly brace is the action we want the method to perform
    eats() {
        console.log("I'm super hungry! It's time to eat.")
    }

    drinks() {
        console.log("I'm so thisty so I'm going to drink some water.")
    }

    sleeps() {
        console.log("I'm feeling tired, going to take a cat nap.")
    }

    stretches() {
        console.log("I need to get comfortable. Let me stretch")
    }

    talks() {
        console.log("Meow")
    }
}
 
// ============================ Objects are a collection of zero or more properties =======================
let catOne = new Cat("James Abraham Garfield", "orange", "green", "40", "tabby Persian", "fat, lazy, cynical", "lasanga and sleeping", "male", "Jon and Odie", "Mondays and Nermal")
let catTwo = new Cat("Sylvester the Cat", "black and white", "black", "50", "tuxedo-Maine Coon", "aggresive, prideful, persistant, mischevious, selfish, greedy, sneaky, stubborn", "chasing Tweety", "male", "Bugs Bunny, Daffy Duck and Granny", "Tweety")
let catThree = new Cat("Thomas Jasper Cat Sr.", "bluish grey and white","yellow and green", "75", "tuxedo-domestic short haired", "scheming, athletic, intelligent, strong prey drive", "trying to outwit Jerry, working out", "male", "Toodles Galore", "Jerry and Spike")

// ======================log the instances to see their properties==========================================
console.log(catOne)
console.log(catTwo)
console.log(catThree)

// =======================invoke each method for both instances=============================================
// eats, drinks, sleeps, stretches, talks
console.log("====================Making cat1 do stuff=========================")
catOne.eats()
catOne.drinks()
catOne.sleeps()
catOne.stretches()
catOne.talks()


console.log("====================Making cat2 do stuff=========================")
catTwo.eats()
catTwo.drinks()
catTwo.sleeps()
catTwo.stretches()
catTwo.talks()

console.log("====================Making cat3 do stuff=========================")
catThree.eats()
catThree.drinks()
catThree.sleeps()
catThree.stretches()
catThree.talks()

// PIRATES
// ===============================DIRECTIONS======================================
// 1. Create a class called Pirates
// 2. Give the class at least 3 properties that are set by the constructor:nameOfPirate, ageOfPirate, hairColor
// 3. Give the class at least 3 methods: greets, drinks, prepares, attacks
// 4. Create two arrays: jollyRoger and blackPearl
// 5. Instantiate 2 arrays of 3 pirates each
        //Add 3 instances to each pirate array (total of 6 pirates)
// 6. Loop over each array and print 3 properties of each pirate

// ============================Create class called Pirates==============================
// =========================Give the class at least 3 properties========================
console.log("--------------PIRATES---------------------------------")
class Pirate {

    constructor(nameOfPirate, ageOfPirate, hairColor){
        this.nameOfPirateParam = nameOfPirate;
        this.ageOfPirateParam = ageOfPirate;
        this.hairColorParam = hairColor;
    }
    
// =========================Give the pirate class at least 3 methods========================
    greets () {
        console.log("Ahoy mate")
    }

    drinks () {
        console.log("Where is the rum?")
    }

    prepares () {
        console.log("Batten down the hatches!")
    }

    attacks () {
        console.log("Bomb's away!")
    }
  
}
// =========================Create two empty arrays ========================
const jollyRogers = []
const blackPearl = []

//======================Create 3 new instances from the Pirates class for both jollyRogers and blackPearl arrays (6 total pirates)===============
//======================Properties to remember for each instance " nameOfPirate, ageOfPirate, hairColor============================
jollyRogers[0] = new Pirate ("Captain Jack Sparrow", 38, "brown")
//console.log(jollyRogers[0])

jollyRogers[1] = new Pirate ("Captain Long John Silver", 40, "brown")
//console.log(jollyRogers[1])

jollyRogers[2] = new Pirate ("Captain Blackbeard", 37, "black")
//console.log(jollyRogers[2])

blackPearl[0] = new Pirate ("Captain Hook", 200, "none, he's bald")
//console.log(blackPearl[0])

blackPearl[1] = new Pirate ("Captain Anne Bonny", 24, "red")
//console.log(blackPearl[1])

blackPearl[2] = new Pirate ("Captain Morgan", 53, "brown")
//console.log(blackPearl[2])

//====================Loop over each array and print 3 properties of each pirate =======================

for (let i = 0; i < blackPearl.length; i++) {
    console.log(blackPearl[i])
}

for (let i = 0; i < jollyRogers.length; i++) {
    console.log(blackPearl[i])
}

console.log("----------Captain Jack Sparrow says hello------------")
jollyRogers[0].greets()

console.log("----------Captain Morgan drinks------------")
blackPearl[2].drinks()

console.log("----------Captain Anne Bonny prepares------------")
blackPearl[1].prepares()

console.log("----------Captain Long John Silver attacks------------")
jollyRogers[1].attacks()
