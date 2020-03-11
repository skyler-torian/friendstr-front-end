import React from 'react'
import ProfileCard from './ProfileCard'
import Navbar from '../containers/Navbar'

class Profile extends React.Component {
    render() {
        console.log("in Profile:", this.props.currentUser)
        return (
            <div>
                <Navbar handleLogout={this.props.handleLogout}/>

                <p>{this.props.currentUser.profile_picture}</p>

                <p>{this.props.currentUser.username}</p>

                <p>{this.props.currentUser.bio}</p>

                <button type="submit" value="searchGames">Search Games</button>
                <button type="submit" value="searchFriends">Find Friends</button>

            </div>
            
            
            
        )
    }
}

export default Profile