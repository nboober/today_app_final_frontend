import React from 'react'
import {Link} from 'react-router-dom'

class UpdateClothingItem extends React.Component{
    constructor(){
        super()
        this.state={
            name: "",
            location: "",
            weather_category: "",
            temp_category: "",
            clothes_type: "",
            image: ""
        }
    }

    componentDidMount = () => {
        this.setState({
            name: this.props.selectedClothingItem.name,
            location: this.props.selectedClothingItem.location,
            weather_category: this.props.selectedClothingItem.weather_category,
            temp_category: this.props.selectedClothingItem.temp_category,
            clothes_type: this.props.selectedClothingItem.clothes_type,
            image: this.props.selectedClothingItem.image

        })
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

        let id = this.props.selectedClothingItem.id

        // console.log(id)

        fetch(`http://localhost:3000/clothes/${id}`,{
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                clothe: {
                    name: this.state.name,
                    location: this.state.location,
                    weather_category: this.state.weather_category,
                    temp_category: this.state.temp_category,
                    clothes_type: this.state.clothes_type,
                    image: this.state.image,
                    user_id: this.props.user.id
                }
            })
        })
        .then(response => response.json())
        .then(clothesItem => {this.props.updateClothes(clothesItem)
        })
    }

    deleteClothes = () => {
        console.log("deleting")

        let id = this.props.selectedClothingItem.id

        fetch(`http://localhost:3000/clothes/${id}`,{
            method: 'DELETE'
        }).then(()=>{
            console.log("deleted item")
            this.props.deleteClothes(this.props.selectedClothingItem)
        }).catch(err => {
            console.log(err)
        })
    }


    render(){
        // {console.log(this.props.selectedClothingItem)}
        return(
            <div>
                <h2>Update Clothing Item</h2>
                <form onSubmit={this.onSubmitForm}>

                    <br/>
                    <label>Name</label>
                    <input type="text" placeholder="Blue Shirt" onChange={this.updateName} value={this.state.name}/>
                    <br/>
                    <label>Location</label>
                    <input type="text" placeholder="Closet 1, Drawer 1" onChange={this.updateLocation} value={this.state.location}/>
                    
                    <br/>
                    <label>Weather Type</label>
                    <select onChange={this.updateWeather} value={this.state.weather_category}>
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
                    <select onChange={this.updateTemp} value={this.state.temp_category}>
                        <option value="1000">Any Season</option>
                        <option value="75">Summer</option>
                        <option value="60">Spring</option>
                        <option value="40">Fall</option>
                        <option value="0">Winter</option>
                    </select>
                    
                    <br/>
                    <label>Clothing Type</label>
                    <select onChange={this.updateType} value={this.state.clothes_type}>
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
                    <input type="text" placeholder="https://www.imageURL.png" onChange={this.updateImage}  value={this.state.image}/>
                    
                    <br/>
                    {/* <input type="submit" value="Update Clothing" /> */}
                    <Link onClick={this.onSubmitForm} to="/clothescontainer">Update</Link>
                    <br/>
                    <Link onClick={this.deleteClothes} to="/clothescontainer">Delete Clothing</Link>
                    
                </form>
            </div>
        )
    }
}

export default UpdateClothingItem