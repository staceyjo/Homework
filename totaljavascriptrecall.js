// JavaScript Total Recall
// I. Variables & Datatypes
// To answer these questions, you can add them in a multiline comment section inside of script.js
// like this:
/*
// 1. How do we assign a value to a variable? A. With the assignment operator

// 2. How do we change the value of a...
*/
console.log("================= VARIABLES & DATA TYPES: A: Q&A =================")

// A. Q + A
// 1. How do we assign a value to a variable?
console.log("A1. We assign a value to a variable by using the assignment operator =")

// 2. How do we change the value of a variable?
console.log("A2.Once you assign the variable using let, you can reassign the variable by using the variable name and the assignment operator. /n for example: \n let number = 0 \n number = 1")

// A. Once you assign the variable using let, you can reassign the variable by using the variable name and the assignment operator
// for example: 
let number = 0
number = 1 

// 3. How do we assign an existing variable to a new variable?
console.log("A3. Once you assign a variable, you can make the new variable equal to the first variable")
let x = 0
let y = x

// 4. Remind me, what are declare, assign, and define?
console.log("A4. Declare is creating a variable using const or let (or var) \n let car","\nAssign is to assign a value using an assignment operator ( =, +=, -=, *=, /=, %=, **=", "\n Define is to give value to a variable so it won't be undefined", "\n car = Honda")
// A4a. Declare is creating a variable using const or let (or var)
let car 
// A4b. Assign is to assign a value using an assignment operator ( =, +=, -=, *=, /=, %=, **=)
car = 

// A4b. Define is to give value to a variable so it won't be undefined
car = "Honda"

// 5. What is pseudocoding and why should you do it?
console.log("A. Psuedocoding is text that helps the programmer describe how to approach the problem- broken down by steps")

// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
console.log("A. It depends on the problem I guess, I would say like 70% of the time is spent breaking down the problem and 30% of the time is actually coding")


console.log("================= VARIABLES & DATA TYPES: B: STRINGS =================")
// B. Strings
// For all other questions that involve writing code, you can solve them via the following instructions.

// 1. Create a variable called firstVariable
console.log("A. let firstVariable")
// let firstVariable

// 2. Assign it the value of the string "Hello World"
console.log("A. let firstVariable = Hello World in quotes")
let firstVariable = "Hello World"

// 3. Change the value of this variable to some number
console.log("firstVariable = 11")
firstVariable = 11

// 4. Store the value of firstVariable in a new variable called secondVariable
console.log("let secondVariable = firstVariable")
let secondVariable = firstVariable

// 5. Change the value of secondVariable to any string.
console.log("secondVariable = This is a string (in quotes)")
secondVariable = "This is a string"

// 6. What is the value of firstVariable?
console.log(firstVariable)
// Output 11

// 7. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
let yourName = "Stacey"
let intro = "My name is "
console.log(intro + yourName)
// ex: Hello, my name is Jean Valjean


console.log("================= VARIABLES & DATA TYPES: C: BOOLEANS =================")
// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Kevin' == 'Kevin');

  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);

  console.log(false == false && false == false || false == true);
  console.log(false == false)
  console.log(e == 'Kevin');
  console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 !== '48');


console.log("================= VARIABLES & DATA TYPES: D: THE FARM =================")
// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
// Commit

let animal = "cow";
if (animal == "cow") {
    console.log ("mooooo")
} else {
    console.log ("Hey, you're not a cow")
}
// animal = "cow"
// animal = "horse"


console.log("================= VARIABLES & DATA TYPES E: DRIVER'S ED =================")
// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
let age = 15;
if (age >= 16) {
    console.log("Here are the keys!")
} else if (age < 16) {
    console.log("Sorry you're too young.")
}

// II. Loops
// Remember: USE let when you initialize your for loops!
// This is GOOD: for(let i = 0; i < 100; i++)
// This is NO GOOD: for(i = 0; i < 100; i++)

console.log("================= LOOPS A1: The basics =================")
// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive

for(let numbers = 0; numbers <= 10; numbers++) {
    console.log(numbers);
}


