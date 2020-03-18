import React from 'react'

class SignUp extends React.Component {

    state={
        name: name,
        userName: userName,
        bio: bio,
        profilePic: profilePic
    }

    render() {
        return (
            <div>
                <form onSubmit={()=>this.signUpHandler()}>
                    <textarea placeholder="Name"></textarea>
                    <textarea placeholder="Username"></textarea>
                    <textarea placeholder="Bio"></textarea>
                </form>


            </div>
        )
    }
}

export default SignUp 