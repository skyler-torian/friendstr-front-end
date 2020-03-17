import React from 'react'
import ShowGame from './ShowGame'
import '../css/GameCard.css';

class MyGames extends React.Component {
    
    state={
        myGames: []
    }

    componentDidMount(){
        let currentUser = this.props.currentUser.id
         fetch(`http://localhost:3000/users/${currentUser}`)
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