console.log("================= LOOPS A2: The basics =================")
// Write a loop that will print out all the numbers from 10 up to and including 400
for(let moreNumbers = 10; moreNumbers<=400; moreNumbers++) {
    console.log(moreNumbers)
}


console.log("================= LOOPS A3: The basics =================")
// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for(let evenMoreNumbers = 12; evenMoreNumbers<=4000; evenMoreNumbers++) {
    if (evenMoreNumbers % 3 === 0) {
        console.log(evenMoreNumbers)
    }
}

console.log("================= LOOPS B: GET EVEN =================")
// B. Get even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let getEven = 1; getEven <=100; getEven ++) {
    if(getEven % 2 == 0) {
        console.log(getEven + " is an even number")
    } else {
        console.log(getEven)
    } 
}


console.log("================= LOOPS C: GIVE ME FIVE =================")
// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Example Output:

for (giveMeFive = 0; giveMeFive <=100; giveMeFive ++) {
    if (giveMeFive === 0) {
        console.log(`I found a ${giveMeFive}`)
    } else if (giveMeFive % 5 == 0 && giveMeFive % 3 == 0) {
        console.log(`I found a ${giveMeFive} High five! Three is a crowd.`)
    } else if (giveMeFive % 5 == 0) {
        console.log(`I found a ${giveMeFive} High five!`)
    } else if (giveMeFive % 3 == 0) {
        console.log(`I found a ${giveMeFive} Three is a crowd`)
    } else {
        console.log(`I found a ${giveMeFive}`)
    }
}


console.log("================= LOOPS D: SAVINGS ACCOUNT =================")
// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.

let sum = 0
for (let bank_account = 1; bank_account <=10; bank_account++) {
    sum = sum +bank_account
}
console.log(sum)


console.log("================= LOOPS D: SAVINGS ACCOUNT Bonus =================")
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in i
sum = 0
for(let bank_account_bonus = 1; bank_account_bonus <=100; bank_account_bonus++) {
    sum = sum + bank_account_bonus*2
}
console.log(sum)


console.log("================= ARRAYS & CONTROL FLOW: A1. Talk About It =================")
// III. Arrays & Control flow

// A. Talk about it:
// 1. What are the things in an array called?
console.log("1. A: The items in an array are called elements. The items/elements can be objects. The items/elements hold values.")
// An array is a type of variable that holds more than one value as a list of items that are separated by commas, contained in square brackets.


console.log("================= ARRAYS & CONTROL FLOW: A2. Talk About It =================")
// 2. Do Arrays guarantee those things will be in order?
console.log("2. A: Items contained within an array are ordered by their index number. The first element in the array starts at index number 0.")
// You can use the array sort method to arrange in alphabetical order


console.log("================= ARRAYS & CONTROL FLOW: A3. Talk About It =================")
// 3. What real-life thing could you model with an array?
console.log("3. A: You could model days of the week as an array. \n const = daysOfTheWeek=", "[", "Monday,", "Tuesday,", "Wednesday,", "Thursday,", "Friday","]")

const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
//console.log(daysOfTheWeek[0])


console.log("================= ARRAYS & CONTROL FLOW: B: Easy Does It =================")
// Create an array that contains three quotes and store it in a variable called quotes
const quotes = ["Change is good.", "All is well.", "Good vibes only."]
console.log(quotes)


console.log("================= ARRAYS & CONTROL FLOW: C1: Accessing elements =================")
// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]
const randomThings = [1, 10, "Hello", true]


console.log("================= ARRAYS & CONTROL FLOW: C2: Accessing elements =================")
// How do you access the 1st element in the array?
console.log("To access the first element in the array you would console log randomThings[0]")
console.log(randomThings[0])


console.log("================= ARRAYS & CONTROL FLOW: C3 : Accessing elements =================")
// Change the value of "Hello" to "World"
console.log("To change the value of Hello to World you would access the element number[2] and set the variable to the string World by typing randomThings[2]= World. World in quotes.")
randomThings[2] = "World"

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings[2])
console.log("A: Why? to make sure the value updated.")


console.log("================= ARRAYS & CONTROL FLOW: D. Change values =================")
// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array?


