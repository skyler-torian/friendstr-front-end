import React from 'react'

class Match extends React.Component {

    state={
        users: []
    }

    findFriend=()=>{
        console.log("finding a friend")
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
                <h3>
                    Click Find a Friend to get started:
                </h3>
                <div>
                <input type="button" value="Find Friend" onClick={this.findFriend}></input>
                </div>




            </div>
        )
    }
}

export default Match 