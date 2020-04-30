import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Profile from './components/Profile'
import Login from './components/Login'
import Home from './components/Home'
import Match from './components/Match'
import Games from './components/Games'
import MyGames from './containers/MyGames'
import SignUp from './containers/SignUp'
import MyFriends from './containers/MyFriends'



import './App.css';

class App extends React.Component {
  
 state = {
   currentUser: null,
   redirect: false

    
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
  currentUser: data,
  redirect: true
}))}

//function is called, but user isn't actually set to null. Also needs to redirect to / when there is no user
handleLogout = () => {
  this.setState =({
    currentUser: null
  })
 window.location.reload(false)
}



  render() {
    
    return (
      <div>
      
      <Router>
     
        <div className='App'>
          <Switch>
          <Route exact path="/">
              <Home 
              />
            </Route>

            <Route exact path='/login'> 
              <Login handleLogin={this.handleLogin}
              currentUserCheck={this.state.redirect}
              />
            </Route>

            <Route exact path='/signup'>
              <SignUp />
            </Route>

            <Route exact path="/profile" render={()=>{
              return !this.state.currentUser? 
              <Redirect to='/'/> :
              <Profile currentUser={this.state.currentUser} toGames={this.handleRouteToGames} handleLogout={this.handleLogout}/>
              
            }}>
            </Route>


              
            <Route exact path="/games" render={()=>{
              return !this.state.currentUser? 
              <Redirect to='/'/> :
                <Games currentUser={this.state.currentUser} handleLogout={this.handleLogout}/>
             
            }}>
            </Route>

            <Route exact path="/myfriends" render={()=>{
              return !this.state.currentUser? 
              <Redirect to='/'/> :
                <MyFriends currentUser={this.state.currentUser} handleLogout={this.handleLogout}/>
             
            }}>
            </Route>

           
            <Route exact path="/match" render={()=>{
              return !this.state.currentUser? 
              <Redirect to='/'/> :
              <Match currentUser={this.state.currentUser} toGames={this.handleRouteToGames} handleLogout={this.handleLogout}/>
              
            }}>
            </Route>

            <Route exact path="/mygames" render={()=>{
              return !this.state.currentUser? 
              <Redirect to='/'/> :
              <MyGames currentUser={this.state.currentUser} handleLogout={this.handleLogout}/>
              
            }}>
            </Route>
          
          </Switch>
        </div>
      </Router>
      </div>
    )
}
}

export default App;

    

