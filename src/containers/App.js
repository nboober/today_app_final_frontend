import React from 'react';
import '../css/App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import Nav from '../components/Nav'
import Login from '../components/Login'
import Register from '../components/Register'
import Profile from '../components/Profile'
import UpdateProfile from '../components/UpdateProfile';
import AddClothes from '../components/AddClothes';
import Home from '../components/Home'
import OutfitShow from '../components/OutfitShow';
import ClothesContainer from '../containers/ClothesContainer';
import UpdateClothingItem from '../components/UpdateClothingItem';
import NotFound from '../components/NotFound'


class App extends React.Component{
  constructor(){
    super()
    this.state={
      currentUser: null,
      clothes: [],
      selectedClothingItem: {},
      searchText: ""
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
        // console.log(user)
        this.updateUser(user)
      })
    }
  }

  updateUser = (user) => {
    this.setState({
      currentUser: user,
      clothes: user.clothes
    })
  }

  updateClothes = (newObject) => {

    let updatedClothes = [];
    
    this.state.clothes.map((item)=>{
      if(item.id !== newObject.id){
        updatedClothes.push(item)
      }
    })

    let finalArray = [...updatedClothes, newObject]

    // console.log(finalArray)

    this.setState({
      clothes: finalArray
    })
    // console.log("updating clothes")
  }

  addClothes = (newObject) => {
    this.setState({
      clothes: [...this.state.clothes, newObject]
    })
  }

  selectClothingItem = (clothingItem) => {
    // console.log(clothingItem)
    this.setState({
      selectedClothingItem: clothingItem
    })
  }

  search = (event) => {
    // console.log(event.target.value)
    this.setState({
      searchText: event.target.value
    })
  }

  render(){
    return (
      <>
        {/* Nav Bar */}
        <Nav user={this.state.currentUser} updateUser={this.updateUser}/>
        
        {/* Switch Routes */}
        <Switch>

            {/* Login */}
            <Route exact path='/login' render={()=>{
              return this.state.currentUser ? (
                <Redirect to='/profile' user={this.state.currentUser}/>
              ) : (
                <Login
                  updateUser={this.updateUser}
                />
              )
            }}/>

            {/* Register */}
            <Route exact path='/register' render={()=>{
            return this.state.currentUser ? (
              <Redirect to='/' />
              ) : (
                <Register updateUser={this.updateUser}/>
                )
              }} />

            {/* Profile */}
            <Route exact path='/profile' render={()=>{
            return this.state.currentUser ? (
              <Profile user={this.state.currentUser}/>
                ) : (
              <Redirect to='/login' />
                )
              }} />

            {/* Update Profile */}
            <Route exact path='/updateprofile' render={()=>{
            return this.state.currentUser ? (
              <UpdateProfile user={this.state.currentUser}/>
                ) : (
              <Redirect to='/login' />
                )
              }} />

            {/* Add New Clothes */}
            <Route exact path='/addclothes' render={()=>{
            return this.state.currentUser ? (
              <AddClothes user={this.state.currentUser} addClothes={this.addClothes}/>
                ) : (
              <Redirect to='/login' />
                )
              }} />

            {/* List of Outfits/ Home */}
            <Route exact path='/' render={()=>{
            return this.state.currentUser ? (
              <Home/>
                ) : (
              <Redirect to='/login' />
                )
              }} />

            {/* Outfit Show */}
            <Route exact path='/outfitshow' render={()=>{
            return this.state.currentUser ? (
              <OutfitShow/>
                ) : (
              <Redirect to='/login' />
                )
              }} />

            {/* Clothes Container */}
            <Route exact path='/clothescontainer' render={()=>{
            return this.state.currentUser ? (
              <ClothesContainer search={this.search} selectClothingItem={this.selectClothingItem} clothes={this.state.clothes.filter((item)=>{
                return item.name.includes(this.state.searchText)
              })}/>
                ) : (
              <Redirect to='/login' />
                )
              }} />

            {/* Update Clothes Item */}
            <Route exact path='/updateclothingitem' render={()=>{
            return this.state.currentUser ? (
              <UpdateClothingItem updateClothes={this.updateClothes} selectedClothingItem={this.state.selectedClothingItem} user={this.state.currentUser}/>
                ) : (
              <Redirect to='/login' />
                )
              }} />

            {/* Error 404 */}
            <Route component={NotFound} />
        </Switch>
      </>
    )
  }
}

export default App;