console.log("================= ARRAYS & CONTROL FLOW: D1. Change values =================")
console.log("To access the 3rd element on the array, you would write ourClass[2]")
console.log(ourClass[2])


console.log("================= ARRAYS & CONTROL FLOW: D2. Change values =================")
// Change the value of "Github" to "Octocat"
console.log("To change the value of Github to Octocat you would set ourClass[4] = Octocat")
ourClass[4] = "Octocat"
console.log(ourClass[4])


console.log("================= ARRAYS & CONTROL FLOW: D3. Change values =================")
// Add a new element, "Cloud City" to the array
console.log("To add a new element to the beginning of the array, you would use the unshift method")
ourClass.unshift("Cloud City")
console.log(ourClass)
console.log("To add a new element to the end of the array, you would use the push method")
ourClass.push("Cloud City")
console.log(ourClass)

console.log("================= ARRAYS & CONTROL FLOW: E. Mix it up =================")
// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: const myArray = [5, 10, 500, 20]
const myArray = [5, 10, 500, 20]
// 1. Add the string "Aegon" to the end of the array. 
myArray.push("Aegon")
console.log(myArray)

// 1b. Add another string of your choice to the end of the array.
myArray.push("is a House of Dragon name")
console.log(myArray)

// 2. Remove the 5 from the beginning of the array.
myArray.shift()
console.log(myArray)

// 3. Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley")
console.log(myArray)

// 4. Remove the string of your choice from the end of the array.
myArray.pop()
console.log(myArray)

// 5. Reverse this array using Array.prototype.reverse(). 
console.log(myArray.reverse())

// 5a. Did you mutate the array? What does mutate mean? 
console.log("No clue- but it printed Object(0)[] to the console. What is Array.prototype.reverse(myArray) SUPPOSED to do?")

// 5b. Did the .reverse()method return anything?
console.log(myArray.reverse())
console.log("A. Yes, it reversed the order of the items in the array")


console.log("================= ARRAYS: F. Biggie Smalls =================")
// F. Biggie Smalls
// Create a variable that contains an integer.
let input = 102
// Write an if ... else statement that:
if (input < 100) {
    console.log("little number")
    } else {
    console.log("big number")
    }

// console.log()s "little number" if the number is entered is less than 100
// console.log()s "big number" if the number is greater than or equal to 100

console.log("================= ARRAYS & CONTROL FLOW: G. Monkey In The Middle =================")
// G. Monkey in the Middle
// Write an if ... else if ... else statement:
// console.log() "little number" if the number entered is less than 5.
// If the number entered is more than 10, log big number.
let nums = 5
if (nums < 5) {
    console.log("little number")
} else if (nums > 10) {
    console.log("big number")
} else {
    console.log("monkey")
}


console.log("================= ARRAYS & CONTROL FLOW: H. What's in your closet? =================")
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

// 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, 
// log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("=====Krystyn's outfit=====")

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")

// 2. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(6,0,"raybans")
console.log(kristynsCloset[6])

// 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = "stained knit hat"
console.log(kristynsCloset[5])

console.log("=====Tom's outfit=====")

// 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
console.log(thomsCloset[0][0])

// 5. In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][1])

// 6. Access one item from Thom's accessories array.
console.log(thomsCloset[2][2])

// 7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][2] + "!")

// 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas"
console.log(thomsCloset[1][2])


console.log("================= FUNCTIONS: A. printGreeting =================")
// IV. Functions
// A. printGreeting
// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?
// Like so?
// console.log(printGreeting("Slimer"));
// OUTPUT: => Hello there, Slimer!
function printGreeting (name1) {
    return ("Hello there, " + name1 + "!")
}
console.log(printGreeting("Slimer"))

// Write a function printCool that accepts one parameter, name as an argument. 
// The function should print the name and a message saying that that person is cool.
// OUTPUT: => "Captain Reynolds is cool";


console.log("================= FUNCTIONS: B. printCool =================")

function printCool (name) {
    return(name + " is cool")
}
console.log(printCool("Captain Reynolds"))


console.log("================= FUNCTIONS: C. calculateCube =================")
// Write a function calculateCube that takes a single number 
// and prints the volume of a cube made from that number.

