// Game of battling spaceships using JS

// Who are the actors: my ship and the alien ships(6)
// What are the actions: attack

// SYNTAX JS Object: 
// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// SYNTAX: Access object properties:
// 1. dot notation: objectName.propertyname
// 2. objectName[propertyName]

// SYNTAX: Method/ function stored as a property: 
// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };

// SYNTAX: Accessing object methods:
// objectName.methodName()

// JS Objects: can contain many values
    // myShip, alienShip, battleGame
// Properties: property name : value
    // name, hull, firepower, accuracy
// Methods : the actions performed by the object
    //attack, retreat
// this.Keyword: refers to the object

// Adding a new element to a object's array
// Add an element:
// const cars = ["Saab", "Volvo", "BMW"]
// cars.push("Audi");
// console.log(cars)

// Resource: https://www.tutorialrepublic.com/faq/how-to-generate-a-random-number-between-two-numbers-in-javascript.php#:~:text=Answer%3A%20Use%20the%20Math.,between%20two%20numbers%20in%20JavaScript.
// Generate a random # between two numbers: 

// Use the Math.random() method in combination with the Math.floor() method 
// to generate a random number between two numbers in JavaScript.

// Math.random() method returns a floating-point, 
// pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1)

// Math.floor() method rounds the number down to the nearest integer.

// Range function syntax: 
// function range(start, end) {
//     // body of the function
//     //  return list of integers that will be lying within the range of the declared function.
//     }


// Step 1: Make a ship object:
// Notes: You get to attack first (attack function)
// You have no lasers
// You can retreat after battle (retreat function)

// Step 1b: Add ship properties:
// hull is the same as hitpoints. 
    // If hull reaches 0 or less, the ship is destroyed

// firepower is the amount of damage done to the hull 
    // of the target with a successful hit

// accuracy is the chance between 0 and 1 
    // that the ship will hit its target
    // Use Math.random

    // Example from instructions: 
    // if (Math.random() < alienShip[0].accuracy) {
    //     console.log('You have been hit!');
    // }

// attacks function: 
    // the attack function is designed to work like this:
    // your chance of attack is a random number between 0- 1
        // so we'll be using math.random

    // the chance of attack is tied to the accuracy:

    // WHEN YOU ATTACK: 
    // if your randomly generated attack function number 
    // is LESS than the accuracy number of .7- you hit your target
    // then return true or console.log ("You hit your target!")

    // if your randomly generated attack function number is
    // GREATER than .7- it means you missed
    // then return false or console.log (" You missed!")

    // WHEN THE ALIEN ATTACKS YOU: 
    // if their randomly generated attack function number 
    // is LESS than yours - you've been hit by them
    // then return true or console.log ("You took a hit!")

    // if their randomly generated attack function number is
    // GREATER than yours- it means they missed
    // then return false or console.log (" They missed!")



//===================================My Ship Object======================================
const myShip = {
    name: "Black Pearl",
    hull: 20,
    firePower: 5,
    accuracy: 0.7,
    isAlive: true,
    attacks: function() {
        let chanceOfAttack = Math.random();
        console.log("Accuracy threshold is: " + chanceOfAttack)
        if (chanceOfAttack < this.accuracy) {
            console.log("SUCESSFUL! You hit them!");
            // targetShip.hull = targetShip.hull - this.firePower;
            // console.log("The alien target has " + targetShip.hull + " points left");
            // if(targetShip.hull < 0 ) {
            //     targetShip.isAlive = false;
            //     console.log("The alien ship is destroyed!")
            // }
        }
        else {
            console.log("RELOAD! You missed!")
        }
    },
};
console.log("========================My Ship==========================")
// console.log(myShip)
myShip.attacks()




//===================================Alien Ship Class======================================

// Step 2: Make an alien ship class

// There will be 6 total alien ships

// Each alien ship attacks one at a time 
// - so this will be an array we'll loop through during battle

