import React from 'react'
import {
    Link
  } from "react-router-dom";
//   import '../css/Home.css';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div>Home Component</div>
            <div>
                <button>
                    <Link to="/login">Login</Link>
                </button>
                <button>
                 <Link to="/signup">Sign Up</Link>
                </button>
            </div>
            </div>
        )
    }
}

export default Home 