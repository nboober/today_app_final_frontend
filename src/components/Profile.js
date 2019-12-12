import React from 'react'
import OutfitContainer from '../containers/OutfitContainer'
import {Link} from 'react-router-dom';

class Profile extends React.Component{
    render(){
        return(
            <div>
                {this.props.user.firstname}'s Profile
                <br></br>

                My Favorite Outfits

                <br/>
                <Link to="/updateprofile" >Update Profile</Link>
                <Link to="/addclothes" >Add Clothes</Link>
                <Link to="/clothescontainer" >Update Clothes</Link>
            </div>
        )
    }
}

export default Profile