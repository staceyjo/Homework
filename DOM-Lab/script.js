// ===============================TASK ONE- PART ONE==================================
// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];
// 1.0 INSTRUCTION: Select and set the <main> HTML element in a variable 
// named mainEl.

// What we're doing: we can use "const" or "let" to declare the variable.
// We're creating a new JS variable called mainEL and storing/saving = the
// value. 

// The value we're setting it to is the document.querySelector("main")

// When a document is loaded into the browser, it becomes a document object.
// document is the root node of the HTML document & 
// document is also a property of the window.
// We can access the document object property, by using 
// window.document or just document

// .querySelector is a method that returns the first element that matches a 
// CSS selector in this case, we want to use the .querySelector method 
// on the HTML document to search for the first unique ID element named "main"

const mainEl = document.querySelector('main');             // 1.0
// const mainEl = document.getElementById("menu")

// 1.1 INSTRUCTION: Set the background color of mainEl to the value stored 
// in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this:
// 'var(--main-bg)'

// What we're doing: Using the mainEl variable we created and 
// setting the background color to the value stored in the :root
// of the CSS file. 

// The root element always refers to the HTML element
// The ..root selector matches the document's root element.

// mainEl.style.backgroundColor:
// mainEL is our variable  
// .style is the style object for the HTML document
// .backgroundColor is a property that sets or replaces the background color
// Setting .style.backgroundColor = to the CSS var() function 
// and passing through the root element --main-bg, which has a color stored

mainEl.style.backgroundColor = 'var(--main-bg)';            // 1.1

// 1.2 INSTRUCTION: Set the content of mainEl to <h1>SEI Rocks!</h1>.

// What we're doing: Using the mainEL variable and 
// changing the content of the HTML element main to SEI Rocks
// by adding an <h1> tag in the js instead of the index.HTML 

mainEl.innerHTML = '<h1>SEI Rocks</h1>';                    // 1.2

// 1.3 INSTRUCTION: Add a class of flex-ctr to mainEl. 
// Hint: element.classList API

// What we're doing: Using the mainEL variable and adding a property
// called .classList. .classList has a variety of methods we can use
// the .add method of the .classList property to add a class of "flex-ctr"
// to the mainEL element. 
// The .flex-ctr class is styled in the CSS style sheet: 
// .flex-ctr {display: flex, justify-content: center, align-items:center}

mainEl.classList.add("flex-ctr");                           // 1.3
// console.log(mainEl);

// ===============================TASK ONE- PART TWO==================================

// 2.0 INSTRUCTION: Select and store the <nav id="top-menu"> element in a 
// variable named topMenuEl. 

// What are we doing: Declare variable topMenuEl using const or let. The 
// variable is set to the document object property by using "document"
// .querySelector method checks the document for the first mention of
// "top-menu". And we use # in front of the top menu to pull the CSS style

const topMenuEl = document.querySelector('#top-menu');      // 2.0
// console.log(topMenuEl);

// 2.1 INSTRUCTION: Set the height topMenuEl element to be 100%.

// What we're doing: Taking the topMenuEl variable and using the .style
// style object it to add a height of 100% to the top menu

topMenuEl.style.height = "100%";                            // 2.1


// 2.2 INSTRUCTION: Set the background color of topMenuEl element
// to the value stored in the --top-menu-bg CSS custom property

// What we're doing: Using the topMenuEl variable and accessing the 
// .style style object for the HTML document and changing the background
// color of the top menu element by using the property .backgroundColor
// and setting it by using the function var() and passing in the 
// --top-menu-bg color that is set in the CSS root selector. 
// The :root CSS selector refers back to the HTML root element. 

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';     // 2.2


// 2.3 INSTRUCTION: Add a class of flex-around to topMenuEl element

// What we're doing: Using the topMenuEl variable and using the 
// .add method of the classList property to add the class "flex-around"
// to the top menu. The top menu will now take on the properties
// on the CSS style sheet under the .flex around class
// flex around{display:flex; justify-content:space-around; 
// align-items: center;}

topMenuEl.classList.add('flex-around');                     // 2.3

// ===============================TASK ONE- PART THREE==================================

// 3.0 INSTRUCTION: Copy the following data structure to the top of script.js:

// What we're doing: updating the menuLinks array


// 3.1.a INSTRUCTION: Iterate over the entire menuLinks array and for each 
// "link" object: Create an <a> element */

