import React from 'react';
import '../css/App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import Login from '../components/Login'
import Profile from '../components/Profile'
import Home from '../components/Home'
import Register from '../components/Register'
import NotFound from '../components/NotFound'
import Nav from '../components/Nav'


class App extends React.Component{
  constructor(){
    super()
    this.state={
      currentUser: null
    }
  }

  componentDidMount = () => {
    if(localStorage.getItem('jwt')){
      fetch('http://localhost:3000/profile',{
        headers: {
          "Authorization": localStorage.getItem('jwt')
        }
      }).then(response => response.json())
      .then(user => {
        console.log(user)
        this.updateUser(user)
      })
    }
  }

  updateUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  render(){
    return (
      <>
        
        <Nav user={this.state.currentUser} updateUser={this.updateUser}/>
        
        <Switch>

          <Route exact path='/' render={()=>{
            return <Home/>
          }}/>

          <Route exact path='/profile' render={()=>{
            return this.state.currentUser ? (
              <Profile user={this.state.currentUser}/>
                ) : (
              <Redirect to='/login' />
                )
              }} />
              

          <Route exact path='/login' render={()=>{
            return this.state.currentUser ? (
              <Redirect to='/profile' />
            ) : (
              <Login
                updateUser={this.updateUser}
              />
            )
          }}/>

          <Route exact path='/register' render={()=>{
            return <Register />
          }}/>

          <Route component={NotFound} />
        </Switch>
      </>
    )
  }
}

export default App;
