import React from 'react'
import ClothingItem from '../components/ClothingItem'
import Search from '../components/Search'

class ClothesContainer extends React.Component{

    render(){
        return(
            <div className="whiteFont overflowY opace ">
                <h2>My List of Clothes</h2>
                <Search search={this.props.search} searchText={this.props.searchText} />
                {this.props.clothes.map((clothingItem)=>{
                    return <ClothingItem key={clothingItem.id} selectClothingItem={this.props.selectClothingItem} clothingItem={clothingItem} />
                })}

            </div>
        )
    }
}

export default ClothesContainer