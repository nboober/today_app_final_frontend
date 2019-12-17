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
                    let hats = this.props.hats[index] ? this.props.hats[index] : this.props.hats[0]
                    let jewelry = this.props.jewelry[index] ? this.props.jewelry[index] : this.props.jewelry[0]
                    let shirts = this.props.shirts[index] ? this.props.shirts[index] : this.props.shirts[0]
                    let belts = this.props.belts[index] ? this.props.belts[index] : this.props.belts[0]
                    let pants = this.props.pants[index] ? this.props.pants[index] : this.props.pants[0]
                    let shoes = this.props.shoes[index] ? this.props.shoes[index] : this.props.shoes[0]

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