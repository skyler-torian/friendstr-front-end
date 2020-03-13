import React from 'react'
import '../css/Games.css';

class Games extends React.Component{

    state={
        searchedGame: null
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

    collectionHandler=()=>{
        console.log("adding to collection")
    }

    render() {
        return (
            <div>
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

                <div><img src={this.state.searchedGame.background_image} className="game-art"/></div>

                <button type="submit" onClick={()=>this.collectionHandler()}>Add to Collection</button>

                <div><h3>{this.state.searchedGame.name}</h3></div>
                    
                <div>Genre: {this.state.searchedGame.genres.map((genre)=> { return genre.name+ " "})}</div>

                <div><h5>Description:</h5> <p>{this.state.searchedGame.description_raw}</p></div>
            </div> : null }
           

            </div>
            </div>
            
        )
    }
}

export default Games 


