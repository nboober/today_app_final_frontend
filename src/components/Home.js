import React from 'react'
import Search from './Search'
import Filter from './Filter'
import OutfitContainer from '../containers/OutfitContainer'

class Home extends React.Component{
    render(){
        return(
            <div>
                <Filter/>
                <OutfitContainer/>
            </div>
        )
    }
}

export default Home