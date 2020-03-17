import React from 'react'
// import MyGames from './containers/MyGames'
import {
    Link
  } from "react-router-dom";

// import Navbar from '../containers/Navbar'
// import Games from '../components/Games'

class Profile extends React.Component {

    state={
        redirect: false
    }
  
    render() {
       
        return (
            <div>
                
                {this.props.currentUser? 
                <div>
                <img src={this.props.currentUser.profile_picture}/>

                <h4>{this.props.currentUser.username}'s profile</h4>

                <p>Bio: {this.props.currentUser.bio}</p>

                <Link to='/mygames'>My Games Collection</Link>
                <Link to='/match'>Find Friends</Link>
                <Link to='/games'>Find Games</Link> 
                </div> : 
                null
                
    }  
            </div>
            
            
            
        )
    }
}

export default Profile