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
        let potentialFriends = this.state.users
        let randomFriend = potentialFriends[Math.floor(Math.random() * potentialFriends.length)]
        this.setState({
            renderedFriend: true,
            currentMatch: randomFriend
        })
    }

    addFriend=()=>{


    }

    addFriend=()=>{
        console.log( console.log("currentUser", this.props.currentUser, "randomFriend:", this.state.currentMatch))
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

                <h3>
                    Click Find a Friend to get started:
                </h3>
                <div>
                <input type="button" value="Find Friend" onClick={this.findFriend}></input>
                </div>
                <div>
                    {this.state.renderedFriend?
                    <div>
                        <div>
                        <img src={this.state.currentMatch.profile_picture} className="potential-match-photo" alt=""/>
                        </div>
                        <div>
                            Username:
                            { this.state.currentMatch.username}
                        </div>
                        <div> A little about me: 
                        { this.state.currentMatch.bio} 
                        </div>
                        <div>
                        <input type="button" value="Be Friends?" onClick={this.addFriend}></input>
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