// Each alien ship has "ranged" properties - surely this was put in italics for a reason

// hull: between 3 and 6
    // if hull reaches 0, the ship is destroyed

// firepower: between 2 and 4
    // amount of damage done to the hull of target

// accuracy: between .6 and .8
    // chance between 0 and 1 that the ship will hit the target


// /* Defining a custom function which returns a random number 
// between min and max, including min and max */

    // function generateRandomNumber(min, max) {
    //     return Math.floor(Math.random() * (max - min + 1) + min);
    // }

// Generate a random number between 1 and 10 (including 1 and 10):
    // var randomNum = generateRandomNumber(0, 10);
    // console.log("Generating a random number bewteen 0 and 1");
    // console.log(randomNum);


// Shared by Christina: 
// Math.ceil(Math.random() * (max - min + 1) + min)

// Accuracy example from instructions: 
    // if (Math.random() < alienShip[0].accuracy) {
    //     console.log('You have been hit!');
    // }

// Potential bug: keep in mind we need to 
// prevent the alien ship from attacking 
// AFTER it has been destroyed

// console.log("========================Alien Ship==========================")


class AlienShip {
    constructor(name, hull, firePower, accuracy) {
        this.nameParam = name;
        this.hullParam = hull;
        this.firePowerParam = firePower;
        this.accuracyParam = accuracy;
    }
    attacksYou() {
        let chanceOfAttack = Math.random();
        // console.log("If the chanceOfAttack is less than your accuracy, You've hit them")
        // console.log("If the chanceOfAttack is greater than your accuracy You missed")
        console.log("alien chanceOfAttack number is: " + chanceOfAttack)

        if (chanceOfAttack < this.accuracy) {
            console.log("Alien ship hit you!");
        }
        else {
            console.log("Alien ship missed!")
        }
    }
  };

//   console.log(alienShip.attacks())
//   console.log(alienShip.survives())

// Add 6 new alien ships  values to the alienShip class:
// start with names

const s1 = new AlienShip("Celestials")
const s2 = new AlienShip("Cybertronians")
const s3 = new AlienShip("Decpeticons")
const s4 = new AlienShip("Galactus")
const s5 = new AlienShip("Hydra")
const s6 = new AlienShip("Jawa")
// console.log(s1)
// console.log(s2)
// console.log(s3)
// console.log(s4)
// console.log(s5)
// console.log(s6)

let alienShips = [s1, s2, s3, s4, s5, s6 ]
console.log("=====these are my alien ships=====")
s1.attacksYou()

// Firepower number generator: 

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var hullNum = generateRandomNumber(3, 6);
var firepowerNum = generateRandomNumber(2, 4);

console.log("Alien ship hull num");
console.log(hullNum);

console.log("Alien ship firepower num");
console.log(firepowerNum);

// Accuracy Num generator 
function alienAccuracyNum(min, max) {
    return Math.random() * (max - min) + min;
}
var accuracyNum = alienAccuracyNum(.6, .8);
console.log("Alien ship accuracy num");
console.log(accuracyNum);



//===================================Game Object======================================

// Step 3: Make the game object
// - 1. You attack the first ship (round 1)
// - 2. If the alien ship survives, it attacks you (round 2)
// - 3. If my ship survives, I attack the ship again (round 3)
// - 4. If you destroy the alien ship, (round 4)
    // - your ship has the option to attack the next ship
// Notes: attacks is a repeated action in the game
// this will necessitate a loop or multiple loops

// Nested loops- try to avoid this
// First loop is for the battle
// Nested loop is for the battles that iterate over the alien ships
// How do we exit the first loop?
// How do we exit the parent loop?

const game = {
    round: 0,
    targetShip: 0,
    userResponse: "",
    battles : function() {
        return this.myShip + " battles " + this.alienShip
    }
  };
// console.log(game.battles()) // returns undefined battles undefined
