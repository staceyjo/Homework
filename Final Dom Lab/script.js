// Menu data structure (Task 3- part one & Task 5- part two)
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];


    /* TASK- 1 - PART ONE
    1.0. 
        Select and cache the <main> element in a variable named mainEl. */

let mainEl = document.querySelector("main");

    /* 
    1.1. 
        Set the background color of mainEl to the value stored in the 
        --main-bg CSS custom property.
            Hint: Assign a string that uses the CSS var() function like this:
            'var(--main-bg)' */

mainEl.style.backgroundColor = "var(--main-bg)";

    /* 1.2. 
        Set the content of mainEl to <h1>SEI Rocks!</h1>. */

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

    /*1.3. 
        Add a class of flex-ctr to mainEl.
        Hint: Element.classList API */

mainEl.classList.add("flex-ctr");

    /* TASK- 2- PART ONE 
    2.0. 
        Select and cache the <nav id="top-menu"> element in a 
        variable named topMenuEl. */

let topMenuEl = document.querySelector("#top-menu");

    /* 2.1. 
        Set the height topMenuEl element to be 100%. */

topMenuEl.style.height = "100%";


    /* 
    2.2. 
        Set the background color of topMenuEl to the value stored 
        in the --top-menu-bg CSS custom property. */

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";


    /* 
    2.3. 
        Add a class of flex-around to topMenuEl.*/

topMenuEl.classList.add("flex-around");


    /* TASK- 3- PART ONE
    3.0.
        Copy the following data structure to the top of script.js:
        see lines 2-18 */

    /* 
    3.1.a
        Iterate over the entire menuLinks array and for each "link" object:
        Create an <a> element */

let aEl;
for (let count = 0; count < menuLinks.length; count++) {
    aEl = document.createElement("a");
        
        /* 
        3.1.b 
            On the new element, add an href attribute with its value set 
            to the href property of the "link" object. */

    aEl.setAttribute("href", menuLinks[count].href);

        /* 
        3.1.c 
            Set the new element's content to the value of the text property of 
            the "link" object. */

    aEl.textContent = menuLinks[count].text;

        /* 
        3.1.d 
            Append the new element to the topMenuEl element. */

    topMenuEl.append(aEl);
}
          
    /* TASK- 4- PART TWO
        - In the DOM Events lesson we saw how to run a function, i.e., an event listener, 
            when an event, such as a click, was dispatched.
        - This lab continues where Part 1 left off and provides practice defining 
            event listeners used to manipulate the DOM in response to user interaction. 
        - It also provides additional practice styling DOM elements dynamically using 
            JavaScript.
        1. Continue to use the "DOM Lab" HTML/CSS/JS Repl you created in Part 1. 
        2. Insert an additional <nav> element within the <header>element in index.html:
        3. Add the following CSS to the bottom of the style.css 
        4. Tasks:

    4.0
        Select and set/cache the <nav id="sub-menu"> element 
        in a variable named subMenuEl. */

let subMenuEl = document.getElementById("sub-menu");

    /* 
    4.1
        Set the height subMenuElelement to be 100%. */

subMenuEl.style.height = "100%";

    /* 
    4.2
        Set the background color of subMenuEl to the value 
        stored in the --sub-menu-bgCSS custom property. */

subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

    /* 
    4.3
        Add the class of flex-around to the subMenuEl element. */

subMenuEl.classList.add("flex-around");

    /* 
    4.4
        Set the CSS position property of subMenuEl to the value of absolute. */

subMenuEl.style.position = "absolute";

    /* 
    4.5
        Set the CSS top property of subMenuEl to the value of 0. */

subMenuEl.style.top = "0";

    /* TASK- 5- PART TWO
    5.0
        Update the menuLinks array in script.js to this: 
        see lines 2- 18*/

    /* 
    5.1a
        Select and cache the all of the <a> elements inside of topMenuEl 
        in a variable named topMenuLinks. */

let topMenuLinks = topMenuEl.querySelectorAll("a");

    /* 
    5.1b 
    Declare a global showingSubMenu variable and initialize it to false; */

let showingSubMenu = false;

    /* (5.2a is further down the code)
    5.2b 
        The first line of code of the event listener function 
        should call the event object's preventDefault() method. */

