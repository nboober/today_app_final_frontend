import React from 'react';
import '../css/App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import Login from '../components/Login'
import Profile from '../components/Profile'
import Home from '../components/Home'
import Register from '../components/Register'
import NotFound from '../components/NotFound'
import Nav from '../components/Nav'
import OutfitShow from '../components/OutfitShow';
import UpdateProfile from '../components/UpdateProfile';
import AddClothes from '../components/AddClothes';
import UpdateClothingItem from '../components/UpdateClothingItem';
import ClothesContainer from '../containers/ClothesContainer';


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
            return this.state.currentUser ? (
              <Home/>
                ) : (
              <Redirect to='/login' />
                )
              }} />

            <Route exact path='/outfitshow' render={()=>{
            return this.state.currentUser ? (
              <OutfitShow/>
                ) : (
              <Redirect to='/login' />
                )
              }} />

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

            <Route exact path='/updateprofile' render={()=>{
            return this.state.currentUser ? (
              <UpdateProfile/>
                ) : (
              <Redirect to='/login' />
                )
              }} />

            <Route exact path='/addclothes' render={()=>{
            return this.state.currentUser ? (
              <AddClothes />
                ) : (
              <Redirect to='/login' />
                )
              }} />

            <Route exact path='/clothescontainer' render={()=>{
            return this.state.currentUser ? (
              <ClothesContainer />
                ) : (
              <Redirect to='/login' />
                )
              }} />

            <Route exact path='/updateclothingitem' render={()=>{
            return this.state.currentUser ? (
              <UpdateClothingItem />
                ) : (
              <Redirect to='/login' />
                )
              }} />

            <Route exact path='/register' render={()=>{
            return this.state.currentUser ? (
              <Redirect to='/' />
              ) : (
                <Register />
                )
              }} />

            <Route component={NotFound} />
        </Switch>
      </>
    )
  }
}

export default App;
