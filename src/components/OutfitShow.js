import React from 'react'
import OutfitShowItem from './OutfitShowItem'
import { Link } from "react-router-dom"

class OutfitShow extends React.Component{

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
                <OutfitShowItem selectClothingItem={this.props.selectClothingItem} clothingItem={this.props.outfit[0]} type={this.props.hats}/>
                <OutfitShowItem selectClothingItem={this.props.selectClothingItem} clothingItem={this.props.outfit[1]} type={this.props.jewelry}/>
                <OutfitShowItem selectClothingItem={this.props.selectClothingItem} clothingItem={this.props.outfit[2]} type={this.props.jackets}/>
                <OutfitShowItem selectClothingItem={this.props.selectClothingItem} clothingItem={this.props.outfit[3]} type={this.props.shirts}/>
                <OutfitShowItem selectClothingItem={this.props.selectClothingItem} clothingItem={this.props.outfit[4]} type={this.props.belts}/>
                <OutfitShowItem selectClothingItem={this.props.selectClothingItem} clothingItem={this.props.outfit[5]} type={this.props.pants}/>
                <OutfitShowItem selectClothingItem={this.props.selectClothingItem} clothingItem={this.props.outfit[6]} type={this.props.shoes}/>

                <Link to="/" onClick={this.favorite}>Favorite</Link>

            </div>
        )
    }
}

export default OutfitShow