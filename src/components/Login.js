import React from 'react'
import {
    Redirect
  } from "react-router-dom";

class Login extends React.Component {

    // state={
    //     redirect: false
    // }

    handleButton=(e)=>{
        e.preventDefault()
        this.props.handleLogin(e)
    }

    render() {
        if(this.props.currentUserCheck){
            return <Redirect to='/profile'/>
        }
        return (
            <div className="login-banner">
                <h3>Please enter your Username and Password:</h3>
            <div>
                <form onSubmit={this.handleButton} >
                <input type='text' placeholder="username"/>
                <input type='password' placeholder="password"/>
                <div className="login-button">
                <input type='submit' value='Login'/>
                </div>
                   
                </form>
            </div>
            </div>
        )
    }
}

export default Login 