function calculateCube (singleNumber) {
    let volume = singleNumber * singleNumber * singleNumber
    return (volume)
}

console.log(calculateCube(5));
// output: 125


console.log("================= FUNCTIONS: D. isVowel =================")
// Write a function isVowel that takes a character (i.e. a string of length 1) 
// and returns true if it is a vowel, false otherwise. 
// The vowel could be upper or lower case. 
// Test your function on every vowel and make sure it's working. 
// In general, when you write functions, 
// take a minute to test them with different values to make sure they behave the way you want.

function isVowel (character) {
        if (character == 'a'|| character =='e' || character == 'i' || character == 'o' || character == 'u') {
            return true
        } else if(character =='A' || character =='E' || character == 'I' || character == 'O' || character == 'U') {
            return true
        } else {
            return false
        }
    
}
console.log("====Testing all the vowels====")
console.log(isVowel(('a')))
console.log(isVowel("A"))
console.log(isVowel(('e')))
console.log(isVowel("E"))
console.log(isVowel(('i')))
console.log(isVowel("I"))
console.log(isVowel(('o')))
console.log(isVowel("O"))
console.log(isVowel(('u')))
console.log(isVowel("U"))
console.log("====Testing a letter that's not a vowel====")
console.log(isVowel('z'))


console.log("================= FUNCTIONS: E. getTwoLengths =================")
// Write a function getTwoLengths that accepts two parameters (strings). 
// The function should return an array of numbers 
// where each number is the length of the corresponding string

function getTwoLengths(x,y) {
    return [x.length, y.length]
}
console.log(getTwoLengths("Hank", "Hippopopalous"))
// Output: [4, 13]


console.log("================= FUNCTIONS: F. getMultipleLengths =================")
// Write a function getMultipleLengths that accepts a single parameter as an argument: 
// an array of strings. 
// The function should return an array of numbers 
// where each number is the length of the corresponding string.

// function getMultipleLengths(arr){

    function getMultipleLengths (arrayOfStrings) {
        let lengthOfEachString = []
        for(let i = 0; i < arrayOfStrings.length; i++) {
            lengthOfEachString.push(arrayOfStrings[i].length)
        }
        return lengthOfEachString;
    }
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


console.log("================= FUNCTIONS: G. maxOfThree =================")
// Define a function maxOfThree 
// that takes three numbers as arguments 
// and returns the largest of them. 
// If all numbers are the same, it doesn't matter which one is returned. 
// If the two largest numbers are the same, one of them should be returned. 
// Be sure to test it with larger values in each of the three locations

function maxOfThree (a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

console.log(maxOfThree(9, 6324, 13453));
// Output: 13543

console.log("================= FUNCTIONS: H. printLongestWord =================")
// Write a function printLongestWord that accepts a single argument, an array of strings.
// The method should return the longest word in the array. 
// In case of a tie, the method should return the word that appears first in the array


function printLongestWord (stringArray) {
    let longest = '';
    for(let j = 0; j < stringArray.length; j++) {
        if(stringArray[j].length > longest.length) {
            longest = stringArray[j]
        }
    }
    return longest;

}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));


console.log("================= OBJECTS: A: Make a user object =================")
// Create an object called user.
// Write into the object the key-value pairs for name, email, age, and purchased. 
// Set the value of purchased to an empty array []. 
// Set the other values to whatever you would like.

const user = {name: "Stacey", email: "stacey@aol.com", aged: 32, purchased:[]}
console.log(user)


console.log("================= OBJECTS: B: Update the user =================")
// Our user has changed his or her email address:
// Without changing the original user object, update the email value to a new email address.

user.email = "stacey@myspace.com"
console.log(user.email)

// Our user has had a birthday! Without changing the original user object, 
// increment the age value using the postfix operator. Hint: age++
user.aged++
console.log(user.aged)


console.log("================= OBJECTS: C: Adding keys and values =================")
// You have decided to add your user's location to the 
// data that you want to collect. (Adding a new property to the object)

// Without changing the original userobject, 
// add a new key location to the object, 
// and give it a value or some-or-other location (a string).

