import React from 'react'
import {Link} from 'react-router-dom'

class AddClothes extends React.Component{
    constructor(){
        super()
        this.state={
            name: "",
            location: "",
            weather_category: "10",
            temp_category: "1000",
            clothes_type: "hat",
            image: ""
        }
    }

    updateName = (event) => {
        // console.log(event.target.value)
        this.setState({
            name: event.target.value
        })
    }

    updateLocation = (event) => {
        // console.log(event.target.value)
        this.setState({
            location: event.target.value
        })
        
    }
    updateWeather = (event) => {
        // console.log(event.target.value)
        this.setState({
            weather_category: event.target.value
        })
        
    }

    updateTemp = (event) => {
        // console.log(event.target.value)
        this.setState({
            temp_category: event.target.value
        })

    }
    updateType = (event) => {
        // console.log(event.target.value)
        this.setState({
            clothes_type: event.target.value
        })

    }

    updateImage = (event) => {
        // console.log(event.target.value)
        this.setState({
            image: event.target.value
        })

    }

    onSubmitForm = () => {
        // console.log("form submitted")
        // event.preventDefault()
        fetch("http://localhost:3000/clothes",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                clothe: {
                    name: this.state.name,
                    location: this.state.location,
                    weather_category: parseInt(this.state.weather_category),
                    temp_category: parseInt(this.state.temp_category),
                    clothes_type: this.state.clothes_type,
                    image: this.state.image,
                    user_id: this.props.user.id
                }
            })
        })        
        .then(response => response.json())
        .then(clothesItem => {this.props.addClothes(clothesItem)
        })

    }


    render(){
        return(
            <div>
                <form onSubmit={this.onSubmitForm}>

                    <br/>
                    <label>Name</label>
                    <input type="text" placeholder="Blue Shirt" onChange={this.updateName}/>
                    <br/>
                    <label>Location</label>
                    <input type="text" placeholder="Closet 1, Drawer 1" onChange={this.updateLocation}/>
                    
                    <br/>
                    <label>Weather Type</label>
                    <select onChange={this.updateWeather}>
                        <option value="10">Any Weather</option>
                        <option value="9">Snow</option>
                        <option value="8">Sleet</option>
                        <option value="7">Hail</option>
                        <option value="6">Thunderstorms</option>
                        <option value="5">Heavy Rain</option>
                        <option value="4">Light Rain</option>
                        <option value="3">Showers</option>
                        <option value="2">Heavy Clouds</option>
                        <option value="1">Light Clouds</option>
                        <option value="0">Clear</option>
                    </select>
                    
                    <br/>
                    <label>Season</label>
                    <select onChange={this.updateTemp}>
                        <option value="1000">Any Season</option>
                        <option value="75">Summer</option>
                        <option value="60">Spring</option>
                        <option value="40">Fall</option>
                        <option value="0">Winter</option>
                    </select>
                    
                    <br/>
                    <label>Clothing Type</label>
                    <select onChange={this.updateType}>
                        <option value="hat">Hat</option>
                        <option value="jewelry">Jewelry</option>
                        <option value="shirt">Shirt</option>
                        <option value="belt">Belt</option>
                        <option value="pants">Pants</option>
                        <option value="dress">Dress</option>
                        <option value="shoes">Shoes</option>
                    </select>
                    
                    <br/>
                    <br/>
                    <label>Image URL</label>
                    <input type="text" placeholder="https://www.imageURL.png" onChange={this.updateImage}/>
                    
                    <br/>
                    {/* <input type="submit" value="Add Clothing"/> */}
                    <Link onClick={this.onSubmitForm} to="/clothescontainer">Add Clothing</Link>

                    
                </form>
            </div>
        )
    }
}

export default AddClothes