// What we're doing: Looping over the elements of the array object 
// of the menuLinks variable. 
// For each of the elements of the menuLinks array object, 
// (about, catalog, orders, account), we are creating an <a> element.

// The <a> tag/element has a href attribute which indicates the link's 
// destination/specifies the URL of the page the link goes to.

// To create a new <a> element for each of the objects in menuLinks, 
// we need to use the .forEach method, which calls the function for each
// element in the array.

// We declared a new variable newATagEL and set it equal to the HTML
// document object using document.createElement. 

// We are creating an <a> element so the .createElement method
// creates an element node based on the tagName specifed by a string.
// in this case we use "a"


// 3.1b INSTRUCTION: On the new element, add an href attribute with 
// its value set to the href property of the "link" object

// What we're doing: We're using the newATagEl element we declared
// to set a new value to the href: attribute. 

// SYNTAX: element.setAttribute(name, value)  
// The .setAttribute method sets a new value to an attribute.

// So we set the value of each link object element in the array 
// of menuLinks with an attribute of "href:" 
// to now hold a value linkObject.href. 

// If the .href attribute is not present, the <a> tag won't be a hyperlink
// In this case I THINK our menuLinks will be linked
//  to an element with a specified id within the page


// 3.1c INSTRUCTION: Set the new element's content to the value of the text 
// property of the "link" object

// What we're doing:  
// The .textContent property is used to get or set the content of a node/ 
// element. This will remove or replace the child elements with 
// the new text element

// We're using .textContent property to set the text content
// of each link object to the text value listed 
// for each text attribute listed as an object of the menuLinks array

// 3.1d. INSTRUCTION: Append the new element to the topMenuEl element.

// What we're doing: We're taking the newATagEl element that we 
// created and using the .append() method

// The .append method inserts a set of node/element objects
// or string objects after the last child of the element. 

// String objects are inserted as the equivalent of text nodes

// so we're inserting the element objects we created in the newATagEl
// and adding it as a set of elements after the last child element
// of menuLinks. ? What's the last child element?

// there are differences between .append and .appendChild


// Using a For Each Loop for menuLinks array object:

menuLinks.forEach(function (linkObject) {                   // 3.1a
  const newATagEl = document.createElement('a')             // 3.1a
  newATagEl.setAttribute("href", linkObject.href)           // 3.1b
  newATagEl.textContent = linkObject.text                   // 3.1c
  topMenuEl.append(newATagEl)                               // 3.1d
})

// Using For Of Loop
//  let i = 0;
//  for (let arg of menuLinks) {
//    let aEl = document.createElement('a');
//    aEl.setAttribute('href', arg.href);
//    aEl.innerHTML = arg.text;
//    // console.log(i);
//    i++;
//    topMenuEl.append(aEl);
//  }

// ===============================TASK FOUR- PART TWO==================================

// - In the DOM Events lesson we saw how to run a function, i.e., an event listener, 
//   when an event, such as a click, was dispatched.

// - This lab continues where Part 1 left off and provides practice defining 
//   event listeners used to manipulate the DOM in response to user interaction. 

// - It also provides additional practice styling DOM elements dynamically using 
//   JavaScript.

// 1. Continue to use the "DOM Lab" HTML/CSS/JS Repl you created in Part 1. 
// 2. Insert an additional <nav> element within the <header> element in index.html:
// 3. Add the following CSS to the bottom of the style.css 
// 4. Tasks:

// 4.0 INSTRUCTION: Select and set/cache the <nav id="sub-menu"> element 
// in a variable named subMenuEl.

// What we're doing: declaring a variable subMenuEL and
// using the document.querySelector to find the first element
// with the name "sub-menu" 
// "sub-menu" id name is from <nav> element. 
// Using # will grab the CSS properties associated with sub-menu
// Can also use: const subMenuEl = document.getElementById("sub-menu")

const subMenuEl = document.querySelector('#sub-menu');        // 4.0


// 4.1 INSTRUCTION: Set the height subMenuEl element to be 100%

// What we're doing: Taking the subMenuEl variable and using the .style
// style object it to add a height of 100% to the sub menu

subMenuEl.style.height = '100%';                              // 4.1


// 4.2 INSTRUCTION: Set the background color of subMenuEl to the value 
// stored in the --sub-menu-bgCSS custom property.

