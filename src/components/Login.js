import React from 'react'
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'

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
                if(data.message){
                    Swal.fire({
                        icon: 'success',
                        title: 'Log In Successful',
                        text: 'Please wait we are Logging you in...'
                      })
                    // alert(data.message)
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Incorrect Login',
                        text: 'Either the Username or Password entered was incorrect. Please try again'
                      })
                }
                // console.log(data.user)
                // save token in local storage
                localStorage.setItem("jwt", data.token)
                // Update state with current user
                this.props.updateUser(data.user)
            })
    }

    render(){
        return(
            <div>

                <form style={{paddingTop: "15%", width: "75%", margin: "0 auto"}} onSubmit={this.handleLoginSubmit}>
                <h1 style={{color: "white"}}>Welcome to Today</h1>
                    <div className="row">
                        <div className="col">
                        <input className="form-control" onChange={this.handleUsernameChange} value={this.state.username} name='username' type='text' placeholder='username'/>
                        </div>
                        <div className="col">
                        <input className="form-control" onChange={this.handlePasswordChange} value={this.state.password} name='password' type='password' placeholder='password'/>
                        </div>
                    <input className="btn btn-primary" type='submit' value='Login'/>
                    <Link to="/register">Register</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login