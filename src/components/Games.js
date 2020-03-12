import React from 'react'

class Games extends React.Component {
    render() {
        return (
            <div>
                <h3>Search for a game</h3>
                <form>
                <input type="text" placeholder="Game name"/>
                <input type="submit" placeholder="Search!"/>
                </form>



            </div>
        )
    }
}

export default Games 