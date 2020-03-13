import React from 'react'
import {
    Link
  } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <div>
            <div>Navbar Container</div>
            <button type="submit" placeholder="Logout" onClick={(e)=>this.props.handleLogout(e)}>Logout</button>
            <Link to='/profile'>Back to your profile</Link>
            </div>
        )
    }
}

export default Navbar 