// What we're doing: Using the subMenuEl element we created and accessing the 
// .style style object for the HTML document and changing the background
// color of the sub menu element by using the property .backgroundColor
// and setting it by using the function var() and passing in the 
// --sub-menu-bg color that is set in the CSS root selector. 
// The :root CSS selector refers back to the HTML root element. 

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';       // 4.2


// 4.3 INSTRUCTION: Add the class of flex-around to the subMenuEl element.

// What we're doing: Taking the subMenuEl element that we created and using 
// the .add method of the classList property to add the class "flex-around"
// to the sub menu. 
// The sub menu will now take on the properties on the CSS style sheet 
// under the .flex around class:
// flex around{display:flex; justify-content:space-around; 
// align-items: center;}

subMenuEl.classList.add("flex-around");                       // 4.3


// 4.4 INSTRUCTION: Set the CSS position property of subMenuEl 
// to the value of absolute.

// What we're doing: Using the subMenuEl element we created and accessing the 
// .style style object for the HTML document and changing the position
// by using the .style.position property ans setting the position to absolute

// SYNTAX: object.style.position = "static|absolute|fixed|relative|sticky|initial|inherit"
// with absolute positioning, the element is positioned relative to
// it's first positioned ancestor element that's not static 

subMenuEl.style.position = 'absolute';                        // 4.4


// 4.5 INSTRUCTION: Set the CSS top property of subMenuEl 
//to the value of 0.

// What we're doing: Using the subMenuEl element we created 
// and accessing the .style style object for the HTML 
// document and setting the top position

// The top property sets or returns the top position 
// of a positioned element

// In this case, our positioned element has a position 
// property set to absolute

// The top property specifies the top position of the element 
// including: padding, scrollbar, border, and margin

subMenuEl.style.top = '0';                                    // 4.5


// ===============================TASK FIVE- PART TWO==================================
// 5.0 INSTRUCTION: Update the menuLinks array in script.js 
// to this:



// 5.1a INSTRUCTION: Select and cache the all of the <a> 
// elements inside of topMenuEl in a variable named topMenuLinks.

// What we're doing: Declaring a variable topMenuLinks and 
// storing the value of all of the the <a> elements 
// in the top menu element. This is building on from 
// the topMenuEl element we created in task 2

const topMenuLinks = topMenuEl.querySelectorAll('a');         // 5.1a
// console.log(topMenuLinks);


// 5.1b INSTRUCTION: Declare a global showingSubMenu 
// variable and initialize it to false
// ? can we use const? 

let showingSubMenu = false;                                   // 5.1b


// 5.2a INSTRUCTION: Attach a delegated 'click' event 
// listener to topMenuEl.

// What we're doing: HTML DOM allows JS to react to events.
// When an event happens, we want to do something
// JS lets us execute code when an event is detected

// JS allows event handler attributes to be added to HTML elements

// Adding an event: something the browser does or the user does. 
// In this case we are adding a 'click' event listener 
// to the top menu element

// The .addEventListener method attaches an event handler to
// the specified element-- without overiding existing event
// handlers. 

// The addEventListener() method makes it easier 
// to control how the event reacts to bubbling.

// In this case, the event handler attributes will be 
// added to the top menu elements. Because JS can 
// be is several lines long, event attributes 
// are called as functions. 

// SYNTAX: 
// element.addEventListener(event, function, useCapture);

// topMenuEl.addEventListener("click", function)
// the first param is the type of HTML DOM event: click
// the second param is the function we want to call 
// when the even happens
// the third param is optional, but it specifies whether
// to use event bubbling or event capturing

// MORE SYNTAX: 
// element.addEventListener("click", function(){
// alert("Hello World!"); 
//});


// 5.2b INSTRUCTION: The first line of code of the 
// event listener function should call the event object's 
// preventDefault() method.

// What we're doing: The preventDefault() method 
// will prevent the link from following the URL when 
// a user clicks on it. 

// 5.2c INSTRUCTION: The second line of the code of the event 
// listener function should immediately return 
// if the element clicked was not an <a> element.

// What we're doing: adding an IF statement to our function. 
// IF the element clicked was not an <a> element,
// the event listener should return


// The target event property returns the element 
// that triggered the event. The target property gets 
// the element on which the event originally occurred
// .event.target refers to the clicked <a> element

// Using the event.target property together with the 
// element.tagName property to find out which 
// element triggered a specified event

// WHY do we use a capital A?

// 5.2d INSTRUCTION: console.log the content of the
// <a> element to verify the handler is working

