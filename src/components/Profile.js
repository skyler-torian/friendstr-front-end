import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
    Redirect
  } from "react-router-dom";

// import Navbar from '../containers/Navbar'
import Games from '../components/Games'

class Profile extends React.Component {

    state={
        user: this.props.currentUser,
        redirect: false
    }

    handleGamesButton=(e)=>{
        console.log("clicking the searchGames button")
        e.preventDefault()
        return(<Link to={this.props.toGames}/>)
        
    }
    render() {
       
        return (
            <div>
                
                {this.props.currentUser? 
                <div>
                <p>{this.props.currentUser.profile_picture}</p>

                <p>{this.props.currentUser.username}</p>

                <p>{this.props.currentUser.bio}</p>

                <Link to='/match'>Find Friends</Link>
                <Link to='/games'>Find Games</Link> </div>: 
                null
                
    }  
            </div>
            
            
            
        )
    }
}

export default Profile