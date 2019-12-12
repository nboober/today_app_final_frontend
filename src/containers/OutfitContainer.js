import React from 'react'
import {Link} from 'react-router-dom';
import ClothingItem from '../components/ClothingItem'

class OutfitContainer extends React.Component{
    render(){
        return(
            <Link to="/outfitshow">
                <div>
                    This is the outfits container
                    Shirt Picture
                    belt Picture
                    pants Picture
                    shoes Picture
                </div>
            </Link>
        )
    }
}

export default OutfitContainer