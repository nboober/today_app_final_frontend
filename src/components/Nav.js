import React from 'react'
import {NavLink} from 'react-router-dom';


class Nav extends React.Component{    

    logout = () => {
        localStorage.removeItem("jwt")
        this.props.updateUser(null)
    }
    
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
                    <NavLink to="/" name="Logout" onClick={this.logout} >Logout</NavLink>
                    ):(<NavLink to="/login" name="Login">Login</NavLink>)}
            </div>
        )
    }
}

export default Nav