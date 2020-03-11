import React from 'react'

class Login extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.loginSubmit}>
                    <div>
                        <input type='text' placeholder="username"/>
                    </div>
                    <div>
                        <input type='password' placeholder="password"/>
                    </div>
                    <div>
                        <input type='submit' value='Login'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login 