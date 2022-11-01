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








// ===============================1. Make the ship object.  =====================================

const myShip = {
    name: "uss Defender",
    hull: 20,
    firepower: 5,
    accuracy: .7,
    isAlive: true,
    attacks(target) {

        let chanceOfAttack = Math.random();

        if(chanceOfAttack < this.accuracy) {
            console.log(`SUCCESSFUL HIT! Your ship, the ${myShip.name} hit the hull of the ${alienShip.name} alien ship!`);

            console.log(`Your firepower impact was ${myShip.firepower} points. ${alienShip.name} started with ${alienShip.hull} hull points`)

            target.hull = alienShip.hull - myShip.firepower
            console.log(`${alienShip.name} ship has ${target.hull} hull points left`);
            
            if(target.hull <=0) {
                target.isAlive = false;
                console.log(`Target destroyed!`) 
            }
            return true;

        } else {
            console.log("You missed the target")
            return false;
        }
    }
};    



// console.log(myShip)



// ===============================2. Make a single alien ship object. ===========================

const alienShip = {
    name: "Celestials",
    isAlive: true,
    hull: Math.floor(Math.random() * (6 - 3 + 1) + 3),
    firepower: Math.floor(Math.random() * (4 - 2 + 1) + 2),
    accuracy: Math.random() * (.8 - .6) + .6,
    attacksYou: function() {

        let chanceOfAttack = Math.random();

        if(chanceOfAttack < this.accuracy) {
            console.log(`IMPACT SUSTAINED! Alien ship, the ${alienShip.name} hit the hull of the ${myShip.name} !`);

            console.log(`Alien firepower impact was ${alienShip.firepower} points. ${myShip.name} started with ${myShip.hull} hull points`)

            myShip.hull = myShip.hull - alienShip.firepower
            console.log(`${myShip.name} ship has ${myShip.hull} hull points left`);

            if(myShip.hull <=0) {
                myShip.isAlive = false;
                console.log(`Alien destroyed your ship!`) 
            }
            return true;

        } else {
            console.log(`${alienShip.name} aimed at you and missed!`)
            return false;
        }
    }
};





// ============3. Simulate a battle between your ship and a single alien ship first. =============
console.log("==================YOU INITIATE ATTACK: ================================")

myShip.attacks(alienShip)

// =====================================4.  Make a game object =====================================
const game = {
    round: 0,
    targetShip: 0,
    userResponse: "",
    battles : function() {
        console.log(myShip.name + " battled " + alienShip.name)
    },
    checkswin: function() {        
        if(alienShip.hull > 0) {
            console.log(`${alienShip.name} is still alive with ${alienShip.hull} hull points`)

            console.log("==================ALIEN ATTACK: ================================")

            if(myShip.hull > 0) {
                alienShip.attacksYou()
                console.log(`${myShip.name} remains with ${myShip.hull} hull points`)

                console.log("==================MY SHIP'S SECOND ATTACK: ================================")

                if(alienShip.hull > 0) {
                    myShip.attacks(alienShip)
                    console.log(`${alienShip.name} remains with ${alienShip.hull} hull points`)

                    console.log("==================ALIEN'S SECOND ATTACK: ================================")
                    if(myShip.hull> 0) {
                        alienShip.attacksYou()
                        console.log(`${myShip.name} has ${myShip.hull} hull points remaining`)
                        console.log(`Time to end this ${alienShip.name}!`)
                        
                        console.log("==================MY SHIP'S THIRD ATTACK: ================================")
                        if(alienShip.hull > 0) {
                            myShip.attacks(alienShip)
                            console.log(`${alienShip.name} has ${alienShip.hull} hull points remaining`)
                            console.log(`For the love of God they better be dead!`)


                                console.log("==================ALIEN'S THIRD ATTACK: ================================")
                                if(myShip.hull > 0) {
                                    alienShip.attacksYou()
                                    console.log(`${myShip.name} has ${myShip.hull} hull points remaining`)
                                    console.log(`This is Satan's spawn!`) 
                                }

                                console.log("==================MY SHIP'S FOURTH ATTACK: ================================")
                                if(alienShip.hull > 0) {
                                    myShip.attacks(alienShip)
                                    console.log(`${alienShip.name} has ${alienShip.hull} hull points remaining`)
                                    console.log(`If they aren't dead by now- y'all need to call Guardians of the Galaxy- I am just one person!`)
                                }

                                    console.log("==================ALIEN'S FOURTH ATTACK: ================================")
                                    if(myShip.hull > 0) {
                                        alienShip.attacksYou()
                                        console.log(`${myShip.name} has ${myShip.hull} hull points remaining`)
                                        console.log(`Time to end this ${alienShip.name}!`)
                                    }
                                }
                            }
                            return true; 
                        } else {
                            if(alienShip.hull <= 0 )
                            console.log(`${alienShip.name} ship is defeated. You blew up their ship!`)
                            return false;
                        }
                    }
                }
            }
        }

// console.log("==================Testing the game battle and health functions ================================")


game.battles()
// game.checkswin(alienShip)
game.checkswin(myShip)


