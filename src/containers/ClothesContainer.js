import React from 'react'
import ClothingItem from '../components/ClothingItem'
import Search from '../components/Search'

class ClothesContainer extends React.Component{
    render(){
        return(
            <div>
                List of Clothes
                <Search/>
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

export default ClothesContainer