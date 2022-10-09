// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
// Reference: https://www.geeksforgeeks.org/static-methods-in-javascript/
// Reference: https://www.javascripttutorial.net/es6/javascript-static-method/
// Reference: https://www.w3schools.com/js/js_class_static.asp

//============Static Methods & Static Properties Notes===============
// - The static keyword defines a static method or property
// - Neither static methods or static properties can be called on additional instances of the class object
// - Static methods and static properties can only be called on the class object itself
// - Static properties are data you would not want replicated across instances (think about what is specific to this Governor)

// Static methods are defined on the class itself
// Cannot call static methods on an object/ instance (Ford) of the class, only on the object of the class (Car)

                // class Car {
                //     constructor(name) {
                //       this.name = name;
                //     }
                //     static hello() {
                //       return "Hello Car Class!!";
                //     }
                //   }
                
                //   let myCar = new Car("Ford");

                //   console.log(Car.hello()) == Hello Car Class!!
                //   console.log(myCar.hello()) = ERROR MESSAGE. Trying to instantiate a static method

// ================== Example from the Canvas lesson============================
// class Governor {
//     static greet(){
//       console.log('Hi')
//     }
  
//     static doAnother(){
//       console.log('yo')
//     }
  
//     static veto(){
//       console.log('hey')
//     }

//   }
  
//   Governor.veto()
//   Governor.doSomething1()
//   Governor.doAnother()

//============DIRECTIONS============
// 1. Create a class object called Governor
//  - There is only one Governor in the state (don't instantiate)
// 2. Add static properties you'd expect a Governor to have. (name, age, gender, party affiliation, election year)
// 3. Add static methods/functions you'd expect only this Governor to do - verbs (greets)
// 3. Console log the properties and test the methods
//  - These static methods and properties only work for the Governor class as a whole
//  - These do not work on specific instances (think about what only your Governor can do)
//  - Note there is no constructor because we only want these properties and methods to exists for this one class
//  - Does it matter if you put the methods first or the properties first?


class Governor {
        //======static methods======
    static greets () {
        return ("Hello, my name is Brian Kemp. I was elected Georgia's Governor in 2019");
    }

    static begs () {
        return ("Please vote for me to keep my seat another 4 years. Please donate your hard earned money to me.");
    }

    static promises () {
        return ("I promise to make Georgia #1 for small businesses. I promise to lower costs, improve quality, and increase access to quality healthcare in every region. I promise to expand access to mental health resources in schools for children and young adults.");
    }

    static campaigns () {
        return ("Mitch McConnell and I are going on a roadtrip to talk to people and avoid critical questions regarding women's rights.");
    }

    static vetoes () {
        return ("I veto Senate bills and House bills.");
    }

    static signs () {
        return ("I sign Senate and House bills into legislation.");
    }

        //=======static properties =====
        //(full name, birthdate, party affiliation, election year)

    static fullName = ("Brian Porter Kemp")
    static birthdate = ("November 2, 1963")
    static partyAffiliation = ("Republican")
    static electionYear = (2019)

}
console.log("========== Logging the fullName property of Governor class ==========")
console.log(Governor.fullName)
console.log("========== Logging the birthdate property of Governor class ==========")
console.log(Governor.birthdate)
console.log("========== Logging the party affiliation property of Governor class ==========")
console.log(Governor.partyAffiliation)
console.log("========== Logging the election year property of Governor class ==========")
console.log(Governor.electionYear)


console.log("========== Governor Brian Kemp greets ==========")
console.log(Governor.greets())
console.log("========== Governor begs ==========")
console.log(Governor.begs())
console.log("========== Governor promises ==========")
console.log(Governor.promises())
console.log("========== Governor campaigns ==========")
console.log(Governor.campaigns())
console.log("========== Governor vetoes ==========")
console.log(Governor.vetoes())
console.log("========== Governor vetoes ==========")
console.log(Governor.signs())