// 5.3 INSTRUCTION: Next in the event listener, 
// if the clicked <a> link has a class of active:

// What we're doing: creating another if statement 
// inside the event listener function

// 5.3a INSTRUCTION: Remove the active class 
// from the clicked <a> element.

// 5.3b INSTRUCTION: Set the showingSubMenu to false.

// 5.3c INSTRCTION: Set the CSS top property of subMenuEl to 0.

// 5.3d INSTRUCTION: return to exit the handler.

// 5.4 INSTRUCTION: Next, the event listener should remove a 
// class name of active from each <a> element in topMenuLinks
// whether the active class exists or not.
// Hint: Removing a non-existent class from an element 
// does not cause an error, so just remove it!

// 5.5 INSTRUCTION: Next, the event listener should add a 
// class name of active to the <a> element that was clicked.

// 5.6 INSTRUCTION: Set showingSubMenu to true if the clicked <a> 
// element's "link" object within menuLinks 
// has a subLinks property, -all the <a> elements do, 
// except for the "link" object for ABOUT*/

// 5.7 INSTRUCTION: Hint: Saving the "link" object in a
// variable will come in handy for passing its subLinks 
// array in Task 5.7 


// attempt as a regular function:

// topMenuEl.addEventListener("click", function (event) {        // 5.2a
//   event.preventDefault();                                     // 5.2b
//   if (event.target.tagName !== "A") {                         // 5.2c
//     return;
//   } else {
//     console.log(event.target.tagName);                        // 5.2d 
//     console.log(event.target.classList);

//   }
//   if (evt.target.classList.contains('active')) {              // 5.3
//     evt.target.classList.remove('active');                    // 5.3a
//     showingSubMenu = false;                                   // 5.3b
//     subMenuEl.style.top = '0';                                // 5.3c
//     return;                                                   // 5.3d
//   }
// })

// Using arrow function:
topMenuEl.addEventListener('click', (evt) => {                // 5.2a
  evt.preventDefault();                                       // 5.2b
  // console.log(evt.target.tagName);

  if (evt.target.tagName !== 'A') {                           // 5.2c
    return;
  } else {
    // console.log(evt.target.classList);                     // 5.2d
  }

  if (evt.target.classList.contains('active')) {               // 5.3
    // console.log('in if statement to remove active')
    evt.target.classList.remove('active');                    // 5.3a
    showingSubMenu = false;                                   // 5.3b
    subMenuEl.style.top = '0';                                // 5.3c
    return;                                                   // 5.3d
  }

  topMenuLinks.forEach(function(arg) {                        // 5.4
    arg.classList.remove('active');
    // console.log(arg);
  });

  evt.target.classList.add('active');                          // 5.5
  
  //showingSubMenu = evt.target.hasOwnProperty('sublinks')
  let text = evt.target.textContent;                           // 5.6
  // console.log(text);
  let currentLink = {};
  for (let i = 0; i < menuLinks.length; i++) {
    // console.log("something is happening");
    // console.log(menuLinks[i]);
    // console.log(menuLinks[i].hasOwnProperty('subLinks'))
    if (text === menuLinks[i].text) {
      showingSubMenu = menuLinks[i].hasOwnProperty('subLinks')
      currentLink = menuLinks[i];
    }
  }
  // console.log(showingSubMenu);
  // console.log(currentLink);

  if (showingSubMenu === true) {                                 // 5.7
    // console.log(menuLinks[i].subLinks);
    buildSubMenu(currentLink);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = "0";
  }
  // console.log(subMenuEl);

  function buildSubMenu() {                                     // 5.8
    subMenuEl.innerHTML = "";
    console.log(subMenuEl);
    currentLink.subLinks.forEach((link) => {
      let newText = document.createElement('a');
      newText.setAttribute('href', link.href);
      newText.textContent = link.text;
      subMenuEl.append(newText);
    })
  }
})


subMenuEl.addEventListener('click', (evt) => {                   // 6.0
  evt.preventDefault();
  if (evt.target.tagName !== 'A') {
    return;
  } else {
    console.log(evt.target.tagName);
  }

  showingSubMenu = false;                                       // 6.1
  subMenuEl.style.top = '0';

  topMenuLinks.forEach((arg) => {                               // 6.2

    arg.classList.remove('active');
    // console.log(arg);
  })

  mainEl.innerHTML = `<h1>${currentLink.text}</h1>`;            // 6.3
})

