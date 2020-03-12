import React from 'react'

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


