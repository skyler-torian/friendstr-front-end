import React from 'react'
import '../css/Games.css';

class Games extends React.Component{

    state={
        searchedGame:[]
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
            <div ><img src={this.state.searchedGame.background_image} className="game-art"/></div>
            <div><h3>Game Title: {this.state.searchedGame.name}</h3></div>
            {/* {this.state.searchedGame.genres[0]} */}
            <div><p>Description: {this.state.searchedGame.description_raw}</p></div>
            </div>

            </div>
            
        )
    }
}

export default Games 


