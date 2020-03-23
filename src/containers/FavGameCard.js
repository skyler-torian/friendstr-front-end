import React from 'react'

class FavGameCard extends React.Component {
    
    

    render() {
        let favoriteGame = this.props.favGame
        console.log("in favgamecard:", this.props.favGame)
        return (
            <div className="profile-game-card">
                <div className="profile-game-image">
                  <div>{favoriteGame? 
                    favoriteGame.name :
                    null
                   }</div>
                </div>

            </div>
        )
    }
}

export default FavGameCard 