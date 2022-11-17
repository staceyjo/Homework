  // 2. When a user clicks on the name of the pokemon:
        // they will be taken to that pokemon's show page,
            // show page: the pokemon's name and image

const React = require('react')

const myStyle = {
    color: '#ffde00',
    backgroundColor: '#3B4CCA',
};

class Show extends React.Component {
   render () {
    const {name, img} = this.props
    console.log(this.props)
    return (
        <div>
                <h1 style={myStyle}>Gotta Catch 'Em All' </h1>
                <h2>{name}</h2>
                <img src ={img + '.jpg'}/>
                <a href ={`/pokemon/`}>Back</a>
        </div> 
     );
    }
 }
 module.exports  = Show;