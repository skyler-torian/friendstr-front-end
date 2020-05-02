import React from 'react'
import {
    Link
  } from "react-router-dom";
  import '../css/Profile.css';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                
            <div>
                <h2 className="name">Friendstr</h2>
            </div>
            <div className="nav-buttons">
            <button type="submit" 
            placeholder="Logout" onClick={(e)=>this.props.handleLogout(e)}>Logout
            </button>

            <button className='profile-button'>
                <Link to='/profile'>Profile</Link>
            </button>
            </div>

            </div>
        )
    }
}

export default Navbar 