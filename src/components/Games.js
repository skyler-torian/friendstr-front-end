import React from 'react'

class Games extends React.Component {

    handleGameSearch=()=>{

    }

    render() {
        return (
            <div>
                <h3>Search for a game</h3>
                <form>
                <input type="text" placeholder="Search!"/>
                <input type="submit"/>
                </form>



            </div>
        )
    }
}

export default Games 