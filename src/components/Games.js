import React from 'react'

class Games extends React.Component{

    state={
        searchedGame:[]
    }

    handleGameSearch=(e)=>{
        e.preventDefault()
        fetch(`https://api.rawg.io/api/games/${e.target.firstElementChild.value}`)
        .then(res => res.json())
        .then(game => this.setState({
            searchedGame: game
        }))
    }

    render() {
        return (
            <div>
                <h3>Search for a game</h3>
                <form onSubmit={(e)=> this.handleGameSearch(e)}>
                <input type="text" placeholder="Search!"/>
                <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default Games 


