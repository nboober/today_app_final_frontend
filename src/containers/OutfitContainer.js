import React from 'react'
import {Link} from 'react-router-dom';
import ClothingItem from '../components/ClothingItem'

class OutfitContainer extends React.Component{
    render(){
        return(
            <Link to="/outfitshow">
                <div>
                    This is the outfits container
                    <ClothingItem/>
                    <ClothingItem/>
                    <ClothingItem/>
                    <ClothingItem/>
                </div>
            </Link>
        )
    }
}

export default OutfitContainer