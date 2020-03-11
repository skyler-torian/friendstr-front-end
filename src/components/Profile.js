import React from 'react'
import ProfileCard from './ProfileCard'

class Profile extends React.Component {
    render() {
        return (
            <div>
                {this.props.currentUser.map(user => <ProfileCard 
                key={user.id}
                user={user}
            
            
            />)}
               
            </div>
        )
    }
}

export default Profile