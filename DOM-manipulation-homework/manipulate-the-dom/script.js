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

// ===================== Accessing DOM Elements (Querying)=====================

// INSTRUCTIONS: Create individual functions for each solution. 
// Don't forget to call the function once you're finished.

// =============================== Part 1- ============================

// 1. Write a JavaScript statement that selects the #main-title ID element. 
document.getElementById("main-title");

// 2. Change the text of the title to something shorter.
document.getElementById("main-title").innerHTML="Welcome! I'm  DOM Toretto.";

// 3. Create a function

function shortTitle () {
  let newMainTitleEl = document.getElementById("main-title");   // 1.0
  newMainTitleEl.innerHTML = "Welcome! I'm DOM T.";             // 1.1
}
shortTitle();

// =============================== Part 2- ============================
// 1.Select the body
document.querySelector('body')

// 2. Change the background-color to a new color of your choice.

document.body.style.backgroundColor = "green";

// 2. Create a function

function changeBodyColor() {
  let bodyColorEl = document.querySelector('body');                    // 2.0
  bodyColorEl.style.backgroundColor = "lightblue";                     // 2.1
}
changeBodyColor();

let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];