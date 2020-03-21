import React from 'react'
import {
    Link
  } from "react-router-dom";
//   import '../css/Home.css';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="welcome-banner"><h3>Welcome to Friendstr!</h3></div>
            <div className="home-buttons">
                <button className="login-button">
                    <Link to="/login">Login</Link>
                </button>
                <button className="signup-button">
                 <Link to="/signup">Sign Up</Link>
                </button>
            </div>
            </div>
        )
    }
}

export default Home 