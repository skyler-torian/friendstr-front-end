import React from 'react'

class Profile extends React.Component {
    render() {
        console.log("currentUser is:", this.props.currentUser)
        return (
            <div>Profile Component</div>
        )
    }
}

export default Profile