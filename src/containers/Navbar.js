import React from 'react'
import {
    Link
  } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <div>
                
            <div>
                <h3>Friendstr!</h3>
            </div>

            <button type="submit" placeholder="Logout" onClick={(e)=>this.props.handleLogout(e)}>Logout
            </button>

            <button>
                <Link to='/profile'>Profile</Link>
            </button>

            </div>
        )
    }
}

export default Navbar 