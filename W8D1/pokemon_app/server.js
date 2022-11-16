// POKE EXPRESS APP
// Make a Pokemon app that displays data inside server-side rendered views.

// HOW IT WORKS:
    // 1. When a user goes to the /pokemon route:
        //  they will see an index of pokemon: 
            // index: the names of each pokemon rendered to the page.
    // 2. When a user clicks on the name of the pokemon:
        // they will be taken to that pokemon's show page,
            // show page: the pokemon's name and image
    // 3. When a user goes to /pokemon/new:
        //  a user sees a form 
            // Form: create a brand new pokemon
            // and then redirects the user back to /pokemon

// Set up your server
const express = require('express');                 // 1. require express module
const app = express();                              // 2. set express() to a variable/ create the express app
const port = 3000;                                  // 3. set a variable of port to 3000

// Mount routes
app.get('/',function(req,res){                      // 5. include a get route /
    res.send('Welcome to the Pokemon App!')         // that will res.send('Welcome to the Pokemon App!');
})                                                  // so that when you got to localhost:3000, you will see Welcome to the Pokemon App!


app.listen(port,function(req,res){                  // 4. set your app to listen to the port
    console.log('Server is running at port 3000')   // and include a console.log(), so that you can tell when your server is running
})                                          