user.location = "Georgia"
console.log(user)

console.log("================= OBJECTS: D: Shopaholic =================")

// Our user has purchased an item! They have purchased some "carbohydrates". 
// Using .push(), add the string "carbohydrates" to the purchased array.
user.purchased.push("carbohydrates")

// Our user has purchased an item! They have purchased some "peace of mind". 
// Using .push(), add the string "peace of mind" to the purchased array.
user.purchased.push("peace of mind")

// Our user has purchased an item! They have purchased some "Merino jodhpurs". 
// Using .push(), add the string "Merino jodhpurs" to the purchased array.
user.purchased.push("Merino jodhpurs")

// Console.log just the "Merino jodhpurs" from the purchased array.
console.log(user.purchased[2])

console.log("================= OBJECTS: E: Object-within-object =================")
// Remember that you can add an object to an existing object 
// in the same way that you can add any new property/value pair.

// If we want to give our user a friend with a name and age, we could write:
// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// console.log(user)

console.log("================= OBJECTS: E.1: Object-within-object- new friend =================")
// 1. Write a friend object into your user object and give the friend 
// a name, age, location, and purchased array (empty for now)
user.friend = {
    name: "Lisa",
    aged: 24,
    location: "Seattle",
    purchased: []
}
console.log(user.friend)


console.log("================= OBJECTS: E.2: Object-within-object- name =================")
// 2. Console.log just the friend's name
console.log(user.friend.name)


console.log("================= OBJECTS: E.3: Object-within-object- location =================")
// 3. Console.log just the friend's location
console.log(user.friend.location)


console.log("================= OBJECTS: E.4: Object-within-object- age update =================")
// 4. CHANGE the friend's age to 55
user.friend.aged=55
console.log(user.friend.aged)


console.log("================= OBJECTS: E.5: Object-within-object- purchase 1 =================")
// 5. The friend has purchased "The One Ring". 
//Use .push() to add "The One Ring" to the friend's purchased array.
user.friend.purchased.push("The One Ring")
console.log(user.friend.purchased)


console.log("================= OBJECTS: E.6: Object-within-object- purchase 2 =================")
// 6. The friend has purchased "A latte". 
// Use .push()to add "A latte" to the friend's purchased array.
user.friend.purchased.push("A latte")
console.log(user.friend.purchased)


console.log("================= OBJECTS: E.7: Object-within-object- purchase 2 by index number =================")
// 7. Console.log just "A latte" from the friend's purchased array.
console.log(user.friend.purchased[1])


console.log("================= OBJECTS: F.1: Loops =================")

// Write a for loop that iterates over the User's purchased array 
//(NOT the friend's purchased array), and prints each element to the console.
// we are looping through the object's properties: key user.purchased and prints the elements
// The JavaScript for in statement loops through the properties of an Object:
// for (key in object) {
  // code block to be executed
//}
// const user = {name: "Stacey", email: "stacey@aol.com", aged: 32, purchased:[]}

for (property in user.purchased) {
    console.log(`${user.purchased[property]}`)
}


console.log("================= OBJECTS: F.2: Loops =================")
// Write a for loop that iterates over the Friend's purchased array, 
// and prints each element to the console.

for (property in user.friend.purchased) {
    console.log(`${user.friend.purchased[property]}`)
}

console.log("================= OBJECTS: G.1-3: Functions can operate on objects =================")
// G. Functions can operate on objects
// 1. Write a single function updateUser that takes no parameters. 
// 2. When the function is run, it should:
// it should increment the user's age by 1
// 3. make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.

function updateUser() {
    user.aged++
    user.name = user.name.toUpperCase()
};
updateUser()

console.log(user.aged)
console.log(user.name)


console.log("================= OBJECTS: G.4: Functions can operate on objects =================")
// Write a function oldAndLoud that performs the exact same tasks as updateUser, 
// but instead of hard-coding it to only work on our user object, 
// make it take a parameter person, 
// and have it modify the object that is passed in as an argument 
// when the function is called. 
// Call your oldAndLoud function with user as the argument.

