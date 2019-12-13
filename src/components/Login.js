import React from 'react'
import {Link} from 'react-router-dom';


class Login extends React.Component{
    constructor(){
        super()
        this.state={
            username: "",
            password: ""
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

    handleLoginSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            })
            .then(response => response.json())
            .then(data => {
                // debugger
                alert(data.message)
                console.log(data.user)
                // save token in local storage
                localStorage.setItem("jwt", data.token)
                // Update state with current user
                this.props.updateUser(data.user)
            })
    }

    render(){
        return(
            <div>
                Welcome to Today

                <form onSubmit={this.handleLoginSubmit}>

                    <input onChange={this.handleUsernameChange} value={this.state.username} name='username' type='username' placeholder='username'/>
                    <input onChange={this.handlePasswordChange} value={this.state.password} name='password' type='password' placeholder='password'/>
                    <input type='submit' value='Login'/>

                    <Link to="/register">Register</Link>

                </form>
            </div>
        )
    }
}

export default Login