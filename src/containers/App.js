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
      latitude: 0,
      longitude:0,
      clothes: [],
      shirts: [],
      pants: [],
      shoes: [],
      hats: [],
      belts: [],
      jewelry: [],
      mostOccuringClothesItem: 0,
      selectedClothingItem: {},
      selectedOutfit:[],
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

    this.getGeoLocation()

  }

  getGeoLocation = () => {
    const showPosition = (position) => {
      // console.log(position.coords.latitude);
      // console.log(position.coords.longitude);
        
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        },()=>{
          this.fetchLocation(this.state.latitude, this.state.longitude)
        })
      
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      alert("Geolocation is not supported by this browser.");
    }
  }

  fetchLocation = (lat, long) => {
    let coordinates = lat + "," + long
    // console.log(coordinates)

    fetch(`http://localhost:3000/geolocation`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        coordinates: coordinates
      })
    })
    .then(response => response.json())
    .then(response => console.log(response))
  }

  mostOccuringClothesItem = () => {

    let shirt_length = this.state.shirts.length
    let pants_length = this.state.pants.length
    let hats_length = this.state.hats.length
    let belts_length = this.state.belts.length
    let shoes_length = this.state.shoes.length
    let jewelry_length = this.state.jewelry.length

    let max = 0;

    if(shirt_length > max){
      max = shirt_length
    }
    
    if(pants_length > max){
      max = pants_length
    }
    
    if(hats_length > max){
      max = hats_length
    }
    
    if(belts_length > max){
      max = belts_length
    }
    
    if(shoes_length > max){
      max = shoes_length
    }
    
    if(jewelry_length > max){
      max = jewelry_length
    }
    
    this.setState({
      mostOccuringClothesItem: max
    })

}

  updateUser = (user) => {
    // console.log(user)
    this.setState({
      currentUser: user
    },()=>{
      if(user){
        this.setState({
          clothes: user.clothes
        },()=>{
          this.setState({
            shirts: this.state.clothes.filter((item)=>item.clothes_type === "shirt"),
            pants: this.state.clothes.filter((item)=>item.clothes_type === "pants"),
            shoes: this.state.clothes.filter((item)=>item.clothes_type === "shoes"),
            hats: this.state.clothes.filter((item)=>item.clothes_type === "hat"),
            belts: this.state.clothes.filter((item)=>item.clothes_type === "belt"),
            jewelry: this.state.clothes.filter((item)=>item.clothes_type === "jewelry")
          },()=> this.mostOccuringClothesItem())
        })
      }
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
    },()=>{
      this.setState({
        shirts: this.state.clothes.filter((item)=>item.clothes_type === "shirt"),
        pants: this.state.clothes.filter((item)=>item.clothes_type === "pants"),
        shoes: this.state.clothes.filter((item)=>item.clothes_type === "shoes"),
        hats: this.state.clothes.filter((item)=>item.clothes_type === "hat"),
        belts: this.state.clothes.filter((item)=>item.clothes_type === "belt"),
        jewelry: this.state.clothes.filter((item)=>item.clothes_type === "jewelry")
      },()=> this.mostOccuringClothesItem())
    })
    // console.log("updating clothes")
  }

  addClothes = (newObject) => {
    this.setState({
      clothes: [...this.state.clothes, newObject]
    },()=> this.mostOccuringClothesItem())
  }

  deleteClothes = (object) => {

    let updatedClothes = [];
    
    this.state.clothes.map((item)=>{
      if(item.id !== object.id){
        updatedClothes.push(item)
      }
    })

    let finalArray = [...updatedClothes]

    // console.log(finalArray)

    this.setState({
      clothes: finalArray
    },()=>{
      this.setState({
        shirts: this.state.clothes.filter((item)=>item.clothes_type === "shirt"),
        pants: this.state.clothes.filter((item)=>item.clothes_type === "pants"),
        shoes: this.state.clothes.filter((item)=>item.clothes_type === "shoes"),
        hats: this.state.clothes.filter((item)=>item.clothes_type === "hat"),
        belts: this.state.clothes.filter((item)=>item.clothes_type === "belt"),
        jewelry: this.state.clothes.filter((item)=>item.clothes_type === "jewelry")
      },()=> this.mostOccuringClothesItem())
    })
    // console.log("updating clothes")
  }

  addClothes = (newObject) => {
    this.setState({
      clothes: [...this.state.clothes, newObject]
    },()=>{
      this.setState({
        shirts: this.state.clothes.filter((item)=>item.clothes_type === "shirt"),
        pants: this.state.clothes.filter((item)=>item.clothes_type === "pants"),
        shoes: this.state.clothes.filter((item)=>item.clothes_type === "shoes"),
        hats: this.state.clothes.filter((item)=>item.clothes_type === "hat"),
        belts: this.state.clothes.filter((item)=>item.clothes_type === "belt"),
        jewelry: this.state.clothes.filter((item)=>item.clothes_type === "jewelry")
      },()=> this.mostOccuringClothesItem())
    })
   
  }

  selectClothingItem = (clothingItem) => {
    // console.log(clothingItem)
    this.setState({
      selectedClothingItem: clothingItem
    })
  }

  selectedOutfit = (hat, jewelery, shirt, belt, pants, shoes) => {
    // console.log([hat, jewelery, shirt, belt, pants, shoes])

    this.setState({
      selectedOutfit: [hat, jewelery, shirt, belt, pants, shoes]
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
        <Nav user={this.state.currentUser} logout={this.logout} updateUser={this.updateUser}/>
        
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
              <UpdateProfile user={this.state.currentUser} updateUser={this.updateUser}/>
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
              <Home 
              max={this.state.mostOccuringClothesItem} 
              shirts={this.state.shirts} 
              pants={this.state.pants} 
              shoes={this.state.shoes} 
              hats={this.state.hats} 
              belts={this.state.belts} 
              jewelry={this.state.jewelry}
              selectedOutfit={this.selectedOutfit}
              />
                ) : (
              <Redirect to='/login' />
                )
              }} />

            {/* Outfit Show */}
            <Route exact path='/outfitshow' render={()=>{
            return this.state.currentUser ? (
              <OutfitShow outfit={this.state.selectedOutfit} selectClothingItem={this.selectClothingItem} />
                ) : (
              <Redirect to='/login' />
                )
              }} />

            {/* Clothes Container */}
            <Route exact path='/clothescontainer' render={()=>{
            return this.state.currentUser ? (
              <ClothesContainer 
                search={this.search} 
                searchText={this.state.searchText}
                selectClothingItem={this.selectClothingItem} 
                clothes={this.state.clothes.filter((item)=>{
                  return item.name.includes(this.state.searchText)
                })}
              />
                ) : (
              <Redirect to='/login' />
                )
              }} />

            {/* Update Clothes Item */}
            <Route exact path='/updateclothingitem' render={()=>{
            return this.state.currentUser ? (
              <UpdateClothingItem deleteClothes={this.deleteClothes} updateClothes={this.updateClothes} selectedClothingItem={this.state.selectedClothingItem} user={this.state.currentUser}/>
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
