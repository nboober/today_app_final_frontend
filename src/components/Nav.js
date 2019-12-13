import React from 'react'
import {NavLink} from 'react-router-dom';


class Nav extends React.Component{    
    
    render() {
        return(
            <div>
                
                {this.props.user ? (
                    <NavLink to="/">Home</NavLink> 
                    ):(null)}

                {this.props.user ? (
                    <NavLink to="/profile" name="Profile">Profile</NavLink> 
                    ):(null)}
                
                {this.props.user ? (
                    <NavLink to="/login" name="Logout" onClick={this.props.logout} >Logout</NavLink>
                    ):(null)}
            </div>
        )
    }
}

export default Nav