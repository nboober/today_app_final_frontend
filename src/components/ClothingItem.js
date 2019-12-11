import React from 'react'
import {Link} from 'react-router-dom'

class ClothingItem extends React.Component{
    render(){
        return(
            <Link to="/updateclothingitem">
                <div>
                    Clothing Item
                </div>
            
            </Link>
        )
    }
}

export default ClothingItem