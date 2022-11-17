
// Set up your index view:
// 1. When a user goes to the /pokemon route:
//  they will see an index of pokemon: 
// index: the names of each pokemon rendered to the page.

// You will have to set up your jsx file
    // 1. Add an <h1> that describes this page, i.e. 'See All The Pokemon!'
    // 2. Try adding some inline styles:
    // We can add inline CSS, which are specified as attributes and are passed to the elements. 
    // These are specified as an object with a key as camelCased style 
    // name & value being the actual style value (and not as a string).

// Set up your index view to show your pokemon data:
    // 1. The name of each pokemon, as a list item, inside an unordered list
    //  <ul>
    //      <li>

    //      </li>
    //  </ul>
    // 2. This list should be dynamically rendered by jsx based on your data from your 'database'
    // The Map() Function
        // The map() function is used to iterate over an array and manipulate or change data items. 
        // In React, the map() function is most commonly used for rendering a list of data to the DOM

    // 3. Manipulate the data programatically to capitalize the first letter of their names

    // Link your Index.jsx to your Show.jsx/Add dynamic anchor tags to index.jsx
        // For each pokemon, add an <a>tag 
        // that will have an href that goes to the route /pokemon/x
        // where x is the array position of the pokemon in the data array. 
        // This should be set dynamically with js

const React = require('react')

const myStyle = {
    color: '#FFDE00',
    backgroundColor: '#3B4CCA',
    textAlign: 'center'
};

class Index extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            <div>
                <head>
                    <title>Pokemon App</title>
                </head>
                <body style={{color:'#FF0000', backgroundColor: '#FFDE00'}}>
                    <h1 style={myStyle}>See All The Pokemon!</h1>
                    <h2>Index:</h2>
                    <ul>
                        {
                            pokemon.map((eachPokemon, i) => {
                                return (
                                    <li key={i}>
                                        <a href={`/pokemon/${i}`}>{eachPokemon.name[0].toUpperCase() + eachPokemon.name.slice(1)}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </body>
            </div>
        )
    }
}

module.exports = Index;