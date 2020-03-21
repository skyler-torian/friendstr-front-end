import React from 'react'

class FavGames extends React.Component {
    render() {

        state={
            favGames: []
        }
        
        componentDidMount(){
            let currentUser = this.props.currentUser.id
             fetch(`http://localhost:3000/users/${currentUser}`)
             .then(res => res.json())
             .then(data => this.setState({
                 favGames: data
             }))
            }
            
        return (
            <div>
                <FavGameCard />
            </div>
        )
    }
}

export default FavGames 