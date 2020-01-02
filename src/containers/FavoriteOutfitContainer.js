import React from 'react'
import {Link} from 'react-router-dom';

class FavoriteOutfitContainer extends React.Component{
    constructor(){
        super()
        this.state={
            hat: {},
            jewelry: {},
            jacket: {},
            shirt: {},
            belt: {},
            pants: {},
            shoes: {}
        }
    }

    componentDidMount = () => {
        let hat = "";
        let jewelry = "";
        let jacket = "";
        let shirt = "";
        let belt = "";
        let pants = "";
        let shoes = "";

            this.props.outfit.clothes.map((item)=>{
                if(item.clothes_type === "hat"){
                    hat = item
                }
                if(item.clothes_type === "jewelry"){
                    jewelry = item
                }
                if(item.clothes_type === "jacket"){
                    jacket = item
                }
                if(item.clothes_type === "shirt"){
                    shirt = item
                }
                if(item.clothes_type === "belt"){
                    belt = item
                }
                if(item.clothes_type === "pants"){
                    pants = item
                }
                
                if(item.clothes_type === "shoes"){
                    shoes = item
                }
            })

        this.setState({
            hat: hat,
            jewelry: jewelry,
            jacket: jacket,
            shirt: shirt,
            belt: belt,
            pants: pants,
            shoes: shoes
        })
    }

    render(){

        let hat = this.state.hat ? <img src={this.state.hat.image} alt="hat" style={{width: "50px"}}/> : <img src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-34-512.png" alt="no image" style={{width: "50px"}}/>
        let jewelry = this.state.jewelry ? <img src={this.state.jewelry.image} alt="jewelry" style={{width: "50px"}}/> : <img src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-34-512.png" alt="no image" style={{width: "50px"}}/>
        let jacket = this.state.jacket ? <img src={this.state.jacket.image} alt="jackets" style={{width: "50px"}}/> : <img src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-34-512.png" alt="no image" style={{width: "50px"}}/>
        let shirt = this.state.shirt ? <img src={this.state.shirt.image} alt="shirts" style={{width: "50px"}}/> : <img src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-34-512.png" alt="no image" style={{width: "50px"}}/>
        let belt = this.state.belt ? <img src={this.state.belt.image} alt="belts" style={{width: "50px"}}/> : <img src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-34-512.png" alt="no image" style={{width: "50px"}}/>
        let pants = this.state.pants ? <img src={this.state.pants.image} alt="pants" style={{width: "50px"}}/> : <img src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-34-512.png" alt="no image" style={{width: "50px"}}/>
        let shoes = this.state.shoes ? <img src={this.state.shoes.image} alt="shoes" style={{width: "50px"}}/> : <img src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-34-512.png" alt="no image" style={{width: "50px"}}/>
        
        return(
            <Link to="/favoriteoutfitshow" onClick={() => this.props.selectedOutfit(this.props.outfit.id, this.state.hat, this.state.jewelry, this.state.jacket, this.state.shirt, this.state.belt,this.state.pants, this.state.shoes)}>
                <div className="outfitContainer">
                    {hat}
                    <br/>
                    {jewelry}
                    <br/>
                    {jacket}
                    <br/>
                    {shirt}
                    <br/>
                    {belt}
                    <br/>
                    {pants}
                    <br/>
                    {shoes}
                </div>
            </Link>
        )
    }
}

export default FavoriteOutfitContainer