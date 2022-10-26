// W4D3 DOM MANIPULATION: 

// Learning Objectives: 
// - DOM Manipulation
// - Event Handling

// Resources: https://gist.github.com/thegitfather/9c9f1a927cd57df14a59c268f118ce86

// NOTES: There are a couple of ways to query id. 
  // Returns a reference to the element by its ID.
    // document.getElementById('someid');

  /* Returns an array-like object of all child elements 
    which have all of the given class names. */
    // document.getElementsByClassName('someclass');

  // Returns an HTMLCollection of elements with the given tag name.
    // document.getElementsByTagName('LI');

  /* Returns the first element within the document that matches the 
    specified group of selectors. */
    // document.querySelector('.someclass');

  /* Returns a list of ALL the elements within the document 
    that match the specified group of selectors. */
  // document.querySelectorAll('div.note, div.alert');

// To change the content of an HTML element, use this syntax: 
  // document.getElementById(id).innerHTML = new HTM

// NOTES: HTML DOM Element .remove()
// The remove() method removes an element (or node) from the document
// Remove an element from the document: 
  // SYNTAX: 
  // function myFunction() {
  //   const element = document.getElementById("demo");
  //   element.remove()

// In this case, we're removing a list element/<li> item
// The parent element of the li we are trying to remove is 
// an unordered list with an element id of "past-races" 

// NOTES: HTML DOM Element removeChild()
  // SYNTAX: 
  // const list = document.getElementById("myList");
  // list.removeChild(list.firstElementChild);

// NOTES: HTML DOM Document getElementsByClassName()
// - Returns a collection of elements with a specified class name(s).
// - Returns an HTMLCollection.
// SYNTAX: 
// const collection = document.getElementsByClassName("example")

// HTMLCollection is an array-like collection (list) of HTML elements
// The elements in a collection can be accessed by index (starts at 0).

// The length Property returns the number of elements in the collection.
// SYNTAX: 
// let numb = document.getElementsByClassName("example").length

// SYNTAX: Changing background color for all elements with "example" class 
// const collection = document.getElementsByClassName("example");
// for (let i = 0; i < collection.length; i++) {
//   collection[i].style.backgroundColor = "red";
// } 

// Rersource for DOM style object: 
// https://www.w3schools.com/jsref/dom_obj_style.asp

// ===================== Accessing DOM Elements (Querying)============

// INSTRUCTIONS: Create individual functions for each solution. 
// Don't forget to call the function once you're finished.

let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

// =============================== Part 1 ============================

// 1. Write a JavaScript statement that selects the #main-title ID element. 
document.getElementById("main-title");

// 2. Change the text of the title to something shorter.
document.getElementById("main-title").innerHTML="Welcome! I'm  DOM Toretto.";

// 3. Create a function & invoke it

function shortTitle () {                                        // 1.3
  let newMainTitleEl = document.getElementById("main-title");   // 1.1
  newMainTitleEl.innerHTML = "Welcome! I'm DOM T.";             // 1.2
}
shortTitle();                                                   // 1.3


// =============================== Part 2 ============================
// 1.Select the body
document.querySelector('body')

// 2. Change the background-color to a new color of your choice.
document.body.style.backgroundColor = "green";

// 3. Create a function & invoke it

function changeBodyColor() {                                           // 2.3
  const bodyColorEl = document.querySelector('body');                  // 2.1
  bodyColorEl.style.backgroundColor = "lightblue";                     // 2.2
}
changeBodyColor();                                                     // 2.3


// =============================== Part 3 ============================
// 1. Select DOM's Favorite Things list
  // ul id="favorite-things"
  document.getElementById("favorite-things")

// 2. Remove the last list item
  // Staring people down
  const list = document.getElementById("favorite-things")
  list.removeChild(list.lastElementChild)

// 3. Create a function & invoke it

function removeFavThing () {                                          // 3.3
  const list = document.getElementById("favorite-things")             // 3.1
  list.removeChild(list.lastElementChild)                             // 3.2
}
removeFavThing()                                                      // 3.3


// =============================== Part 4 ============================
// 1. Select all .special-title class elements
// All special-title class elements can be selected by class name 

const collection = document.getElementsByClassName("special-title")

// Remember you might have to iterate through the list of elements

let numbOfSpec = document.getElementsByClassName("special-title").length
// There are 2 (Quote of the Day & DOM Adventures)
console.log(numbOfSpec)


// 2. Change their font-size to 2rem.
// const collection = document.getElementsByClassName("special-title");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.fontSize = "2rem";
}


// 3. Create a function

function changeFontSz() {
  const specTitleEl = document.getElementsByClassName("special-title")
  for (let i = 0; i < specTitleEl.length; i++) {
    specTitleEl[i].style.fontSize = "2rem";

  }
}
changeFontSz()

// =============================== Part 5 ============================
// 1. Access the Past Races list

// 2. Remove Chicago.

// 3. Create a function

// ===================== Creating DOM Elements =======================

// =============================== Part 6 ============================
// 1. Add to DOM's Past Races list
// 2. Create a new <li> element
// 3. Change the new <li> text to the name of a city
// 4. And then append it to the Past Races list

// =============================== Part 7 ============================
// 1. Create a new .blog-post corresponding to the new city 
// added in Part 6. 
// 2. You will have to create a new <div> with: 
// class of .blog-post, 
// a new <h2> with text, 
// and a new <p> with some text. 

//Think about what order you want to create the elements, 
// and what order you want to append them in.


// =============================== Event Handlers ====================

// =============================== Part 8 ============================
// When you reload the page, the script.js file loads a random DOM quote. 
// Let's play with the included function: 
const randomQuote = function() {
  document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
};

// Query select the #quote-title ID element 
// and add a click event handler. 
// That event handler should use the function randomQuote 
// whenever #quote-title is clicked.
 

// =============================== Part 9 ============================
// Select all .blog-post class elements. 
// Iterate through the list of .blog-post class elements 
// and apply two event handlers to each node. 
// The first event handler should be listening for 
// mouseout events 
// while the second handler should be listening 
// for mouseenter events.

// The mouseouth andler should toggle the class .purple
// The mouseenter handler should toggle the class .red
// Test it out!
