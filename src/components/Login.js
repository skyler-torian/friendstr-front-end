import React from 'react'

class Login extends React.Component {
    render() {
        console.log("Login Props:", this.props)
        return (
            <div>
                <form onSubmit={this.props.loginSubmit}>
                    <input type='text' placeholder="username"/>
                    <input type='password' placeholder="password"/>
                    <input type='submit' value='Login'/>
                </form>
            </div>
        )
    }
}

export default Login 