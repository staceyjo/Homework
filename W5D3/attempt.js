// Game of battling spaceships using JS

// Who are the actors: my ship and the alien ships(6)
// What are the actions: my ship attacks, alien ship attacks, my ship retreats

// NOTES: 

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
    display("demo2", myShip.name)
    display(`demo1", "my ship's inital hull:  ${myShip.hull}`)
    display(`demo1", "my ship's remaining hull: ${remainingHull.hull}`)
    display("demo3", "starting a new game, opponent 1")
    document.getElementById("demo5").innerHTML = "starting a new game, opponent #2"

    display("demo4", "starting a new game, opponent #4")
    display("final outcome", "======================")

    console.log(myShip)

    // DEFINE ALIEN SHIPS inside game funtion?
}







const myShip = {
    name: "uss Defender",
    hull: 20,
    firePower: 5,
    accuracy: 0.7,
    isAlive: true,
    //remaining hull: this.hull - target.firepower
    getStats: function() {
        console.log(this.hull, this.firepower, this.accuracy)
    },
    attacks: function(target) { // the target is the placeholder for the aliens we'll loop through
        console.log("=====================MY SHIP ATTACKS=====================")

        // determines a random number when I attack
        let chanceOfAttack = Math.random();
        
        // MY INITAL ATTACK: I AIM & MISS
        // If my chance of attack falls outside accuracy, greater than .7, you miss the target:
        if(chanceOfAttack > this.accuracy) {
            console.log(`${myShip.name} accuracy outside range! Your accuracy threshold is: ` )
            console.log(chanceOfAttack)
            console.log(`OH NO! ${myShip.name} MISSED the ${target.name} alien ship! PREPARE FOR COUNTER ATTACK!`);
            console.log(`${target.name} has a firepower of ${target.firePower} and ${target.hull} hull points`)
            console.log(`${myShip.name} ship has ${myShip.hull} hull points`);
            
            // ALIEN COUNTER AFTER I MISS ON MY INITAL ATTACK:
            // If you miss the target, it means they are still alive
            // If they are alive, their hull is greater than 0
            // If they are alive, they will try to attack you .6 <targetaccuracy > .8
            // In order to sustain impact, their accuracy threshold needs to be within range.
            if(target.hull > 0 && target.accuracy > .6 && target.accuracy < .8) {
                target.isAlive = true;
                let myremainingHull = myShip.hull - target.firePower
                console.log("=====================ALIEN ATTACKS=====================")
                target.attacksYou(myShip)
                console.log(`You're under attack! ${target.name} have a firepower of ${target.firePower}`)
                console.log(`${myShip.name} ship started with ${myShip.hull} hull points`)
                console.log(`${myShip.name} ship has ${myremainingHull} hull points remaining`)

                // I missed, they hit me, they are still alive, I can atack them
                if(myShip.hull > 0) {
                    console.log("=====================MY COUNTER ATTACK=====================")
                    myShip.attacks(target)

                }


                // IF I attack and miss, then they attack and miss
                // I can return an attack
            } else if(target.hull > 0 && target.accuracy < .6 || target.accuracy < .8) {
                console.log(`They missed! ${target.name} had a firepower of ${target.firePower}`)
                console.log(`${myShip.name} has ${myShip.hull} hull points still remaining`)
                myShip.attacks(target)
            }


        }
        
        // MY INITAL ATTACK: I AIM & HIT THE TARGET
        // If my chance of attack falls within accuracy range, (accuracy less than .7), that means I hit the target
        if(chanceOfAttack < this.accuracy) {
            console.log(`${myShip.name} accuracy within range! Your accuracy threshold is: ` )
            console.log(chanceOfAttack)
            console.log(`SUCCESSFUL HIT! The ${myShip.name} hit the hull of the ${target.name} alien ship!`);
            
            // If I hit the target, their hull takes damage from my firepower:
            // Here I define my firepower and the starting level of their hull points 
            console.log(`${myShip.name} firepower points: ${myShip.firePower} points.`)
            console.log(`${target.name} started with ${target.hull} hull points`)


            // Successful hit results: subtracting my firepower from their hull
            hullremaining= target.hull - this.firePower
            console.log(`HIT UPDATE : ${target.name} ship hull points post attack:  ${hullremaining}`);
            
            // If they have 0 or below  hull point
            // It means they're dead and you destroyed tehir ship
            if(hullremaining <= 0) {
                target.isAlive = false;
                console.log(`${target.name} target ship destroyed! YOU SAVED THE PLANET!`) 
            }
            
            // If their hull is greater than 0, they're still alive
            // If they are alive, they will try to attack you, 
            // If they attack you, their accuracy has to fall within their accuracy threshold
            // Their accuracy threshold is between .6 < target.accuracy > .8
            // if they fall inside of that- they hit you
            // if target.accuracy < .8 && target.accuracy > .6) {

            if(hullremaining > 0 && target.accuracy < .8 && target.accuracy > .6) {
                target.isAlive = true;
                console.log(`Prepare for counter attack! ${target.name} have a firepower of ${target.firePower}`)
                console.log(`${myShip.name} ship has ${myShip.hull} hull points`);
                console.log(`${target.name} getting ready to return fire. Brace ${myShip.name} for impact`)

                console.log("=====================ALIEN COUNTER ATTACK =====================")
                target.attacksYou(myShip)
                let myremainingHull = myShip.hull - target.firePower
                console.log(`${myShip.name} has ${myremainingHull} hull points remaining`)
                console.log(`${myShip.name} man your battle stations! Prepare to return the attack!!`)

                // // MY RETURN ATTACK: This breaks my console.
                // if(myShip.hull > 0) {
                //     console.log("=====================MY COUNTER ATTACK=====================")
                //     myShip.attacks(target)
                // }

                if( hullremaining > 0 && target.accuracy > .8 || target.accuracy < .6) {
                    console.log(`${target.name} accuracy: `)
                    console.log(target.accuracy)
                    console.log("COUNTER ATTACK MISSED! Accuracy outside of threshold!")
                    console.log(`${myShip.name} has ${myShip.hull} hull points remaining`)
                    console.log(`${myShip.name} man your battle stations! Prepare to return the attack!!`)
                    
                    if(myShip.hull > 0) {
                        console.log("=====================MY COUNTER ATTACK=====================")
                        myShip.attacks(target)
    
                    }
    
                }

            }
            
                        
                        // calculating my remaining hull points after an alien attack
                    //     remainingHull = myShip.hull - aliens[0].firePower}
                    //     console.log(`IMPACT! ${myShip.name} just took a hit!`)
                    //     console.log(`${myShip.name}  Hull points remaining: ${remainingHull}`)
                    // }
                    
                    // If my hull is greater than 0- I'm still alive to contine battling
                    // if(remainingHull > 0) {
                    //     console.log(`${myShip.name} is still in this fight to defend Earth!`)
                        
                        // MY SECOND ATTACK
                        // myShip.attacks(aliens[0])
                        // remainingAlienHull = target.hull - this.firePower
                        // console.log(`Alien ship ${aliens[0].name} has ${remainingAlienHull} hull points remaining after the last attack`)
                                
                        // If you attack again and miss:
                    //     if(isAlive=true) {
                    //         aliens[0].attacksYou(myShip)
                    //         remainingHull = myShip.hull - aliens[0].firePower
                    //         console.log(remainingHull)
                    //     }
                        
                    //     if(isAlive = false) {
                    //         console.log(`They can't attack you, they're dead`)
                    //     }
                    // }
                    
                //     if(target.isAlive = false) {
                //         console.log(`They can't attack you! They're dead.`)
                //     }
                // }
                
                // if (myShip.hull < 0) {
                //     myShip.isAlive = false;
                //     console.log("Your ship is destroyed")
                // }
                
                
                // ALIEN ATTACK 1: They're alive if their hull is above 0'
                // if(target.hull > 0) {
                //     target.isAlive = true;
                //     console.log("=====================ALIEN ATTACK=====================")
                    
                //     if(isAlive=true) {
                //         aliens[0].attacksYou(myShip)
                //         remainingHull = myShip.hull - aliens[0].firePower
                //         console.log(`${remainingHull} hull points remaining`)
                    // }
                // }
            }
        
    }
};
        

class AlienShip {
    constructor(name, hull, firePower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy;
    }
    attacksYou() {
        let chanceOfAttack = Math.random();
        console.log("Alien's accuracy threshold is: ")
        console.log(chanceOfAttack)

        
        if (chanceOfAttack < this.accuracy) {
            console.log(`${aliens[0].name} accuracy threshold within range!`)
            console.log(`IMPACT! ${aliens[0].name} alien ship just hit the ${myShip.name}! There is damage to your hull!`);
        }
        else {
            console.log(`${aliens[0].name} accuracy threshold outside range!`)
            console.log(`CLOSE ONE! ${aliens[0].name} alien ship just missed the ${myShip.name} !`)
        }
    }
};

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


console.log("========================My Ship==========================")
console.log(myShip)

console.log("========================Alien Ship==========================")
console.log(aliens[0])

myShip.attacks(aliens[0])