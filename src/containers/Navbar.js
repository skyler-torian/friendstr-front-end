import React from 'react'

class Navbar extends React.Component {
    render() {
        return (
            <div>
            <div>Navbar Container</div>
            <input onClick={this.props.handleLogout} type="submit" value="Logout"/>
            </div>
        )
    }
}

export default Navbar 