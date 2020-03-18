import React from 'react'

class SignUp extends React.Component {

    state={
        name: "",
        userName: "",
        bio: "",
        profilePic: ""
    }

    signUpHandler=(e)=>{
        e.preventDefault()
        let name = this.state.name
        let userName = this.state.userName
        let bio = this.state.bio
        let profilePic = this.state.profilePic

        fetch('http://localhost:3000/users',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
             },
             body: JSON.stringify({
                 name:name, 
                 username:userName, 
                 bio:bio, 
                 profile_picture:profilePic
             })
            }
            )
        }
         
         
    nameHandler=(e)=>{
        this.setState({
            name: e.target.value
        })
    }
        

    userNameHandler=(e)=>{
        this.setState({
            userName: e.target.value
        })
    }
       

    bioHandler=(e)=>{
        this.setState({
            bio: e.target.value
        })
    }
       

    profilePicHandler=(e)=>{
        this.setState({
            profilePic: e.target.value
        })
    }
       
    render() {
        return (
            <div>
                <div>
                    <h4>
                        Sign up for an account:
                    </h4>
                </div>
                <form onSubmit={(e)=>this.signUpHandler(e)}>
                    <div>
                        <input type="text" placeholder="Name" onChange={(e)=> this.nameHandler(e)}></input>
                    </div>

                    <div>
                        <input type="text" placeholder="Username" onChange={(e)=> this.userNameHandler(e)}></input>
                    </div>

                    <div>
                    <input type="text" placeholder="Add a profile picture" onChange={(e)=> this.profilePicHandler(e)}></input>
                    </div>

                    <div>
                        <textarea placeholder="Bio" onChange={(e)=> this.bioHandler(e)}></textarea>
                    </div>
                        <input type="submit"></input>
                </form>


            </div>
        )
    }
}

export default SignUp 


