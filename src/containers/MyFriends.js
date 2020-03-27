import React from 'react'
import FriendProfileCard from './FriendProfileCard'
import Navbar from './Navbar'
import '../css/MyFriends.css'

class MyFriends extends React.Component {

    state={
        friends: []
    }

    componentDidMount(){
        let userId = this.props.currentUser.id
        fetch(`http://localhost:3000/user_friends/${userId}`)
        .then(res => res.json())
        .then(data => this.setState({
            friends: data
        }))
    }

    render() {
        return (
            <div>

            <div>
                <Navbar handleLogout={this.props.handleLogout}/>
            </div>
            
            <div className="friend-card">
                {this.state.friends.map((friend) => {
                    return <FriendProfileCard
                        key={friend.id}
                        friend={friend}
                    />
                })}
                
                </div>

        </div>
        )}}
  
export default MyFriends 