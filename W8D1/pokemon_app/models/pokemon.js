// 6. Set up your 'database'
// You'll notice the image url's are missing something.
// This is intentional, do not edit anything directly inside the 'database'!

// const pokemon = [
//     {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
//     {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
//     {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
//     {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
//     {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
//     {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
//     {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
//  ];

// module.exports = pokemon       //  7. Set up your 'database' so that it can be exported to your server.js and then be required by your server.js

// require mongoose package
const mongoose = require("mongoose");

// creating the schema
const pokemonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img:  { type: String, required: true }
},
{
    timestamps: true
})

// create the pokemon model
// the model controls the data
const Pokemon = mongoose.model("Pokemon", pokemonSchema);

// export the pokemon model
module.exports = Pokemon;