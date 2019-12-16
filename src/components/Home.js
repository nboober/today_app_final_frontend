import React from 'react'
import Filter from './Filter'
import OutfitContainer from '../containers/OutfitContainer'
import _ from 'lodash';

class Home extends React.Component{
    render(){
        return(
            <div >
                <h2>My Outfits</h2>
                <Filter/>
                {_.times(this.props.max, (index) => {
                    let hats = this.props.hats[index] ? this.props.hats[index] : this.props.hats[index-1]
                    let jewelry = this.props.jewelry[index] ? this.props.jewelry[index] : this.props.jewelry[index-1]
                    let shirts = this.props.shirts[index] ? this.props.shirts[index] : this.props.shirts[index-1]
                    let belts = this.props.belts[index] ? this.props.belts[index] : this.props.belts[index-1]
                    let pants = this.props.pants[index] ? this.props.pants[index] : this.props.pants[index-1]
                    let shoes = this.props.shoes[index] ? this.props.shoes[index] : this.props.shoes[index-1]

                    return <OutfitContainer 
                                key={index}
                                hats={hats} 
                                jewelry={jewelry}
                                shirts={shirts}
                                belts={belts} 
                                pants={pants} 
                                shoes={shoes} 
                                selectedOutfit={this.props.selectedOutfit}
                                />
                })}
            </div>
        )
    }
}

export default Home