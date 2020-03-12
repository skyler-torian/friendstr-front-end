import React from 'react'
import {
    Redirect
  } from "react-router-dom";

class Login extends React.Component {

    state={
        redirect: false
    }

    handleButton=(e)=>{
        e.preventDefault()
        this.props.handleLogin(e)
        this.setState({
            redirect: true
        })
    }

    render() {
        if(this.state.redirect){
            return <Redirect to='/profile'/>
        }
        return (
            <div>
                <form onSubmit={this.handleButton} >
                <input type='text' placeholder="username"/>
                <input type='password' placeholder="password"/>
                <input type='submit' value='Login'/>
                   
                </form>
            </div>
        )
    }
}

export default Login 