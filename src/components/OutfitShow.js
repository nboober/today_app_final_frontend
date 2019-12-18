import React from 'react'
import OutfitShowItem from './OutfitShowItem'

class OutfitShow extends React.Component{
    render(){
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
            </div>
        )
    }
}

export default OutfitShow