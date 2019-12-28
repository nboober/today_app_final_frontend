import React from 'react'
import OutfitShowItem from './OutfitShowItem'
import { Link } from "react-router-dom"

class OutfitShow extends React.Component{
    constructor(){
        super()
        this.state={
            hat:{},
            jewelry:{},
            jacket:{},
            shirt:{},
            belt:{},
            pants:{},
            shoes:{},
            outfit:[]
        }
    }

    componentDidMount = () => {
        this.setState({
            hat: this.props.outfit[0],
            jewelry: this.props.outfit[1],
            jacket: this.props.outfit[2],
            shirt: this.props.outfit[3],
            belt: this.props.outfit[4],
            pants: this.props.outfit[5],
            shoes: this.props.outfit[6],
            outfit:[]
        })
    }

    clothingChange = (item, type) => {
        console.log("item changed")
        console.log(item)
        console.log("clothing type " + type)

        let array = [];

        if(type === "hat"){
            array = this.props.hats
        }
        if(type === "jewelry"){
            array = this.props.jewelry
        }
        if(type === "jacket"){
            array = this.props.jackets
        }
        if(type === "shirt"){
            array = this.props.shirts
        }
        if(type === "belt"){
            array = this.props.belts
        }
        if(type === "pants"){
            array = this.props.pants
        }
        if(type === "shoes"){
            array = this.props.shoes
        }

        let newItem = array.filter((item)=>{
            return item.id == parseInt(item)
        })
        console.log(array)

    }

    favorite = () => {
        console.log("favorited")

        fetch("http://localhost:3000/outfits", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user_id: this.props.user.id
            })
        })
        .then(response => response.json())
        .then(data => {console.log(data)

            this.props.outfit.map((item)=>{
                fetch("http://localhost:3000/outfit_clothes", {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json",
                        "Accept":"application/json"
                    },
                    body: JSON.stringify({
                        outfit_clothe: {
                            outfit_id: data.id,
                            clothe_id: item.id
                        }
                    })
                })
                .then(res => res.json())
                .then(combo => console.log(combo))
            })

        })
    }

    render(){
        {console.log(this.props.outfit)}
        return(
            <div>
                <h2>Your Outfit</h2>
                <OutfitShowItem clothingChange={this.clothingChange} selectClothingItem={this.props.selectClothingItem} clothingItem={this.state.hat} type={this.props.hats}/>
                <OutfitShowItem clothingChange={this.clothingChange} selectClothingItem={this.props.selectClothingItem} clothingItem={this.state.jewelry} type={this.props.jewelry}/>
                <OutfitShowItem clothingChange={this.clothingChange} selectClothingItem={this.props.selectClothingItem} clothingItem={this.state.jacket} type={this.props.jackets}/>
                <OutfitShowItem clothingChange={this.clothingChange} selectClothingItem={this.props.selectClothingItem} clothingItem={this.state.shirt} type={this.props.shirts}/>
                <OutfitShowItem clothingChange={this.clothingChange} selectClothingItem={this.props.selectClothingItem} clothingItem={this.state.belt} type={this.props.belts}/>
                <OutfitShowItem clothingChange={this.clothingChange} selectClothingItem={this.props.selectClothingItem} clothingItem={this.state.pants} type={this.props.pants}/>
                <OutfitShowItem clothingChange={this.clothingChange} selectClothingItem={this.props.selectClothingItem} clothingItem={this.state.shoes} type={this.props.shoes}/>

                <Link to="/" onClick={this.favorite}>Favorite</Link>

            </div>
        )
    }
}

export default OutfitShow