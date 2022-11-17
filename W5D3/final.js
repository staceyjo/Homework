//===================================NOTES======================================

// Game of battling spaceships using JS

// Who are the actors: my ship and the alien ships(6)
// What are the actions: my ship attacks, alien ship attacks, my ship retreats

// PSUEDDO CODE: 
// 1. Make ship object: COMPLETE

// 1b. Make method for your ship object to attack a given target: COMPLETE
    // The target can be an input to the method
    // Run the method and pass it the alien ship.
    // Make it so the method reduces the target's hull by the firepower of the your ship.

// 2. Make single alien object: COMPLETE

// 3. Simulate a battle between your ship and the single alienShip object: COMPLETE

// 4. Make a game object: COMPLETE

// 4.b. Make a method in the game object that will run a 'check win' - IN PROGRESS
    // The method should check for the health of the alien(s) and/or the your ship. 


// 5. If the hull is 0 or less, display a message that the ship went kabloo-ey.

// 6. Make it so the alienShip will only be hit - IN PROGRESS
// if a Math.random call is below the accuracy threshold.

// 7. Make a method for the alien ship to attack a target
// - At a status console log for the end of the round.

// - PROBLEM: If you make the alien ship go kabloo-ey, 
// then the alien should not then be able to attack you. Fix this.-- NEED HELP

// - Make it so the attacks will keep occuring until someone's hull is at 0. 

// Isolate what it is that you want to repeat.

// 8. Make many alien ships with a Class. Make each object slightly different

// 9 Make a loop that calls the Class and generates alien ships. 

// 10. Push those constructed objects into a predefined array. 

// 11. Start with 6 ships (the loop should run 6 times).

// 12. Try out the game with the first alien ship in the array.

// 13. Run the battle with all ships in turn.

// 14. Move functions into the game object.

// - Move on to the bonuses.


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

//============================================MY SHIP OBJECT================================
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



//============================================MY SHIP OBJECT================================

const myShip = {
    name: "USS Defender",
    hull: 20,
    firepower: 5,
    accuracy: .7,
    isAlive: true,
    attacks(target) {

        let chanceOfAttack = Math.random()


        if (chanceOfAttack < this.accuracy) {
            console.log("=========================MY SHIP ATTACKS=========================")

            console.log(`-----------STATS FOR ${myShip.name}-----------`)
            console.log(`     HULL: ${myShip.hull}, FIREPOWER: ${myShip.firepower}, ACCURACY:${myShip.accuracy}    `)

            console.log(`${myShip.name} accuracy threshold is: ${chanceOfAttack}`)
            console.log(`Successful Hit! ${myShip.name}'s accuracy within range of ${target.name} alien ship`)

            // If i hit
            target.hull = target.hull - this.firepower
            console.log(`${this.name} hit target, ${target.name} has ${target.hull} point(s) remaining`)

            if (target.hull <= 0) {
                target.isAlive = false;
                console.log(`${target.name} alien ship destroyed! ${myShip.name} SAVED THE PLANET`)
            }
        }

        else {

            console.log("=========================MY SHIP ATTACKS=========================")
            console.log(`-----------STATS FOR ${myShip.name}-----------`)
            console.log(`     HULL: ${myShip.hull}, FIREPOWER: ${myShip.firepower}, ACCURACY:${myShip.accuracy}    `)

            console.log(`${myShip.name} accuracy threshold is: ${chanceOfAttack}`)
            console.log(`OH NO! You overshot! Your ship, the ${myShip.name} MISSED! Accuracy outside range of ${target.name} alien ship target`)
        }

    }
}

//============================================ALIEN SHIP CLASS================================
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
    constructor(name) {
    this.name= name
    this.hull= Math.floor(Math.random() * (6 - 3 + 1) + 3),
    this.firepower= Math.floor(Math.random() * (4 - 2 + 1) + 2)
    this.accuracy= Math.random() * (.8 - .6) + .6
    this.isAlive= true
    }
    attacks() {
        let chanceOfAttack = Math.random();

        if (chanceOfAttack < this.accuracy) {
            console.log("=========================ALIEN SHIP ATTACKS=========================")
            console.log(`-----------STATS FOR ${this.name}-----------`)
            console.log(`     HULL: ${this.hull}, FIREPOWER: ${this.firepower}, ACCURACY:${this.accuracy}    `)
            console.log(`IMPACT SUSTAINED! ${this.name} alien ship hit ${myShip.name}! There is damage to your hull!`)


            // If they hit me
            myShip.hull = myShip.hull - this.firepower
            console.log(`${myShip.name} has ${myShip.hull} point remaining`)

            if (myShip.hull <= 0) {
                myShip.isAlive = false;
                console.log(`${this.name} destroyed ${myShip.name} ship !`)
            }
        }

        else {
            console.log("=========================ALIEN SHIP ATTACKS=========================")
            console.log(`-----------STATS FOR ${this.name}-----------`)
            console.log(`     HULL: ${this.hull}, FIREPOWER: ${this.firepower}, ACCURACY:${this.accuracy}    `)
            console.log(`CLOSE ONE! Alien ship ${this.name} missed your ship, the ${myShip.name}`)
        }

    }

}

//============================================ALIEN FLEET================================

const aliens = [
    new AlienShip("Celestials"),
    new AlienShip("Cybertronians"),
    new AlienShip("Decpeticons"),
    new AlienShip("Galactus"),
    new AlienShip("Hydra"),
    new AlienShip("Jawa",)
]


//============================================GAME OBJECT================================
// Now that we have our ship and the alien ships with completed property values for 
// name, hull, firepower and accuracy we need to get them to battle/attack each other

// Notes: attacks is a repeated action in the game
// this will necessitate a loop or multiple loops

// Nested loops- try to avoid this
// Perhaps keeping it to one loop somehow will 
// help us avoid unnecessary difficulties.

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

//===================START GAME=============================
game()

// const attackButtonEl = document.getElementById("attack-button")

// attackButtonEl.addEventListener("click", (evt) => {
//     console.log("Attack")
//     attackButtonEl.classList.toggle("hide")
//     attacks()
// }) 

// const retreatButtonEl = document.getElementById("retreat-button")
// retreatButtonEl.addEventListener("click", (evt) => {
//     console.log("Attack")
//     retreatButtonEl.classList.toggle("hide")
//     retreat()
// }) 

const game = function () {
    console.log("The game has started!")
    console.log(myShip)
    console.log(aliens)
    

    let response = ""

    // while (myShip.isAlive && response !== "retreat") {
        for (let i = 0; i < aliens.length; i++) {
            while (myShip.isAlive && aliens[i].isAlive) {
                myShip.attacks(aliens[i])


                if (aliens[i].isAlive) {
                    aliens[i].attacks()
                }
            }
            if (myShip.isAlive) {
                response = prompt(`Please type "attack" or "retreat" to continue. `)
                if (response == "retreat") {
                    console.log("Thank you for playing. Game over!")
                    break
                } else {
                    console.log("Attacking next alien ship")
                }
            }
        }
    // }
    if(!myShip.isAlive) {
        console.log("You lost the game. Aliens win!")
    }
    else if(response !== "retreat") {
        console.log("You destroyed all the aliens in the fleet! Congrats you won the whole game!")
    }
}

game()