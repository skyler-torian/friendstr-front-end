import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

class Login extends React.Component {

    state={
        redirect: false
    }

    handleButton=()=>{
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
                <form onSubmit={this.props.handleLogin} >
                <input type='text' placeholder="username"/>
                <input type='password' placeholder="password"/>
                <input type='submit' value='Login'/>
                   
                </form>
            </div>
        )
    }
}

export default Login 