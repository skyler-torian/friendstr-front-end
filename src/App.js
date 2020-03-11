import React from 'react';
// import Games from './components/Games'
// import Profile from './components/Profile'
import Login from './components/Login'
import './App.css';

class App extends React.Component {

  constructor(){
    super()
  this.state = {
    profile: null
  }
}

handleLoginSubmit = (event) => {
  event.preventDefault()
  console.log("hitting the handleLoginSubmit function", event.target.firstElementChild.value)
}

  render() {
    
    return (
        <div>
          < Login loginSubmit={this.handleLoginSubmit}/>
          
        </div>
    )
}
}

export default App;

    

