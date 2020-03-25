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
            <div>
                <h3>Please enter your username and password:</h3>
            <div>
                <form onSubmit={this.handleButton} >
                <input type='text' placeholder="username"/>
                <input type='password' placeholder="password"/>
                <input type='submit' value='Login'/>
                   
                </form>
            </div>
            </div>
        )
    }
}

export default Login 