import React from 'react'
import {
    Link
  } from "react-router-dom";

// import Navbar from '../containers/Navbar'
// import Games from '../components/Games'

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
                <p><img src={this.props.currentUser.profile_picture}/></p>

                <h4>{this.props.currentUser.username}'s profile</h4>

                <p>Bio: {this.props.currentUser.bio}</p>

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