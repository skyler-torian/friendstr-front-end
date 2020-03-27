import React from 'react'
import {
    Link
} from "react-router-dom";
import FavGames from '../containers/FavGames'

import '../css/Profile.css';
// import { Card, Icon, Image } from 'semantic-ui-react'
import Navbar from '../containers/Navbar'


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

                <h3 className="username">{this.props.currentUser.username}'s profile</h3>
                
                <img src={this.props.currentUser.profile_picture} alt="A thing" className="profile-photo"/>

                <p className="user-bio">Bio: {this.props.currentUser.bio}</p>

            <div>
                <div className="my-games">
                    <button>
                        <Link to='/mygames'>My Games</Link>
                    </button>
                </div>
                <div className="my-friends">
                    <button>
                        <Link to='/myfriends' currentUser={this.props.currentUser}
                        handleLogout={this.props.handleLogout}>My Friends</Link>
                    </button>
                </div>
            </div>

            <div>
                <div className='match-button'>
                    <button>
                        <Link to='/match' currentUser={this.props.currentUser}>Find Friends</Link>
                    </button>
                </div>

                <div className="find-stuff">
                    <button>
                        <Link to='/games'>Find Games</Link> 
                    </button>
                </div>
            </div>

            <div className="game-display">
                   <FavGames games={this.state.games}/>
            </div>
                    </div>
                 : 
                null

                
                } 
            </div> : null }
            
            </div>
            )
        }
    }
    
    export default Profile
            
            
            