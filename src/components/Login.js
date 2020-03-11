import React from 'react'

class Login extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type='text' placeholder="username"/>
                    <input type='password' placeholder="password"/>
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}

export default Login 