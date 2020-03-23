import React from 'react'

class FavGameCard extends React.Component {
    render() {
        console.log("in favgamecard:", this.props.favGame)
        return (
            <div className="profile-game-card">
                <div className="profile-game-image">
                  {/* <div>{this.props.favGame.name}</div> */}
                </div>

            </div>
        )
    }
}

export default FavGameCard 