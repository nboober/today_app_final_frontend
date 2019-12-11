import React from 'react'
import ClothingItem from './ClothingItem'

class OutfitShow extends React.Component{
    render(){
        return(
            <div>
                List of Clothes for this Outfit
                <ClothingItem/>
                <ClothingItem/>
                <ClothingItem/>
                <ClothingItem/>
                <ClothingItem/>
                <ClothingItem/>
            </div>
        )
    }
}

export default OutfitShow