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
import Navbar from './containers/Navbar'
import Games from './components/Games'

import './App.css';

class App extends React.Component {
  
 state = {
  //  currentUser: null
    currentUser:{ 
    bio:"Just here to have some fun. I love playing Destiny 2",
    created_at:"2020-03-10T21:12:03.954Z",
    id:16,
    name:"Skyler",
    profile_picture:"none.jpg",
    updated_at:"2020-03-10T21:12:03.954Z",
    username:"skyler1"
    }
    
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
  currentUser: data
}))}

//function is called, but user isn't actually set to null. Also needs to redirect to / when there is no user
handleLogout = () => {
  this.setState =({
    currentUser: null
  })
  console.log("logging out", this.state.currentUser)
  return(<Redirect to='/'/>)
  
}

// handleRouteToGames =()=> {
//   return(<Games/>)
// }


  render() {
    
    return (
      <div>
      
      <Router>
      <Navbar handleLogout={this.handleLogout}/>
        <div className='App'>
          <Switch>
             <Route exact path='/profile'>
                <Profile currentUser={this.state.currentUser} toGames={this.handleRouteToGames}/>
            </Route>

            <Route exact path="/profile" render={()=>{
              return !this.state.currentUser? 
              <Redirect to='/login'/> : <Profile currentUser={this.state.currentUser} toGames={this.handleRouteToGames}/>
            }}>
            </Route>
              
            <Route exact path='/games'> 
              <Games currentUser={this.state.currentUser}/>
            </Route>


            <Route exact path='/login'> 
              <Login handleLogin={this.handleLogin}/>
            </Route>


            <Route exact path="/">
              <Home 
              />
            </Route>
          
          </Switch>
        </div>
      </Router>
      </div>
    )
}
}

export default App;

    

