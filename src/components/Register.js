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
                <Link to="/login">Login</Link>

                <br/>
                <br/>

                Register
                <br/>
                <br/>

                <form onSubmit={this.handleRegisterSubmit}>

                <label>Username</label>
                <input type="text" value={this.state.username} onChange={this.handleUsernameChange} name='username' placeholder='username'/>
                <br/>

                <label>Password</label>
                <input type="password" value={this.state.password} onChange={this.handlePasswordChange} name='password' placeholder='password'/>
                <br/>

                <label>First Name</label>
                <input type="text" value={this.state.firstname} onChange={this.handleFirstnameChange} name='firstname' placeholder='firstname'/>
                <br/>

                <label>Last Name</label>
                <input type="text" value={this.state.lastname} onChange={this.handleLastnameChange} name='lastname' placeholder='lastname'/>
                <br/>

                <label>Avatar</label>
                <input type="text" value={this.state.avatar} onChange={this.handleAvatarChange} name='avatar' placeholder='avatar'/>
                <br/>

                <input type="text" type='submit' value='Register'/>

                </form>
            </div>
        )
    }
}

export default Register