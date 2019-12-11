import React from 'react'
import OutfitContainer from '../containers/OutfitContainer'
import {Link} from 'react-router-dom';


class Profile extends React.Component{
    render(){
        return(
            <div>
                My Profile

                My Favorite Outfits
                <OutfitContainer/>
                <OutfitContainer/>
                <OutfitContainer/>
                <OutfitContainer/>
                <OutfitContainer/>
                <OutfitContainer/>

                <Link to="/updateprofile" >Update Profile</Link>
                <Link to="/addclothes" >Add Clothes</Link>
                <Link to="/clothescontainer" >Update Clothes</Link>
            </div>
        )
    }
}

export default Profile