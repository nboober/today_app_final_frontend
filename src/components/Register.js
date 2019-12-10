import React from 'react'

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
            })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleRegisterSubmit}>

                <input value={this.state.username} onChange={this.handleUsernameChange} name='username' placeholder='username'/>
                <input value={this.state.password} onChange={this.handlePasswordChange} name='password' placeholder='password'/>
                <input value={this.state.firstname} onChange={this.handleFirstnameChange} name='firstname' placeholder='firstname'/>
                <input value={this.state.lastname} onChange={this.handleLastnameChange} name='lastname' placeholder='lastname'/>
                <input value={this.state.avatar} onChange={this.handleAvatarChange} name='avatar' placeholder='avatar'/>
                <input type='submit' value='Register'/>

                </form>
            </div>
        )
    }
}

export default Register