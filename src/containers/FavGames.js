import React from 'react'
import FavGameCard from './FavGameCard'

class FavGames extends React.Component {
    render() {
        let games = this.props.games
        let randomGames = games[Math.floor(Math.random() * games.length)]
        

        return (
            
        <div className="fav-game">
           <div><FavGameCard favGame={randomGames}/></div>
            
            </div>
        )
    }
}
        
       


export default FavGames 