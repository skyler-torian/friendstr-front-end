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



import './App.css';

class App extends React.Component {
  
 state = {
   currentUser: null,
   redirect: false
    // currentUser:{ 
    // bio:"Just here to have some fun. I love playing Destiny 2",
    // created_at:"2020-03-10T21:12:03.954Z",
    // id:7,
    // name:"Skyler",
    // profile_picture:"none.jpg",
    // updated_at:"2020-03-10T21:12:03.954Z",
    // username:"skyler1"
    // }
    
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
                <Games currentUser={this.state.currentUser}/>
             
            }}>
            </Route>

           
            <Route exact path="/match" render={()=>{
              return !this.state.currentUser? 
              <Redirect to='/'/> :
              <Match currentUser={this.state.currentUser} toGames={this.handleRouteToGames} handleLogout={this.handleLogout}/>
              
            }}>
            </Route>


            <Route exact path='/mygames'>
              <MyGames currentUser={this.state.currentUser}/>
            </Route>
          
          </Switch>
        </div>
      </Router>
      </div>
    )
}
}

export default App;

    

