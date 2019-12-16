import React from 'react'
import {Link} from 'react-router-dom'

class UpdateClothingItem extends React.Component{
    constructor(){
        super()
        this.state={
            name: "",
            location: "",
            weather_category: [],
            temp_category: [],
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
        },()=>{this.checkCheckBoxes()})
    }

    checkCheckBoxes = () => {

        let weather = this.state.weather_category;
        let temp = this.state.temp_category

        if(temp.includes("any")){
            document.getElementById("anySeason").checked = true
        }
        
        if(temp.includes("summer")){
            document.getElementById("summer").checked = true
        }

        if(temp.includes("spring")){
            document.getElementById("spring").checked = true
        }

        if(temp.includes("fall")){
            document.getElementById("fall").checked = true
        }

        if(temp.includes("winter")){
            document.getElementById("winter").checked = true
        }

        if(weather.includes("any")){
            document.getElementById("anyWeather").checked = true
        }

        if(weather.includes("snow")){
            document.getElementById("snow").checked = true
        }

        if(weather.includes("sleet")){
            document.getElementById("sleet").checked = true
        }

        if(weather.includes("hail")){
            document.getElementById("hail").checked = true
        }

        if(weather.includes("rain")){
            document.getElementById("rain").checked = true
        }

        if(weather.includes("cloudy")){
            document.getElementById("cloudy").checked = true
        }

        if(weather.includes("clear")){
            document.getElementById("clear").checked = true
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

        // console.log(this.state.weather_category)

        if(this.state.weather_category.includes(event.target.value)){
            let index = this.state.weather_category.indexOf(event.target.value);
            if (index > -1) {
                this.state.weather_category.splice(index, 1);
            }
            console.log(this.state.weather_category)
        }else{

            this.setState({
                weather_category: [...this.state.weather_category, event.target.value]
            },()=>{console.log(this.state.weather_category)
            })

        }
        
    }

    updateTemp = (event) => {
        // console.log(event.target.value)

        // console.log(this.state.temp_category)
        if(this.state.temp_category.includes(event.target.value)){
            let index = this.state.temp_category.indexOf(event.target.value);
            if (index > -1) {
            this.state.temp_category.splice(index, 1);
            }
            console.log(this.state.temp_category)
        }else{

            this.setState({
                temp_category: [...this.state.temp_category, event.target.value]
            },()=>{console.log(this.state.temp_category)
            })

        }

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
                    <label>Weather Type</label><br/>
                    <input id="anyWeather" type='checkbox' value="any" onChange={this.updateTemp}/>Any Season<br/>
                    <input id="snow" type='checkbox' value="snow" onChange={this.updateTemp}/>Snow<br/>
                    <input id="sleet" type='checkbox' value="sleet" onChange={this.updateTemp}/>Sleet<br/>
                    <input id="hail" type='checkbox' value="hail" onChange={this.updateTemp}/>Hail<br/>
                    <input id="rain" type='checkbox' value="rain" onChange={this.updateTemp}/>Rain<br/>
                    <input id="cloudy" type='checkbox' value="cloudy" onChange={this.updateTemp}/>Cloudy<br/>
                    <input id="clear" type='checkbox' value="Clear" onChange={this.updateTemp}/>Clear<br/>
                    
                    <br/>
                    <label>Seasons</label><br/>
                    <input id="anySeason" type='checkbox' value="any" onChange={this.updateTemp}/>Any Season<br/>
                    <input id="summer" type='checkbox' value="summer" onChange={this.updateTemp}/>Summer<br/>
                    <input id="spring" type='checkbox' value="spring" onChange={this.updateTemp}/>Spring<br/>
                    <input id="fall" type='checkbox' value="fall" onChange={this.updateTemp}/>Fall<br/>
                    <input id="winter" type='checkbox' value="winter" onChange={this.updateTemp}/>Winter<br/>
                    
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