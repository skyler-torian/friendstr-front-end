import React from 'react'

class SignUp extends React.Component {

    state={
        name: "",
        userName: "",
        bio: "",
        profilePic: ""
    }

    render() {
        return (
            <div>
                <div>
                    <h4>
                        Sign up for an account:
                    </h4>
                </div>
                <form onSubmit={()=>this.signUpHandler()}>
                    <input type="text" placeholder="Name"></input>
                    <input type="text" placeholder="Username"></input>
                    <div>
                    <textarea placeholder="Bio"></textarea>
                    </div>
                    <input type="submit"></input>
                </form>


            </div>
        )
    }
}

export default SignUp 