import React from 'react'
import {
    Link
  } from "react-router-dom";


class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="welcome-banner"><h1>Friendstr</h1></div>
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