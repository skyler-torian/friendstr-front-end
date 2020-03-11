import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
// import Games from './components/Games'
import Profile from './components/Profile'
import Login from './components/Login'
import Home from './components/Home'
import './App.css';

class App extends React.Component {
  
 state = {
    currentUser: null
  }


handleLogin = (event) => {
  event.preventDefault()
  fetch('http://localhost:3000/fakelogin', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        username: event.target.firstElementChild.value
    })
}).then(res => res.json())
.then(data => this.setState({
  currentUser: data}))
}


  render() {
    
    return (
      <Router>
        
        <div className='App'>
          <Switch>
            <Route exact path='/login'>
              <Login />
            </Route>

            <Route exact path="/profile" render={()=>{
              return !this.state.currentUser?
              <Redirect to='/login'/> : 
              <Profile currentUser={this.state.currentUser}/>
            }}>
            </Route>

            <Route exact path="/profile">
            <Profile 
              currentUser={this.state.currentUser} 
            />
            </Route>

            <Route exact path="/">
            <Home 
            />
            </Route>
          
          </Switch>
        </div>
      </Router>
    )
}
}

export default App;

    

