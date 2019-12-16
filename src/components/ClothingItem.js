import React from 'react'
import {Link} from 'react-router-dom'

class ClothingItem extends React.Component{
    render(){
        return(
                // I can't put an anchor tag in an anchor tag. So how do I update clothes while still showing the outfit?????
            <Link to="/updateclothingitem" onClick={()=>this.props.selectClothingItem(this.props.clothingItem)}>
                <div style={{border: "1px solid black", width: "200px", display: "inline-block"}}>
                    <h2>{this.props.clothingItem.name}</h2>
                    <img style={{width: "50px"}} src={this.props.clothingItem.image} alt={this.props.clothingItem.name}/>
                    <p>{this.props.clothingItem.location}</p>
                </div>            
            </Link>
        )
    }
}

export default ClothingItem