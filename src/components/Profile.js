import React from 'react'
import ProfileCard from './ProfileCard'
import Navbar from '../containers/Navbar'

class Profile extends React.Component {
    render() {
        console.log("in Profile:", this.props.currentUser)
        return (
            <div>
                <Navbar handleLogout={this.props.handleLogout}/>
            </div>
            
            
            
        )
    }
}

export default Profile