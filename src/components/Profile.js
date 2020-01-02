import React from 'react'
import FavoriteOutfitContainer from '../containers/FavoriteOutfitContainer'
import {Link} from 'react-router-dom';

class Profile extends React.Component{
    render(){
        return(
            <div style={{backgroundImage: `url(${this.props.backgroundImage})`}} className="backgroundImage whiteFont">
                <div className="profileFloatLeft">
                    <h2>
                        {this.props.user.firstname}'s Profile
                    </h2>

                    <img className="hundredWidth" src={this.props.user.avatar} alt="profile image" />
                    <br/>

                    <h3 className="whiteFont alignCenter">
                        First Name: {this.props.user.firstname}
                    </h3>

                    <h3 className="whiteFont alignCenter">
                        Last Name: {this.props.user.lastname}
                    </h3>

                    <h3 className="whiteFont alignCenter">
                        username: {this.props.user.username}
                    </h3>
                    <Link className="btn btn-primary profileButtons" to="/updateprofile" >Update Profile</Link>
                    <br/>
                    <Link className="btn btn-primary profileButtons" to="/addclothes" >Add Clothes</Link>
                    <br/>
                    <Link className="btn btn-primary profileButtons" to="/clothescontainer" >Update Clothes</Link>
                </div>

                <div className="favoriteOutfitsFloatRight overflowY whiteFont">
                    <h2>
                        My Favorite Outfits
                    </h2>
                        <br/>
                        <div>

                        {this.props.outfits ? (this.props.outfits.map((outfit)=>{
                            
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