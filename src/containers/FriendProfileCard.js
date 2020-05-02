import React from 'react'


class FriendProfileCard extends React.Component {
    render() {
        console.log(this.props.friend)
        return (
            <div>  
                <div className="friend-profile-card">
                    <div>
                        <img src={this.props.friend.profile_picture} className="friend-profile-photo"/>
                    </div>
                    <div className="friend-name">
                        {this.props.friend.name}
                    </div>
                </div>
            </div>

            )
          }
        }

export default FriendProfileCard 

                   
                
