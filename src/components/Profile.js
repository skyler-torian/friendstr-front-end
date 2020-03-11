import React from 'react'
import ProfileCard from './ProfileCard'
import Navbar from '../containers/Navbar'

class Profile extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
            <div>
               
                {this.props.currentUser.map(user => <ProfileCard 
                key={user.id}
                user={user}
            />)}
               
            </div>
            </div>
            
            
        )
    }
}

export default Profile