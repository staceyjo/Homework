
// Set up your index view:
// 1. When a user goes to the /pokemon route:
//  they will see an index of pokemon: 
// index: the names of each pokemon rendered to the page.


// You will have to set up your jsx file

// Start with your html boilerplate code
// Add an <h1> that describes this page, i.e. 'See All The Pokemon!'
// Try adding some inline styles:
// We can add inline CSS, which are specified as attributes and are passed to the elements. 
// These are specified as an object with a key as camelCased style name & value being the actual style value (and not as a string).
const React = require('react')

const myStyle = {
    color: '#ffde00',
    backgroundColor: '#3B4CCA',
};

class Index extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            <div>
                <h1 style={myStyle}>See All The Pokemon!</h1>
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
            </div>
        )
    }
}

module.exports = Index;