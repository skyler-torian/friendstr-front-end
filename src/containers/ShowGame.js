import React from 'react'

class GameCard extends React.Component {

    

    render() {
        console.log(this.props.game)
        return (
            
            <div className="game-card">
                <div>
                    <img src={this.props.game.cover_art} className="card-photo"/>
                </div>

                <div>
                    {this.props.game.name}
                </div>

                <div>
                    
                </div>




            </div>
           
        )
    }
}

export default GameCard 