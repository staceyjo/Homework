//===================================NOTES======================================

// Game of battling spaceships using JS

// Who are the actors: my ship and the alien ships(6)
// What are the actions: my ship attacks, alien ship attacks, my ship retreats

// SYNTAX JS Object: 
// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// SYNTAX: Method/ function stored as a property: 
// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };

// SYNTAX: Access object properties:
// 1. dot notation: objectName.propertyname
// 2. objectName[propertyName]

// SYNTAX: Accessing object methods:
// objectName.methodName()

// JS Objects: can contain many values
// Properties: property name : value
    // name, hull, firepower, accuracy
// Methods : the actions performed by the object
    //attack, retreat
// this.Keyword: refers to the object
    // this.firepower 

// Adding a new element to a object's array
// const cars = ["Saab", "Volvo", "BMW"]
// cars.push("Audi");
// console.log(cars)

// Generate a random # between two numbers:
// Resource: https://www.tutorialrepublic.com/faq/how-to-generate-a-random-number-between-two-numbers-in-javascript.php#:~:text=Answer%3A%20Use%20the%20Math.,between%20two%20numbers%20in%20JavaScript.
 
// Use the Math.random() method in combination with the Math.floor() method 
// to generate a random number with no decimals between two numbers in JavaScript.

// Math.random() method returns a floating-point, 
// pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1)

// Math.floor() method rounds the number down to the nearest integer.

// Defining a custom function which returns a random number 
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

// The Math.ceil() function always rounds up and returns 
// the smaller integer greater than or equal to a given number


// Range function syntax: ---won't be using this
// function range(start, end) {
//     // body of the function
//     //  return list of integers that will be lying within the range of the declared function.
//     }


//===================================My Ship Object======================================
// Step 1: Make a ship object

// Step 1b: Add ship properties: name, hull, firepower, accuracy
// hull is the same as hitpoints. 
    // If hull reaches 0 or less, 
    // the ship is destroyed

// firepower is the amount of damage done to the hull 
    // of the target with a successful hit

// accuracy is the chance between 0 and 1 
    // that the ship will hit its target
    // Use Math.random

// Step 1c:
// You have no targeting lasers, so you have to rely on accuracy
// Notes: You get to attack first (attack function)
// You can retreat after battle (retreat function?)


// attacks function: 
    // your accuracy is set to .7
    // your chance of attack/ accuracy threshold
    // is a random number between 0- 1
        // so we'll be using math.random

    // WHEN YOU ATTACK: 
    // if your chance of attack/accuracy threshhold number 
    // is LESS than the accuracy number of .7- you hit your target
        // return true or console.log ("You hit your target!")

    // if your chance of attack/accuracy threshhold number
    // is GREATER than .7- it means you missed
        // then return false or console.log (" You missed!")

//===================START GAME=============================
// const startButtonEl = document.getElementById("start-button")

// startButtonEl.addEventListener("click", (evt) =>) [
    // console.log("The game is starting")
    // startButtonEl.classList.toggle("hide")
//     startGame()
// ]

// const nextButtonEl = document.getElementById("next-button")

// const retreatButtonEl = document.getElementById("retreat-button")



function startGame() {
    console.log("The game has started!")

    // DEFINE MY SHIP: I need to add my ship object to the game once I get my outputs working
    //console.log(myShip)

    // display my ship:
    console.log(myShip)

}

