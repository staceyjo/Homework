// Directions:
// 1. Create a person class
// 2. List three properties all people share as parameters (firstName, age, gender)
// 3. Use the constructor function to set the list of the three properties
// 4. List three methods all people share (wakes, eats, drinks, breathes, sleeps)
// 5. Create a PostalWorker class that inherits from the person class
// 6. Add some methods to the PostalWorker class
// 7. Create a Chef class that inherits from the person class
// 8. Add some methods to the Chef class
// 9. Create 2 PostalWorkers instances and 2 Chefs instances
// 10. Console.log them and test all their methods

// To create a class inheritance, use the extends keyword
// A class created  with a class inheritance inherits all the methods/functions from another class

            // 1-3. Create Person class, list 3 properties as parameters, set the paramters using constructor function

class Person {
    constructor(firstName, age, gender, occupation) {
        this.firstnameParam = firstName;
        this.ageParam = age;
        this.genderParam = gender;
        this.occupationParam = occupation;
    }
            // 4. Adding methods/functions to the Person class
    wakes() {
        return ("Good morning! I'm ready to start my day!");
    }
        
    eats() {
        return ("I'm super hungry, let's eat some food.");
    }

    drinksWater() {
        return ("Yum. Water. My life source.");
    }

    breathes() {
        return ("It's involuntary- but gotta love breathing in air.");
    }

    sleeps() {
        return ("Time to get some shut eye!");
    }

    introduces() {
        return ("My name is " + this.firstnameParam + "! I'm " + this.ageParam + ". I identify as a " + this.genderParam + ", and I'm a " + this.occupationParam) + ".";
    }
}
let person1 = new Person("Stacey", "old as dust", "female", "student")
// console.log("---------------------Postal Worker 1: wakes, introduces, sorts and collects----------------------")
// console.log(person1)
// console.log(person1.introduces())
// console.log(person1.wakes())
// console.log(person1.eats())
// console.log(person1.drinksWater())
// console.log(person1.breathes())
// console.log(person1.sleeps())

        // 5. Create a PostalWorker class that extends from the Person class
class PostalWorker extends Person {
    // constructor(firstName, age, gender, occupation, movieQuote) {
    //     super(firstName, age, gender, occupation)
    //     this.movieQuoteParam = movieQuote;
    // }
        // 6. Add some methods/functions to the PostalWorker class

    sorts() {
        return ("I will organize your mail for delievery.")
    }
    collects() {
        return ("I'm taking your outgoing mail and packages to be sent out")
    }
    sells () {
        return ("Would you like a to buy stamps, a money order or mailing supplies today?")
    }

}

console.log("---------------------Postal Worker 1: wakes, introduces, sorts and collects----------------------")

let person2 = new PostalWorker("John Witherspoon", 77, "male", "deceased actor who played a mailman in the movie Friday.")
console.log(person2.wakes())
console.log(person2.introduces())
console.log(person2.sorts())
console.log(person2.collects())

console.log("---------------------Postal Worker 2: introduces, sells, eats, drinksWater, sleeps----------------------")

let person3 = new PostalWorker("Sinbad", 65, "male","actor who played a mailman in the movie Jingle All The Way.")
console.log(person3.introduces())
console.log(person3.sells())
console.log(person3.eats())
console.log(person3.drinksWater())
console.log(person3.sleeps())

        // 7. Create a Chef class that inherits from the Person class
class Chef extends Person {

            // 8. Add some methods to the Chef class
    prepares() {
        return ("I'm chopping and slicing the ingredients, collecting the utensils I'll need and cleaning my workspace.")
    }

    cooks() {
        return ("I'm adding the ingredients to the pan on the stove to cook them")
    }

    plates() {
        return ("I'm placing the food on the plate so it looks pretty and you'll want to take a picture for the Gram.")
    }

}

let person4 = new Chef("Gordon Ramsay", 55, "male", "chef, restaurateur, author and television personality")
console.log("---------------------Chef 1: introduces, prepares, plates----------------------")
console.log(person4.introduces())
console.log(person4.prepares())
console.log(person4.cooks())

let person5 = new Chef("Emeril Lagasse", 62, "male", "chef, restaurateur, television personality, cookbook author")

console.log("---------------------Chef 2: introduces, plates----------------------")
console.log(person5.introduces())
console.log(person5.plates())

