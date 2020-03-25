import React from 'react'
import {
    Link
} from "react-router-dom";
import FavGames from '../containers/FavGames'
import '../css/Profile.css';

import Navbar from '../containers/Navbar'
// import Games from '../components/Games'

class Profile extends React.Component {

    state={
        redirect: false,
        games: []
    }

    componentDidMount(){
        let currentUser = this.props.currentUser.id
         fetch(`http://localhost:3000/users/${currentUser}`)
         .then(res => res.json())
         .then(data => this.setState({
             games: data
         }))
        }

        
    render() {
        return (
            <div>
            {this.props.currentUser?
            <div>
                <Navbar currentUser={this.props.currentUser} handleLogout={this.props.handleLogout}/>
                
                {this.props.currentUser? 
                <div>
                <img src={this.props.currentUser.profile_picture} alt="A thing" className="profile-photo"/>

                <h4>{this.props.currentUser.username}'s profile</h4>

                <p>Bio: {this.props.currentUser.bio}</p>
            <div>
                <button>
                    <Link to='/mygames'>My Games Collection</Link>
                </button>
            </div>
            <div>
                <button>
                    <Link to='/match' currentUser={this.props.currentUser}>Find Friends</Link>
                </button>
            </div>
            <div>
                <button>
                <Link to='/games'>Find Games</Link> 
                </button>
            </div>

            <div className="game-display">
                   <FavGames games={this.state.games}/>
            </div>
                    </div>
                 : 
                null

                
                } </div> : null }
            </div>
            
            
            
        )
    }
}

export default Profile