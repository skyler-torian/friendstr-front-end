import React from 'react';
// import Games from './components/Games'
import Profile from './components/Profile'
import Login from './components/Login'
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
        <div>
          < Login loginSubmit={this.handleLogin}/>
          < Profile currentUser={this.state.currentUser} />
          
        </div>
    )
}
}

export default App;

    

