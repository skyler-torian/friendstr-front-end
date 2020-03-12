import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
    Redirect
  } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <div>
            <div>Navbar Container</div>
            <button type="submit" placeholder="Logout" onClick={()=>this.props.handleLogout()}>Logout</button>
            </div>
        )
    }
}

export default Navbar 