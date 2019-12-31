import React from 'react'
import {Link} from 'react-router-dom'

class UpdateProfile extends React.Component{
    constructor(){
        super()
        this.state={
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            avatar: ""
        }
    }

    componentDidMount = () => {
        this.setState({
            username: this.props.user.username,
            // password: this.props.user.password_digest,
            firstname: this.props.user.firstname,
            lastname: this.props.user.lastname,
            avatar: this.props.user.avatar
        })
    }

    handleUsernameChange = (event) => {
        
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        
        this.setState({
            password: event.target.value
        })
    }

    handleFirstnameChange = (event) => {
        
        this.setState({
            firstname: event.target.value
        })
    }

    handleLastnameChange = (event) => {
        
        this.setState({
            lastname: event.target.value
        })
    }

    handleAvatarChange = (event) => {
        
        this.setState({
            avatar: event.target.value
        })
    }

    updateUserInfo = () => {
        // event.preventDefault()

        let id = this.props.user.id;
        
        fetch(`http://localhost:3000/users/${id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    user:{
                        username: this.state.username,
                        password: this.state.password,
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        avatar: this.state.avatar
                    }
                })
            })
            .then(response => response.json())
            .then(user => {this.props.updateUser(user)
            })
    }

    deleteUser = () => {
        // console.log("delete")

        let id = this.props.user.id

        fetch(`http://localhost:3000/users/${id}`,{
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(removedUser => {
            localStorage.removeItem("jwt")
            this.props.updateUser(null)
        })
    }

    render(){
        return(
            <div>

                <form style={{width: "75%", margin: "5% auto",background: "#000000", opacity: "0.6"}}>

                <h2 style={{color: "white"}}>Update Profile</h2>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label style={{color: "white"}} for="username">Username</label>
                        <input value={this.state.username} onChange={this.handleUsernameChange} type="text" className="form-control" id="username" placeholder="Username"/>
                        </div>
                        <div className="form-group col-md-6">
                        <label style={{color: "white"}} for="password">Password</label>
                        <input value={this.state.password} onChange={this.handlePasswordChange} type="password" className="form-control" id="password" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label style={{color: "white"}} for="firstname">First Name</label>
                        <input value={this.state.firstname} onChange={this.handleFirstnameChange} type="text" className="form-control" id="firstname" placeholder="First Name"/>
                    </div>
                    <div className="form-group">
                        <label style={{color: "white"}} for="lastname">Last Name</label>
                        <input value={this.state.lastname} onChange={this.handleLastnameChange} type="text" className="form-control" id="lastname" placeholder="Last Name"/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label style={{color: "white"}} for="avatar">Avatar Image</label>
                        <input value={this.state.avatar} onChange={this.handleAvatarChange} type="text" className="form-control" id="avatar" placeholder="https://shirtsofcotton.com/en/media/catalog/product/cache/10/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/s/h/shirtsofcotton-t-shirt-v-neck-navy-soc-020159-front-1200px.jpg"/>
                        </div>
                    </div>
                    <Link className="btn btn-primary" onClick={this.updateUserInfo} to="/profile">Update</Link>
                    <br/>
                    <Link onClick={this.deleteUser} to="/login">Delete Profile</Link>

                </form>
            </div>
        )
    }
}

export default UpdateProfile