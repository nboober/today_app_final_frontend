import React from 'react'
import ClothingItem from '../components/ClothingItem'
import Search from '../components/Search'

class ClothesContainer extends React.Component{

    render(){
        return(
            <div>
                My List of Clothes
                <Search search={this.props.search} />
                {this.props.clothes.map((clothingItem)=>{
                    return <ClothingItem key={clothingItem.id} clothingItem={clothingItem} />
                })}

            </div>
        )
    }
}

export default ClothesContainer