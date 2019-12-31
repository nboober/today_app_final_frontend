import React from 'react'
import {Link} from 'react-router-dom'

class Register extends React.Component{
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

    handleRegisterSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/users',{
                method: 'POST',
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
            .then(user => {
                console.log(user)
                this.props.updateUser(user)
            })
    }

    render(){
        return(
            <div>

                <form style={{width: "75%", margin: "5% auto",background: "#000000", opacity: "0.6"}} onSubmit={this.handleRegisterSubmit}>
                <Link style={{fontSize: "28px"}} to="/login">Login</Link>

                <h2 style={{color: "white"}}>Register</h2>

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
                    <input className="btn btn-primary" type="text" type='submit' value='Register'/>
                </form>

            </div>
        )
    }
}

export default Register