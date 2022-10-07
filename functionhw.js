// REQUIREMENTS: 
// Define and code the functions below.

// 1. Define the functions using the approach as specified 
    // (either as a function expression or declaration).

// 2. Be sure to number each function with a comment above it.

// 3. After each function, call it at least once and console.log the results.

/*
    function declaration syntax:
    function functionName(x, y) { statements... return (z) };

    function expression syntax (anonymous):
    function functionName(x, y) { statements... return (z) };

    function expression syntax(named):
    let variableName = function functionName(x, y) 
{ statements... return (z) };

    arrow function syntax: 
    let variableName = (x, y) => { statements... return (z) }; 
*/

// 1. 
// Define a function, as a function declaration, maxOfTwoNumbers 
// that takes two numbers as arguments and returns the largest of them. 
// If they are the same, return that number. 

// Use the if-else construct or a ternary expression 
// - the Math.max method is not allowed.

// 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  // Answer:
  //console.log(maxOfTwoNumbers(3, 9));
  
  // 2.
// Define a function, as a function expression, 
// maxOfThree that takes three numbers as arguments 
// and returns the largest of them. 
// Again, the Math.max method is not allowed.

// function expression syntax:
// const x = function (a, b) {return a * b}

const maxOfThree = function (num1, num2, num3) {
    if ((num1 >= num2) && (num1 >= num3)) {
        return num1;
    } 
    else if ((num1 <= num2) && (num2 >= num3)) {
        return num2;
    }
    else if ((num1 <= num3) && (num2 <= num3)) {
        return num3;
    }
    else{
        console.log("Nothing")
        return "nothing"
    }
}

console.log(maxOfThree(10,20,30))

// 3.

// Define a function, as a function declaration, isCharAVowel
// that takes a character/letter as an argument ((i.e. a string of length 1))
//and returns true if it is a vowel, false otherwise.

// Using a switch statment: 

// function isCharAVowel(someCharacter) {
//     let vowels = ["a", "e", "i", "o", "u"]
//     for (let i in vowel)
//     if (someCharacter === vowels) {
//         return true
//     } else{
//         return false
//     }
//     isCharAVowel()
// }
// console.log(a)
function isCharAVowel(someCharacter) {
    switch(someCharacter) {
        case "a": 
            return true
            break
        case "e":
            return true
            break
        case "i":
            return true
            break
        case "o":
            return true
            break
        case "u":
            return true
            break
        default:
            return false
            break
    }
}
console.log(isCharAVowel("a"))

// 4.
// Define a function, as a function expression, sumArray 
// that takes in an array of numbers
// // and returns the sum of those numbers.
        // For example, sumArray([2, 4, 5]);would return 11.
// if we don't know how many arguments are in the array, we can use the spread operator

const sumArry = function (randomArrayOfNumbers) {
    let sum = 0
    for (let i = 0; i < randomArrayOfNumbers.length; i++) {
        sum = randomArrayOfNumbers[i] + sum
    }
    return sum
}
console.log(sumArry([1,2,4,5]))

//5.
// Define a function, as a function declaration, multiplyArray
// that takes an array of numbers and returns the product of those numbers. 
// For example, multiplyArray([2, 4, 5]);would return 40.

function multiplyArray(arrayOfNums) {
    let total = 1
    for (let i = 0; i < arrayOfNums.length; i++) {
        total = arrayOfNums[i] * total
    }
    return total
}
console.log(multiplyArray([2,3]))

//6.
// Define a function, as a function expression, numArgs 
// that returns the number of arguments 
// passed to the function when called.

const numArgs = function (...numOfArguments) {
    // count and add the number of arguments
    return numOfArguments.length
}
console.log(numArgs(1, "hello", "georgia", 25, "latisha", "jermaine", "help please!"))

//7.
// Define a function, as a function declaration, reverseString 
//that takes a string, reverses the characters, and returns it. 
// For example, reverseString('rockstar');would return the string "ratskcor".

function reverseString(randomStringWeWillReverse) {
    // there is a method to reverse ... 
    let reversedStr = "";

    for (i = randomStringWeWillReverse.length - 1; i >= 0; i--) {
        reversedStr += randomStringWeWillReverse[i]
    }
    return reversedStr
}
console.log(reverseString("stacey"))

//8.
// Define a function, as a function expression, longestStringInArray 
//that takes an array of strings as an argument and returns the length of the longest string.

const longestStringInArray = function (strArray) {
    let longest = 0;
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i].length > longest) {
            longest = strArray[i].length;
        }
    }
    return longest;
}
let result = longestStringInArray(["hi", "bye", "hello", "good morning"])
console.log(result)

//9.
// Define a function, as a function declaration, stringsLongerThan that 
// takes an array of strings and a number as arguments (stringArrayOne), 
//and returns an array of the strings that are longer than the number passed in. 
// For ex, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].

function stringsLongerThan(stringArrayOne, randomNum) {
    // declare a variable
    const newArray = [];
    // we want to look at each of the things in an array
    for (let i = 0; i < stringArrayOne.length; i++) {
        if (stringArrayOne[i].length > randomNum) {
            newArray.push(stringArrayOne[i])
        }
    }
        return newArray;
}
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning', 'tomorrow', 'good'], 4))