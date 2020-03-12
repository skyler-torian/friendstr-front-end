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
            {/* <Link to='/' onClick={()=>this.props.handleLogout()}>Logout</Link> */}
            </div>
        )
    }
}

export default Navbar 