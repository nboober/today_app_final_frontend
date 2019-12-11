import React from 'react'
import Search from './Search'
import Filter from './Filter'
import OutfitContainer from '../containers/OutfitContainer'

class Home extends React.Component{
    render(){
        return(
            <div>
                <Search/>
                <Filter/>
                <OutfitContainer/>
                <OutfitContainer/>
                <OutfitContainer/>
                <OutfitContainer/>
                <OutfitContainer/>
            </div>
        )
    }
}

export default Home