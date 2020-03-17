import React from 'react'
import ShowGame from './ShowGame'

class MyGames extends React.Component {
    
    state={
        myGames: []
    }

    componentDidMount(){
        let currentUser = this.props.currentUser.id
         fetch(`http://localhost:3000/user_games/${currentUser}`)
         .then(res => res.json())
         .then(data => this.setState({
             myGames: data
             
         }))
         
     }

    render() {
        return (
            <div className="my-games">
                {this.state.myGames.map((game) =>{
                    return<ShowGame 
                    key={game.id}
                    game={game}
                    />
                })}
                </div>
        )
    }
}

export default MyGames 