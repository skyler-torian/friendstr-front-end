import React from 'react'
// import MyGames from './containers/MyGames'
import {
    Link
  } from "react-router-dom";
  import '../css/Profile.css';

import Navbar from '../containers/Navbar'
// import Games from '../components/Games'

class Profile extends React.Component {

    state={
        redirect: false
    }
  
    render() {
       
        return (
            <div>
                <Navbar currentUser={this.props.currentUser} handleLogout={this.props.handleLogout}/>
                
                {this.props.currentUser? 
                <div>
                <img src={this.props.currentUser.profile_picture} className="profile-photo"/>

                <h4>{this.props.currentUser.username}'s profile</h4>

                <p>Bio: {this.props.currentUser.bio}</p>
            <div>
                <button>
                    <Link to='/mygames'>My Games Collection</Link>
                </button>
            </div>
            <div>
                <button>
                    <Link to='/match'>Find Friends</Link>
                </button>
            </div>
            <div>
                <button>
                <Link to='/games'>Find Games</Link> 
                </button>
            </div>
            <div className="game-display">
                    <div className="game-card">

                    </div>
            </div>

                </div> : 
                null
                
    }  
            </div>
            
            
            
        )
    }
}

export default Profile