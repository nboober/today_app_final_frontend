import React from 'react'
import {NavLink} from 'react-router-dom';


class Nav extends React.Component{    

    logout = () => {
        localStorage.removeItem("jwt")
        this.props.updateUser(null)
    }
    
    render() {
        return(
           
        // navbar
        <div className="pos-f-t">
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4">
              {/* <h4 className="text-white">Collapsed content</h4>
              <span className="text-muted">Toggleable via the navbar brand.</span> */}
                {this.props.user ? (
                    <NavLink to="/"><p>Clothes for Today</p></NavLink>
                    ):(null)}

                {this.props.user ? (
                    <NavLink to="/profile" name="Profile"><p>Profile</p></NavLink>
                    ):(null)}
                
                {this.props.user ? (
                    <NavLink to="/login" name="Logout" onClick={this.logout} ><p>Logout</p></NavLink>
                    ):(null)}
            </div>
          </div>
          <nav className="navbar navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
          {/* <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/> */}
          <span className="whiteFont navFont" >TODAY</span>
          </nav>
        </div>


        )
    }
}

export default Nav