import React from 'react'
import FavoriteOutfitContainer from '../containers/FavoriteOutfitContainer'
import {Link} from 'react-router-dom';

class Profile extends React.Component{
    render(){
        return(
            <div style={{overflowY: "scroll"}}>
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

                <div style={{width: "50%", float: "right"}}>
                    <h2>
                        My Favorite Outfits
                    </h2>
                        <br/>
                        <div>

                        {this.props.outfits.length > 0 ? (this.props.outfits.map((outfit)=>{
                            
                                return <FavoriteOutfitContainer 
                                        key={outfit.id}
                                        outfit={outfit}
                                        selectedOutfit={this.props.selectedOutfit}
                                        />
                        })) : null
                    }
                        </div>
                        
                </div>

            </div>
        )
    }
}

export default Profile