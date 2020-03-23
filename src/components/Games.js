import React from 'react'
import '../css/Games.css';
import Navbar from '../containers/Navbar'

class Games extends React.Component{

    state={
        searchedGame: null,
        gamePlatform: null
    }

    handleGameSearch=(e)=>{
        e.preventDefault()
        let search = e.target.firstElementChild.value
        let sanitizedSearch = search.replace(/ /g,"-")
        fetch(`https://api.rawg.io/api/games/${sanitizedSearch}`)
        .then(res => res.json())
        .then(game => this.setState({
            searchedGame: game
        }))
    }

    platformHandler=(e)=>{
        e.preventDefault()
       this.setState({
           gamePlatform: e.target.value
       })
    }


    collectionHandler=(e)=>{
        e.preventDefault()
        let gameName = this.state.searchedGame.name
        let gameGenre = this.state.searchedGame.genres[0].name
        let gameDesc = this.state.searchedGame.description_raw
        let userId = this.props.currentUser.id
        let apiKey = this.state.searchedGame.id
        let coverArt = this.state.searchedGame.background_image
        let platform = this.state.gamePlatform

       fetch('http://localhost:3000/user_games',{
       method: "POST",
       headers: {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
        },
        body: JSON.stringify({
            user_id:userId, desc:gameDesc, genre:gameGenre, name:gameName, apiGameId:apiKey, coverArt:coverArt, platform: platform
        })
       }
    
    
       )
        
    }

    render() {
        return (
            <div>
                <Navbar />
            <div>
                <h3>Search for a game</h3>

                <form onSubmit={(e)=> this.handleGameSearch(e)}>
                    <input type="text" placeholder="Search!"/>
                    <input type="submit"/>
                </form>
            </div>
            <div>
                {this.state.searchedGame? 
             <div>

                <div>
                    <img src={this.state.searchedGame.background_image} className="game-art" alt=""/>
                </div>

                <div>
                
                    <p>Select a Platform</p>
                    <form>
                    <select onChange={(e)=> this.platformHandler(e)}>
                        <option defaultValue="Unknown">Choose a Platform</option>
                        <option value="Playstation 4">Playstation 4</option>
                        <option value="Xbox">Xbox</option>
                        <option value="PC">PC</option>
                    </select>
                    <button type="submit" onClick={(e)=>this.collectionHandler(e)}>Add to Collection</button>
                    </form>
               
                </div>

                <div><h3>{this.state.searchedGame.name}</h3></div>
                    {this.state.searchedGame.genres?
                <div>Genre: {this.state.searchedGame.genres.map((genre)=> { return genre.name+ " "})}</div> :
                <p>Genres: Sorry! No genres were found for this title!</p>}
                    {this.state.searchedGame.description_raw?
                <div><h5>Description:</h5> <p>{this.state.searchedGame.description_raw}</p></div> :
                <div><h5>Description: </h5> <p>Unfortunately we don't have a description for this game right now...</p></div>}
            </div> : null }
           

            </div>
            </div>
            
        )
    }
}

export default Games 


