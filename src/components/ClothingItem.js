import React from 'react'
import {Link} from 'react-router-dom'

class ClothingItem extends React.Component{
    render(){
        return(
            this.props.clothingItem ? 

            <Link to="/updateclothingitem" onClick={()=>this.props.selectClothingItem(this.props.clothingItem)}>
                <div className="whiteFont carousalClothingItems" >
                    <h2>{this.props.clothingItem.name}</h2>
                    <img className="indClothingItem" src={this.props.clothingItem.image} alt={this.props.clothingItem.name}/>
                    <p>{this.props.clothingItem.location}</p>
                </div>            
            </Link> : null
            
        )
    }
}

export default ClothingItem

