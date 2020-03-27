import React from 'react'
import '../css/FavGameCard.css';

class FavGameCard extends React.Component {
    
    

    render() {
        let favoriteGame = this.props.favGame
    
        return (
            
            <div className="profile-game-card">
                <div><h3>Recently Played: </h3></div>
                <div className="profile-game-image">
                  <div>{favoriteGame? 
                    <div className="fav-game-card">  
                        <img src={favoriteGame.cover_art} className="fav-game-image" alt=""/>
                    <div className="fav-game-name">
                        {favoriteGame.name}
                    </div>   
                        </div> :
                    null
                   }</div>
                </div>

            </div>
        )
    }
}

export default FavGameCard 