import React from 'react'
import OutfitContainer from '../containers/OutfitContainer'
import {Link} from 'react-router-dom';

class Profile extends React.Component{
    render(){
        return(
            <div>
                <div style={{float: "left"}}>
                    <h2>
                        {this.props.user.firstname}'s Profile
                    </h2>

                    <img src={this.props.user.avatar} alt="profile image" />
                    <br/>

                    <p>
                        {this.props.user.firstname}
                    </p>

                    <p>
                        {this.props.user.lastname}
                    </p>

                    <p>
                        {this.props.user.username}
                    </p>
                    <Link to="/updateprofile" >Update Profile</Link>
                    <br/>
                    <Link to="/addclothes" >Add Clothes</Link>
                    <br/>
                    <Link to="/clothescontainer" >Update Clothes</Link>
                </div>

                <div style={{float: "right"}}>
                    <h2>
                        My Favorite Outfits
                        <br/>
                        <OutfitContainer 
                                // key={index}
                                // hats={hats} 
                                // jewelry={jewelry}
                                // shirts={shirts}
                                // belts={belts} 
                                // pants={pants} 
                                // shoes={shoes} 
                                // selectedOutfit={this.props.selectedOutfit}
                                />
                    </h2>
                </div>

            </div>
        )
    }
}

export default Profile