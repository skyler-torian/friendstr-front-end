import React from 'react'
import FriendProfileCard from './FriendProfileCard'

class MyFriends extends React.Component {

    state={
        friends: []
    }

    componentDidMount(){
        let userId = this.props.currentUser.id
        console.log(userId)
        fetch(`http://localhost:3000/user_friends/${userId}`)
        .then(res => res.json())
        .then(data => this.setState({
            friends: data
        }))
    }

    render() {
        return (
            <div>
                {this.state.friends.map((friend) => {
                    return <FriendProfileCard
                        key={friend.id}
                        friend={friend}
                    />
                })}
                
                </div>

        )}}
  
export default MyFriends 