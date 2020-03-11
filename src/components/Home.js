import React from 'react'

class Home extends React.Component {
    render() {
        return (
            <div>
            <div>Home Component</div>
            <input className="log in" type="submit" value="Login" />
            <input className="sign up" type="submit" value="Sign Up" />
            </div>
        )
    }
}

export default Home 