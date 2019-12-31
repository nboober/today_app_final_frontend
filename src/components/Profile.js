import React from 'react'
import FavoriteOutfitContainer from '../containers/FavoriteOutfitContainer'
import {Link} from 'react-router-dom';

class Profile extends React.Component{
    render(){
        return(
            <div>
                <div style={{float: "left", 
                            border: "1px solid black", 
                            height: "90vh", 
                            width: "25%",
                            background: "#000000",
                            opacity: "0.6"
                            }}>
                    <h2 style={{color: "white"}}>
                        {this.props.user.firstname}'s Profile
                    </h2>

                    <img style={{width: "100%"}} src={this.props.user.avatar} alt="profile image" />
                    <br/>

                    <h3 style={{color: "white", textAlign: "center"}}>
                        First Name: {this.props.user.firstname}
                    </h3>

                    <h3 style={{color: "white", textAlign: "center"}}>
                        Last Name: {this.props.user.lastname}
                    </h3>

                    <h3 style={{color: "white", textAlign: "center"}}>
                        username: {this.props.user.username}
                    </h3>
                    <Link style={{fontSize: "20px", marginTop: "10%"}} className="btn btn-primary" to="/updateprofile" >Update Profile</Link>
                    <br/>
                    <Link style={{fontSize: "20px", marginTop: "10%"}} className="btn btn-primary" to="/addclothes" >Add Clothes</Link>
                    <br/>
                    <Link style={{fontSize: "20px", marginTop: "10%"}} className="btn btn-primary" to="/clothescontainer" >Update Clothes</Link>
                </div>

                <div style={{width: "50%", float: "right"}}>
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