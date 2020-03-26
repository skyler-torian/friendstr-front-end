import React from 'react'

class GameCard extends React.Component {

    render() {
        return (
            
            <div className="game-card">
                <div>
                    <img src={this.props.game.cover_art} className="card-photo" alt=""/>
                </div>

                <div className="game-name">
                    {this.props.game.name}
                </div>
                <button className="delete-game" onClick={()=>this.props.removeGame(this.props.currentUser.id, this.props.game.id)}>Remove from Collection</button>

                <div>
                    
                </div>



            </div>
           
        )
    }
}

export default GameCard 