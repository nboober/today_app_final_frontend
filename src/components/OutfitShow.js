import React from 'react'
import ClothingItem from './ClothingItem'

class OutfitShow extends React.Component{
    render(){
        return(
            <div>
                <ClothingItem selectClothingItem={this.props.selectClothingItem} clothingItem={this.props.outfit[0]}/>
                <ClothingItem selectClothingItem={this.props.selectClothingItem} clothingItem={this.props.outfit[1]}/>
                <ClothingItem selectClothingItem={this.props.selectClothingItem} clothingItem={this.props.outfit[2]}/>
                <ClothingItem selectClothingItem={this.props.selectClothingItem} clothingItem={this.props.outfit[3]}/>
                <ClothingItem selectClothingItem={this.props.selectClothingItem} clothingItem={this.props.outfit[4]}/>
                <ClothingItem selectClothingItem={this.props.selectClothingItem} clothingItem={this.props.outfit[5]}/>
            </div>
        )
    }
}

export default OutfitShow