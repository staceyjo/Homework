// 2. When a user clicks on the name of the pokemon:
    // they will be taken to that pokemon's show page,
        // show page: the pokemon's name and image
// Render your individual pokemon in the show view
// Change all your html code inside your Show.jsx file so that
    // 1. Your h1 tag says "Gotta Catch 'Em All"
    // 2. Add an h2 tag that will display the name of the pokemon
    // 3. Add an image tag that will display an image of the pokemon
    // 4. Add an anchor tag with the text of back, that will take you back to your Index.jsx view
    
    // Oh no! The image is broken because in our database the image links don't have the .jpgending, let's fix that programatically! Without going back to the database and editing it there, add on .jpg to the end of the pokemon's image dat


const React = require('react')

const myStyle = {
    color: '#ffde00',
    backgroundColor: '#3B4CCA',
    textAlign: 'center',
}

class Show extends React.Component {
    render () {
    const {name, img} = this.props.pokemon
    console.log(this.props)
    return (
        <div>
            <head>
                <title>Pokemon App</title>
            </head>
            <body style={{color:'#FF0000', backgroundColor: '#E6CE2B'}}>
                <h1 style={myStyle}>Gotta Catch 'Em All' </h1>
                <h3><a href ={`/pokemon/`}>Back To Index</a></h3>
                <h2>{name}</h2>
                <img src ={img + '.jpg'}/>
            </body>
        </div> 
     );
    }
 }
 module.exports  = Show;