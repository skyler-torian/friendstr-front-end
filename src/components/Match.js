import React from 'react'
import Navbar from '../containers/Navbar'
import '../css/Match.css'

class Match extends React.Component {

    state={
        users: [],
        renderedFriend: false,
        currentMatch: []
    }

    findFriend=()=>{
        let userId = this.props.currentUser.id
        let potentialFriends = this.state.users.filter(user => user.id !== userId)
        // let removeCurrentFriends = ptentialFriends.filter()
        let randomFriend = potentialFriends[Math.floor(Math.random() * potentialFriends.length)]
        this.setState({
            renderedFriend: true,
            currentMatch: randomFriend
        })
       
    }

    addFriend=()=>{
        let user = this.props.currentUser.id
        let friend = this.state.currentMatch.id
        let status = 1
        fetch('http://localhost:3000/user_friends',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
             },
             body: JSON.stringify({
                 user_id: user, friend_id: friend,
                 status: status
             })
            }
            )
            .then(alert("Friend request complete"))
            .then(()=> this.findFriend())
        }
        
        componentDidMount(){
            fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(data => this.setState({
                users: data
            }))
        }
             
        render() {
    
            return (
                <div>
                    <Navbar />
    
                    <h3 className="friend-clicker">
                        Click Find a Friend to get started:
                    </h3>
                    <div className="find-friend">
                    <input type="button" 
                     value="Find Friend" onClick={this.findFriend}></input>
                    </div>
                    <div>
                        {this.state.renderedFriend?
                        <div>
                            <div>
                            <img src={this.state.currentMatch.profile_picture} className="potential-match-photo" alt=""/>
                            </div>
                            <div className="match-username">
                                Username:
                                { this.state.currentMatch.username}
                            </div>
                            <div className="match-bio"> A little about me: 
                            { this.state.currentMatch.bio} 
                            </div>
                            <div>
                            <input type="button" value="Be Friends?" onClick={()=> this.addFriend()}></input>
                            <input type="button" value="Nah" onClick={()=>this.findFriend()}></input>
                            </div>
                            
                        </div> 
                        : null
                    }
                    </div>
                </div>
            )
        }
    }
    
    export default Match 
         
    





