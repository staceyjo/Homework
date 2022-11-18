const React = require('react')

class New extends React.Component {
    render() {
        return (
            <div>New Page
                <h1>New Pokemon Page</h1>
                <nav>
                    <a style ={{color:"red"}} href = "/pokemon">Back to Home Page</a>
                </nav>
                {/* NOTE: action will be the route, method will be the HTTP verb
                This creates the HTML form */}
                <form action="/pokemon" method = "POST">
                    Name: <input type="text" name ="name"/><br />
                    Image: <input type="url" name ="img"/><br />
                    <input type="submit" value="Create New Pokemon"/>
                </form>
            </div>
        )
    }
}

module.exports = New