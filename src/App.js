import React from 'react';
// import Games from './components/Games'
// import Profile from './components/Profile'
import Login from './components/Login'
import './App.css';

class App extends React.Component {
  render() {
    this.state = {
      current_user: {}
    }

      return (
          <div>
            < Login />
            
          </div>
      )
  }
}

export default App;
