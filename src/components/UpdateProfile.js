import React from 'react'

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
            password: this.props.user.password_digest,
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

    updateUser = (event) => {
        event.preventDefault()

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
            .then(user => {
                console.log(user)
            })
    }

    render(){
        return(
            <div>
                <br/>
                Update Profile
                <br/>
                <br/>
                <form onSubmit={this.updateUser}>

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

                <input type='submit' value='Update'/>

                </form>
            </div>
        )
    }
}

export default UpdateProfile