import React from 'react'

class GameCard extends React.Component {

    // removeGame=(e)=>{
    //     e.preventDefault()
    //     let gameId = this.props.game.id
    //     let userId = this.props.currentUser.id
    //     fetch('http://localhost:3000/mygames/remove',{
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //          },
    //          body: JSON.stringify({
    //              user_id:userId, game_id:gameId
    //          })
    //         }
    //         ).then(res => res.json())
    //         .then(data => {debugger})
    //     }
        
    

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