const myShip = {
    name: "uss Defender",
    hull: 20,
    firePower: 5,
    accuracy: 0.7,
    isAlive: true,
    getStats: function() {
        console.log(this.hull, this.firePower, this.accuracy)
    },
    // remaining hull
    attacks: function(target) {
        let chanceOfAttack = Math.random();
        console.log("Your accuracy threshold is: " + chanceOfAttack)

        // MY INITAL ATTACK: I AIM & HIT THE TARGET
        // If my chance of attack falls within accuracy range, (accuracy less than .7), that means I hit the target

        if(chanceOfAttack < this.accuracy) {
            console.log(`SUCCESSFUL HIT! Your ship, the ${myShip.name} hit the hull of the ${target.name} alien ship!`);


            // If I hit the target, their hull takes damage from my firepower:
            // Here I define my firepower and the starting level of their hull points 

            console.log(`Your firepower impact was ${myShip.firePower} points. ${target.name} started with ${target.hull} hull points`)
            
            target.hull = target.hull - this.firePower
            console.log(`${target.name} ship has ${target.hull} hull points left`);


            // If they have 0 or below  hull point
            // It means they're dead and you destroyed tehir ship

            if(target.hull <=0) {
                target.isAlive = false;
                console.log(`${target.name} target ship destroyed! YOU SAVED THE PLANET!`) 
                
            }


            // If their hull is greater than 0, they're still alive
            // If they are alive, they will try to attack you, 
            // If they attack you, their accuracy has to fall within their accuracy threshold
            // Their accuracy threshold is between .6 < target.accuracy > .8
            // if they fall inside of that- they hit you
            // if target.accuracy < .8 && target.accuracy > .6) {

            else if(target.hull > 0) {
                target.isAlive = true;
                console.log(`Prepare for counter attack! ${target.name} have a firepower of ${target.firePower}`)


                if(target.isAlive = true) {
                    console.log("=====================ALIEN COUNTER ATTACK =====================")
                    target.attacksYou(myShip)
                    console.log(`${myShip.name} ship has ${myShip.hull} hull points`);
                    console.log(`${target.name} getting ready to return fire. Brace ${myShip.name} for impact`)
    
                    if(target.accuracy > .8) {
                        console.log("They missed you on their counter attack")
                    }
                    if(target.accuracy < .8) {
                        remainingHull = myShip.hull - target.firePower}
                        console.log(`You have ${remainingHull} remaining hull points`)
                    }

                // // MY RETURN ATTACK: This breaks my console.
                // if(myShip.hull > 0) {
                //     console.log("=====================MY COUNTER ATTACK=====================")
                //     myShip.attacks(target)
                // }

                    if(remainingHull > 0) {
                        console.log(`Time to end this once and for all!`)
                        myShip.attacks(target)
                        remainingAlienHull = target.hull - this.firePower
                        // console.log(`Alien ship ${aliens[0].name} has ${remainingAlienHull} hull points remaining after the last attack`)
                        // If you attack again and miss:
                        if(isAlive=true) {
                            aliens[0].attacksYou(myShip)
                            remainingHull = myShip.hull - target.firePower
                            console.log(remainingHull)
                        }
                        if(isAlive = false) {
                            console.log(`They can't attack you, they're dead`)
                        }
                    }

                    if(target.isAlive = false) {
                        console.log(`They can't attack you! They're dead.`)
                    }

            }

            if (myShip.hull < 0) {
                myShip.isAlive = false;
                console.log("Your ship is destroyed")
            }

        } else if(chanceOfAttack > this.accuracy) {
            console.log(`OH NO! You overshot! Your ship, the ${myShip.name} missed the ${target.name} alien ship! PREPARE FOR COUNTER ATTACK!`);
        }
    }
};

console.log("========================My Ship==========================")
console.log(myShip)
// myShip.attacks()

//===================================Alien Ship Class======================================

// Step 2: Make an alien ship class

// There will be 6 total alien ships

// Each alien ship attacks one at a time 
// - so this will be an array we'll loop through during battle

// Each alien ship has ranged properties :
    // hull: between 3 and 6
        // if hull reaches 0, the ship is destroyed

    // firepower: between 2 and 4
        // amount of damage done to the hull of target

    // accuracy: between .6 and .8
        // chance between 0 and 1 that the ship will hit the target


// WHEN THE ALIEN ATTACKS YOU: 
// if their randomly generated attack function number 
// is LESS than yours - you've been hit by them
    // then return true or console.log ("You took a hit!")

// if their randomly generated attack function number is
// GREATER than yours- it means they missed
    // then return false or console.log (" They missed!")

// Example of alien accuracy: 
    // if (Math.random() < alienShip[0].accuracy) {
    //     console.log('You have been hit!');
    // }


// Potential bug: keep in mind we need to 
// prevent the alien ship from attacking 
// AFTER it has been destroyed

class AlienShip {
    constructor(name, hull, firePower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy;
    }
    attacksYou() {
        let chanceOfAttack = Math.random();
        console.log("Alien's accuracy threshold is: " + chanceOfAttack)

        if (chanceOfAttack < this.accuracy) {
            console.log(`IMPACT! ${aliens[0].name} alien ship just hit the ${myShip.name}! There is damage to your hull!`);
        }
        else {
            console.log(`CLOSE ONE! ${aliens[0].name} alien ship just missed the ${myShip.name} !`)
        }
    }
    getStats() {
        console.log(this.hull, this.firepower, this.accuracy)
    }
  };


// Calculate the values for the hull, firepower and accuracy
// Right now they are undefined, the myShip object specified the values. 
// These are going to be random numbers.
// For hull between 3 and 6. For firepower between 2 and 4
// For accuracy between .6 and .8


// Hull & Firepower number generator: 
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const hull = generateRandomNumber(3, 6);
const firepower = generateRandomNumber(2, 4);

// console.log("Alien ship hull num");
// console.log(hull);

// console.log("Alien ship firepower num");
// console.log(firepower);


// Accuracy Num generator 
function alienAccuracyNum(min, max) {
    return Math.random() * (max - min) + min;
}
const accuracyNum = alienAccuracyNum(.6, .8);
// console.log("Alien ship accuracy num");
// console.log(accuracyNum);


// Add 6 new alien ship values to the AlienShip class:
// start with names, then add the invoked function for hull, firepower and accuracy, 

