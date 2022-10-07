/**
 * Functions Continued
 * 

Things to remember
* DRY - Don't Repeat Yourself 
* Good input (Garbage in garbage out)
*/

// 2 Ways to write a function

// Function Declaration
//   //function declarations will be hoisted to the top.
// function sayHello (name) {
//     console.log("hell " + name + "!")
// }

// sayHello("Toby")

// // Function Expression

// const sayHelloAgain = function (name) {
//     console.log(name)
//     console.log("Hello" + name + "!")
// }

// sayHelloAgain("Mina")

// // Arrow Functions 
// // arrow functions cannot hoist

// const add = (num1, num2) => num1 + num2

// console.log(add(8237456, 2))

// // Arrow Functions 
// // With an example of default parameters

// const addAgain= (num1 = 10, num2 = 15, num3 = 5) => num1 + num2 + num3

// console.log(addAgain(70,50,30))

// function areBothEven(n1, n2) {
//     return !(n2 % 2) && !(n2 % 2);
// }

// console.log(areBothEven(2,6))

// function areBothEvenAgain(n1, n2) {
//     if(typeof n1 !=="number" || typeof n2 !== "number") {
//         console.log("is not a number")
//         return
//     }else {
//         return !(n2 % 2) && !(n2 % 2);
//     }
// }

// // 0 is falsey
// // anything that isn't zero is truthy

// const arr = [1,2,3]

// if (arr.length) {
//     console.log("I have elements!!")
// } else {
//     console.log("I'm empty:")
// }

// // Example of truthy and falsey in a real scerniao
// // const arr = []

// // if (arr.length) {
// //   console.log("I have elements!!")
// // } else {
// //   console.log("i'm empty:(")
// // }


// // console.log(areBothEven(2, 8))


// // Parameters/Arguments 
// function bottleCapper( bottle /** parameters */, cap) {
//     return bottle + cap;
//   }
//   //console.log(bottle) ReferenceError
//   bottleCapper("green bottle (arugment)", " white cap (argument)")
  
//   // Spread Operator 
//   function getDevObject(name,age, ...skills) {
//     console.log(skills)
  
//     return {
//       devName: name,
//       age: age,
//       jobSkills: skills
//     };
//   }
  
//   console.log(getDevObject("Betty", 1298736,"awesome", "cool"))
  
  
//   // Objects
//   // Key/value pairs
//   const arr1 = [1,2,34,3] // Bracket notation
//   const person = { // Dot notation
//     name: "Mina",
//     job: "developer",
//     isAwesome: true,
//     skills: ["coding", "something else"],
//     pet: {
//       name: "fido"
//     }
//   }
//   //console.log(person.pet.name)
  
//   const arrOfObj = [
//     {
//       username: "blah",
//       emaill: "alksdj@gmail.com"
//     },
//     {
//       username: "blah",
//       emaill: "alksdj@gmail.com"
//     },
//     {
//       username: "blah",
//       emaill: "alksdj@gmail.com"
//     },
//     {
//       username: "blah",
//       emaill: "alksdj@gmail.com"
//     },
//   ]

// // Default Parameters
// //   // old way to set default parameter
// // function setColor(bicycle, color) {
// //     bicycle.color = color || "purple"
// // }

// // Default Parameters
// const bicycle = { 
//     brand: "mongoose",
//     color: "red"
//   }
//   // ES5
//   // function setColor(bicycle, color) {
//   //     bicycle.color = color || "purple"
//   // }
//   // setColor(bicycle)
  
//   // console.log(bicycle)
  
//   // ES6
//   function setColor(bicycle, color = "purple") {
//     bicycle.color = color 
//   }
  
//   setColor(bicycle)
  
//   console.log(bicycle)

  // Functions as arguments

const a = ['red', 'green', 'blue']

  a.forEach(function(color) {
    console.log(color)
  })

  // Scope 

  const num = 4

  function foo(x) {
    const b = num * 4

    function bar(y) {
        const c = y * b
        return c
    }

    return bar(b)
  }

  console.log(foo(num))

  // Office hours
  const bicycleObj = {
    brand: "mongoose",
    color: "red"
}

function setColor(bicycleObj, newColors) {
    bicycleObj.color = newColors || "purple"
}                   

setColor(bicycleObj, "green")

console.log(bicycleObj)