function handleClick(evt) {
    evt.preventDefault();
         
        /* 
        5.2c
            The second line of the code of the event listener function 
            should immediately return if the element clicked 
            was not an <a> element. */

    let clickedLink = evt.target;
    if (clickedLink.tagName !== "A") {
        return;
    } else {
        
            /*
            5.2d
                console.log the content of the <a> to verify the handler 
                is working */
                // console.log(evt)

        console.log(clickedLink);


            /* 
            5.3.1
                Next in the event listener, if the clicked <a> link has a 
                class of active: */

        if (clickedLink.classList.contains("active")) {

                /* 
                5.3.a
                    Remove the active class from the clicked <a> element. */

            clickedLink.classList.remove("active");

                /* 
                5.3.b 
                    Set the showingSubMenuto false. */

            showingSubMenu = false;

                /* 
                5.3.c
                    Set the CSS top property of subMenuEl to 0. */

            subMenuEl.style.top = "0";

                /* 
                5.3.d 
                    Return to exit the handler. */

            return;
        }

            /* 
            5.4
                Next, the event listener should remove a class name of active 
                from each <a> element in topMenuLinks
                - whether the active class exists or not.
                    Hint: Removing a non-existent class from an element 
                    does not cause an error, so just remove it! */

        topMenuLinks.forEach(function (aLink) {
            aLink.classList.remove("active");
        });
                        // console.log(topMenuLinks)

            /* 
            5.5
                Next, the event listener should add a class name of active 
                to the <a> element that was clicked. */

        clickedLink.classList.add("active");

            /* (5.6a, 5.6b, 5.7.1a, 5.7.2a, & 5.7.2b further down in code) */
 
            /*
            5.7.1b
                Next in the event listener:
                    If showingSubMenu is true:
                        1. Call a buildSubMenu function 
                        passing to it the subLinks array for the clicked <a> element. */


        function buildSubMenu(linkObject) {

                /*
                5.8.1
                    Code the buildSubMenu function so that it:
                        1. Clears the contents of subMenuEl. */

            subMenuEl.innerHTML = "";

                /*
                5.8.2 
                    Iterates over the subLinks array passed as an argument; 
                    and for each "link" object:*/

            linkObject.subLinks.forEach(function (subLinkObj) {

                    /*
                    5.8.2.a 
                        Create an <a> element.*/

                let link = document.createElement("a");

                    /*
                    5.8.2.b 
                        On the new element, add an href attribute with its value 
                        set to the href property of the "link" object.*/

                link.setAttribute("href", subLinkObj.href);

                    /*
                    5.8.2.c 
                        Set the new element's content to the value of the text property 
                        of the "link" object.*/

                link.textContent = subLinkObj.text;

                    /*
                    5.8.2.d
                        Append the new element to the subMenuEl element.*/

                subMenuEl.append(link);
            });
        }

            /* TASK- 6- PART TWO
            6.0.a
                Attach a delegated 'click' event listener to subMenuEl. */

        subMenuEl.addEventListener("click", function (subLinkEvt) {

                /*
                6.0.b
                    The first line of code of the event listener function 
                    should call the event object's preventDefault()method. */

            subLinkEvt.preventDefault();
            let subMenuClickedLink = subLinkEvt.target;
        
                /*
                6.0.c
                    The second line of code function should immediately
                    return if the element clicked was not an <a> element. */

            if (subMenuClickedLink.tagName !== "A") {
                return;
            } else {
        
                    /*
                    6.0.d
                        console.log the content of the <a>to verify the handler is working.*/

                console.log(subMenuClickedLink);

                    /*
                    6.1.a
                        Next, the event listener should:1. Set showingSubMenuto false.*/

                showingSubMenu = false;

                    /*
                    6.1.b 
                        Set the CSS topproperty of subMenuEl to 0.*/

                subMenuEl.style.top = "0";

                    /*
                    6.2
                        Remove the class name of active from each <a> element 
                        in topMenuLinks- whether the activeclass exists or not.*/

                topMenuLinks.forEach(function (aLink) {
                    aLink.classList.remove("active")
                });
        
                    /*
                    6.3 
                        Update the contents of mainElto the contents of the <a> element, 
                        within an <h1>, clicked within subMenuEl.*/

                mainEl.innerHTML = `<h1>${subMenuClickedLink.textContent}</h1>`;
            }
        
        });
        
            /* 5.6b
            Hint: Saving the "link" object in a variable will come in handy 
            for passing its subLinksarray in Task 5.7 */

        let linkObj = menuLinks.find(function (aLinkObj) {
            return aLinkObj.text === clickedLink.textContent;
        });
        console.log(linkObj);
    
            /* 5.6a
            Set showingSubMenu to true if the clicked <a> element's "link" object 
            within menuLinks has a subLinks property, then
            -all the <a> elements do, except for the "link" object for ABOUT*/ 

        if (clickedLink.getAttribute("href") === "#") {
            showingSubMenu = true;
            console.log(showingSubMenu);
        
                /* 5.7.1a
                 */

            buildSubMenu(linkObj);

                /*
                5. 7.2a 
                    Set the CSS topproperty of subMenuEl to 100%*/

            subMenuEl.style.top = "100%";

            /* 5.7.2
                Otherwise (showingSubMenu is false) */

        } else {
            showingSubMenu = false;
            console.log(showingSubMenu);

                    /* 
                5.7.2b 
                    Set the CSS topproperty of subMenuEl to 0 */

            subMenuEl.style.top = "0";
        }
    
    }
        /*
        6.4
            If the ABOUT link is clicked, an <h1>about</h1> should be displayed. */

    mainEl.innerHTML = `<h1>${clickedLink.textContent}</h1>`;

}

        /* 
        5.2a
            Attach a delegated 'click' event listener to topMenuEl. */
            
topMenuEl.addEventListener("click", handleClick);