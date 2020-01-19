import React from 'react'
import OutfitShowItem from './OutfitShowItem'
import { Link } from "react-router-dom"

class FavoriteOutfitShow extends React.Component{
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
            outfit:[
                this.props.outfit[0],
                this.props.outfit[1],
                this.props.outfit[2],
                this.props.outfit[3],
                this.props.outfit[4],
                this.props.outfit[5],
                this.props.outfit[6]
            ]
        })
    }

    clothingChange = (item, type) => {
        console.log("item changed")
        console.log(item)
        console.log("clothing type " + type)

        if(type === "hat"){
            this.setState({
                hat: item
            },()=>{this.updateOutfit()})
        }
        if(type === "jewelry"){
            this.setState({
                jewelry: item
            },()=>{this.updateOutfit()})
        }
        if(type === "jacket"){
            this.setState({
                jacket: item
            },()=>{this.updateOutfit()})
        }
        if(type === "shirt"){
            this.setState({
                shirt: item
            },()=>{this.updateOutfit()})
        }
        if(type === "belt"){
            this.setState({
                belt: item
            },()=>{this.updateOutfit()})
        }
        if(type === "pants"){
            this.setState({
                pants: item
            },()=>{this.updateOutfit()})
        }
        if(type === "shoes"){
            this.setState({
                shoes: item
            },()=>{this.updateOutfit()})
        }

        // console.log(array)

    }

    updateOutfit = () => {
        this.setState({
            outfit: [this.state.hat, 
                    this.state.jewelry, 
                    this.state.jacket, 
                    this.state.shirt, 
                    this.state.belt, 
                    this.state.pants, 
                    this.state.shoes]
        },()=>{console.log(this.state.outfit)})
    }

    favorite = () => {

        

        console.log("favorited")
        let id = "";

        fetch("https://localhost:3000/outfits", {
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

            this.state.outfit.map((item)=>{
                fetch("https://localhost:3000/outfit_clothes", {
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
                .then(combo => {
                    console.log(combo);
                    id = data.id;
                    // console.log(id)
                })
                this.updateClothes(id)
            })
            
        })

    }

    updateClothes = (id) => {
        fetch(`https://localhost:3000/outfits/${id}`)
            .then(response => response.json())
            .then(newOutfit => this.props.updateUserClothes(newOutfit))
    }

    delete = () => {
        let id = this.props.id

        fetch(`https://localhost:3000/outfits/${id}`,{
            method: 'DELETE'
        }).then(()=>{
            this.props.deleteOutfit(id)
        }).catch(err => {
            console.log(err)
        })
    }

    render(){
        {console.log(this.props.outfit)}
        return(
            <div style={{backgroundImage: `url(${this.props.backgroundImage})`}} className="backgroundImage whiteFont">
                <h2>Your Outfit</h2>

                <Link to="/profile" className="btn btn-primary" onClick={this.favorite}>Favorite</Link>
                <Link to="/profile" onClick={this.delete}>Delete</Link>
                <br/>

                <OutfitShowItem clothingChange={this.clothingChange} selectClothingItem={this.props.selectClothingItem} clothingItem={this.props.outfit[0]} type={this.props.hats}/>
                <OutfitShowItem clothingChange={this.clothingChange} selectClothingItem={this.props.selectClothingItem} clothingItem={this.props.outfit[1]} type={this.props.jewelry}/>
                <OutfitShowItem clothingChange={this.clothingChange} selectClothingItem={this.props.selectClothingItem} clothingItem={this.props.outfit[2]} type={this.props.jackets}/>
                <OutfitShowItem clothingChange={this.clothingChange} selectClothingItem={this.props.selectClothingItem} clothingItem={this.props.outfit[3]} type={this.props.shirts}/>
                <OutfitShowItem clothingChange={this.clothingChange} selectClothingItem={this.props.selectClothingItem} clothingItem={this.props.outfit[4]} type={this.props.belts}/>
                <OutfitShowItem clothingChange={this.clothingChange} selectClothingItem={this.props.selectClothingItem} clothingItem={this.props.outfit[5]} type={this.props.pants}/>
                <OutfitShowItem clothingChange={this.clothingChange} selectClothingItem={this.props.selectClothingItem} clothingItem={this.props.outfit[6]} type={this.props.shoes}/>


            </div>
        )
    }
}

export default FavoriteOutfitShow