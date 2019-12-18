import React from 'react'
import {Link} from 'react-router-dom'

class AddClothes extends React.Component{
    constructor(){
        super()
        this.state={
            name: "",
            location: "",
            weather_category: [],
            temp_category: [],
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
                    weather_category: this.state.weather_category.join(","),
                    temp_category: this.state.temp_category.join(","),
                    clothes_type: this.state.clothes_type,
                    image: this.state.image,
                    user_id: this.props.user.id
                }
            })
        })        
        .then(response => response.json())
        .then(clothesItem => {
            console.log(clothesItem)
            this.props.addClothes(clothesItem)
        })

    }


    render(){
        return(
            <div>
                <h2>Add Clothes</h2>
                <form onSubmit={this.onSubmitForm}>

                    <br/>
                    <label>Name</label>
                    <input type="text" placeholder="Blue Shirt" onChange={this.updateName}/>
                    <br/>
                    <label>Location</label>
                    <input type="text" placeholder="Closet 1, Drawer 1" onChange={this.updateLocation}/>
                    
                    <br/>
                    <label>Weather Type</label><br/>
                    <input type='checkbox' value="any" onChange={this.updateWeather}/>Any Weather Condition<br/>
                    <input type='checkbox' value="snow" onChange={this.updateWeather}/>Snow<br/>
                    <input type='checkbox' value="sleet" onChange={this.updateWeather}/>Sleet<br/>
                    <input type='checkbox' value="hail" onChange={this.updateWeather}/>Hail<br/>
                    <input type='checkbox' value="rain" onChange={this.updateWeather}/>Rain<br/>
                    <input type='checkbox' value="cloudy" onChange={this.updateWeather}/>Cloudy<br/>
                    <input type='checkbox' value="clear" onChange={this.updateWeather}/>Clear<br/>
                    
                    <br/>
                    <label>Seasons</label><br/>
                    <input type='checkbox' value="any" onChange={this.updateTemp}/>Any Season<br/>
                    <input type='checkbox' value="summer" onChange={this.updateTemp}/>Summer (75˚ or Higher)<br/>
                    <input type='checkbox' value="spring" onChange={this.updateTemp}/>Spring (60˚ to 75˚)<br/>
                    <input type='checkbox' value="fall" onChange={this.updateTemp}/>Fall (40˚ to 60˚)<br/>
                    <input type='checkbox' value="winter" onChange={this.updateTemp}/>Winter (40˚ or lower)<br/>

                    <br/>
                    <label>Clothing Type</label>
                    <select onChange={this.updateType}>
                        <option value="hat">Hat</option>
                        <option value="jewelry">Jewelry</option>
                        <option value="jacket">Jacket</option>
                        <option value="shirt">Shirt</option>
                        <option value="belt">Belt</option>
                        <option value="pants">Pants</option>
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