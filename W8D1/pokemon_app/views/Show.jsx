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