function oldAndLoud (person) {
    person.aged++
    person.name = person.name.toUpperCase()
}
oldAndLoud(user)
console.log(user)


console.log("================= CAT COMBINATOR:1. Mama Cat =================")
// 1. Mama cat
// Define an object called cat1 that contains the following properties:
// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed

const cat1 = {
    name: "Grason",
    breed: "British Shorthair",
    age: 3
}

console.log(cat1.age)
console.log(cat1.breed)


console.log("================= CAT COMBINATOR:2. Papa Cat =================")
// 2. Papa cat
// Define an object called cat2 that also contains the properties:
// name
// breed
// age (a number)

const cat2 = {
    name : "Fluffy",
    breed : "Persian",
    age: 2
}

console.log(cat1.age)
console.log(cat1.breed)

console.log("================= CAT COMBINATOR:3. Combined =================")
// 3. Combine Cats!
// The cats are multiplying!
// 1. Write a function combineCats that has two parameters mama, and papa. 
// 2. The function will take two arguments -- each a cat object.
// 3. Pass cat1 and cat2 as arguments to the combineCats function. 
// 4. The function should console.log them.
        // Example:
        // combineCats(cat1, cat2)
        // { name: "Joe", age: 19, breed: "Mog" }
        // { name: "Jam", age: 45, breed: "Siamese" }

// This is to demonstrate that functions can take objects as arguments
// You could also invoke the combineCats function by writing the objects straight into the parentheses:
// combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });
// WHY WOULD YOU DO THAT?


console.log("================= CAT COMBINATOR:3b. Combination =================")
// 5. Make it so the combineCats function will return a combination of the two incoming cats
// - The result should be an object wherein the: 
// name is a concatenation of the parents' names- have no spaces
// the age is 1
// the breed is each of the parents' breeds with a hyphen in between
    // Example:
    // console.log(combineCats(cat1, cat2));
    // Result:
    // {name: 'JoeJam', age: 1, breed: `Mog-Siamese`}
    // This is to demonstrate that a function can return an object


function combineCats (mama, papa) {
    console.log(mama);
    console.log(papa);

    let baby = {
        name : mama.name + papa.name,
        age : 1,
        breed: mama.breed + "-" + papa.breed
    }

    console.log(baby);
    return baby;
}
combineCats(cat1,cat2);


console.log("================= CAT COMBINATOR:4. Cat brain bender: result 1 =================")
// 4. Cat brain bender
// If combineCats returns an object, and if combineCats takes objects as arguments, 
// then it stands to reason that:
// catCombinator can use itself as its own argument.
// Take a second to stew on that . . .

// What is the result of:
console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));

// OUTPUT: 
// { name: 'Grason', breed: 'British Shorthair', age: 3 }
// { name: 'Fluffy', breed: 'Persian', age: 2 }
// { name: 'GrasonFluffy', age: 1, breed: 'British Shorthair-Persian' }
// { name: 'Grason', breed: 'British Shorthair', age: 3 }
// { name: 'Fluffy', breed: 'Persian', age: 2 }
// { name: 'GrasonFluffy', age: 1, breed: 'British Shorthair-Persian' }
// { name: 'GrasonFluffy', age: 1, breed: 'British Shorthair-Persian' }
// { name: 'GrasonFluffy', age: 1, breed: 'British Shorthair-Persian' }
// {
//   name: 'GrasonFluffyGrasonFluffy',
//   age: 1,
//   breed: 'British Shorthair-Persian-British Shorthair-Persian'
// }
// {
//   name: 'GrasonFluffyGrasonFluffy',
//   age: 1,
//   breed: 'British Shorthair-Persian-British Shorthair-Persian'
// }

// Whoa . . .
// The above console.log is two levels deep of combineCats.


console.log("================= CAT COMBINATOR:4. Cat brain bender: result 2 =================")
// Write a console.log that is three levels deep of combineCats. 
// combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.
// Your output should look something like
// {name: 'JoeJamJoeJamJoeJamJoeJam},
// age: 1,
// breed: 'Mog-Siamese-Mog-Siamese-Mog-Siamese-Mog-Siamese'

console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))),combineCats(cat1, cat2)))

