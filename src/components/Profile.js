import React from 'react'
import {Link} from 'react-router-dom';


class Profile extends React.Component{
    render(){
        return(
            <div>
                My Profile
                <Link to="/updateprofile" >Update Profile</Link>
            </div>
        )
    }
}

export default Profile