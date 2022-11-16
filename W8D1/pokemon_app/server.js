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
const pokemon = require('./models/pokemon.js');     // 8. Set the pokemone 'database' to a variable called pokemon in your server.js file

const reactViews = require('express-react-views')
// Set the view engine: 
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

// Mount routes
app.get('/',function(req,res){                      // 5. include a get route /
    res.send('Welcome to the Pokemon App!')         // that will res.send('Welcome to the Pokemon App!');
})                                                  // so that when you got to localhost:3000, you will see Welcome to the Pokemon App!

// app.get('/pokemon',function(req,res){               // 9. Create a get route /pokemon
//     res.send(pokemon)                               // that will res.send(pokemon)
// })                                                  // which will display your pokemon data as json in the browser

app.get('/pokemon',function(req,res){            // 10. Instead of displaying json at your /pokemon route, 
    res.render('Index', {pokemon:pokemon})                 // you should serve the Index.jsx file you created 
})                                                      // that will display your pokemon

app.get('/pokemon/:id', (req,res) => {
    res.render('Show', pokemon[req.params.id])
})


app.listen(port,function(req,res){                  // 4. set your app to listen to the port
    console.log('Server is running at port ', port)   // and include a console.log(), so that you can tell when your server is running
})                                          