const aliens = [
new AlienShip("Celestials",generateRandomNumber(3, 6),generateRandomNumber(2, 4), alienAccuracyNum(.6, .8) ),
new AlienShip("Cybertronians", generateRandomNumber(3, 6), generateRandomNumber(2, 4), alienAccuracyNum(.6, .8)),
new AlienShip("Decpeticons", generateRandomNumber(3, 6), generateRandomNumber(2, 4), alienAccuracyNum(.6, .8)),
new AlienShip("Galactus", generateRandomNumber(3, 6), generateRandomNumber(2, 4), alienAccuracyNum(.6, .8)),
new AlienShip("Hydra", generateRandomNumber(3, 6), generateRandomNumber(2, 4), alienAccuracyNum(.6, .8)),
new AlienShip("Jawa", generateRandomNumber(3, 6), generateRandomNumber(2, 4), alienAccuracyNum(.6, .8)),
]

console.log("========================Alien Ship==========================")
console.log(aliens[0])
// aliens[0].attacksYou()


//===================================Battle Begins======================================

// Now that we have our ship and the alien ships with completed property values for 
// name, hull, firepower and accuracy we need to get them to battle/attack each other

// Notes: attacks is a repeated action in the game
// this will necessitate a loop or multiple loops

// Nested loops- try to avoid this
// Perhaps keeping it to one loop somehow will 
// help us avoid unnecessary difficulties.

console.log("========================Attack test==========================")

// let counterAttack = 

myShip.attacks(aliens[0])
// myShip.attacks(aliens[0]) // all this does at this point in take in the names and chance of a hit

// I need some sort of condition here that considers the hit accuracy of my ship 
// as it relates to the aliens.

// what just happened when I called the function myShip.attacks(aliens[0])
// is my accuracy was not within the .7 range to take a shot at the aliens.

// but in my attackAlienDamage formula to subtract the alien's hull number 
// from my firepower number is higher than the alien's hull number
// the console ran and made it look like I took a shot
// and destroyed the alien ship

// But I never should have been able to shoot in the first place--
// because i was outside my accuracy threshold. 

// there needs to be something that says IF my accuracy threshold is within range
// THEN execute the attack (subtract their hull from my firepower)

// let executeAttack = 


// IF the accuracy number of my ship is within the .7 range
// then the alien ship hull value is subtracted from my firepower number


// I need to subtract the alien ship's hull number from my firepower number 
// to determine the impact of the hit

// something like this: 
// console.log(`The ${aliens[0].name } hull can take ${aliens[0].hull} impact points of damage. Your firepower impact is ${myShip.firePower} points.`)

// let attackAlienDamage = aliens[0].hull - myShip.firePower
// if (attackAlienDamage > 0) {
//     console.log(`PREPARE FOR COUNTER ATTACK! ${aliens[0].name} survived your attack and has ${attackAlienDamage} hull points remaining`)
// }
// if (attackAlienDamage <= 0) {
//     console.log(`${myShip.name} destroyed the ${aliens[0].name} ship! Their ship had ${attackAlienDamage} hull points remaining`) 
// }
// console.log(attackAlienDamage)
// console.log(`${aliens[0].name} has ${attackAlienDamage} hull points remaining!`)

// Here's what one round will look like:

// 1. You attack the first alien ship
    // Remember your chance of attack is based on your accuracy.
    // firepower is the amount of damage done to the hull of target

    // if you hit the ship, the amount of damage done to the alien ship
    // is their hull number subtracted from your firepower number

    // if their hull value after the attack is above 0, 
    // they survived to attack you back

    // if their hull reaches 0 on the first shot,
    // their ship is destroyed


// 2. If the alien ship survives, it attacks you
    // if my hull reaches 0, my ship is destroyed


// 3. If my ship survives, I attack the ship again
    // if their hull reaches 0, their ship is destroyed


// - 4. If I destroy the alien ship,
    // - I have the option to retreat or attack the next alien ship


// SYNTAX: Access object properties:
// 1. dot notation: objectName.propertyname
// 2. objectName[propertyName]

// SYNTAX: Accessing object methods:
// objectName.methodName()



// What i was trying to do: 
// pass the aliens array through my attack function

    // aliens.hull = aliens.hull - this.firePower;
    // console.log("The alien target has " + aliens.hull + " points left");

        // if(aliens.hull < 0 ) {
        //     aliens.isAlive = false;
        //     console.log("The alien ship is destroyed!")
        // }


//===================================Game Object======================================

// Step 4: Make the game object

// Step 4: Make the game object
// const game = {
//     round: 0,
//     targetShip: 0,
//     userResponse: "",
//     battles : function(myShip, aliens) {
//         for(let i = 0; i < aliens[i].length; i++) {
//             if(aliens[i].hull > 0) {
//                 aliens[i].attacksYou(myShip);
//             }else if(myShip.hull > 0) {
//                 console.log("Aliens defeated! Do you want to continue?")
//                 return;
//             }else {
//                 console.log(`You were defeated. Thanks alot Earth is toast!`)
//             }
//         }
//         return myShip + " battles " + target
//     }
// };
// console.log(game.battles()) // returns undefined battles undefined