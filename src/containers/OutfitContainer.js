import React from 'react'
import {Link} from 'react-router-dom';

class OutfitContainer extends React.Component{

    render(){
        let hat = this.props.hats ? <img src={this.props.hats.image} alt="hat" className="outfitContainerPictureSize"/> : <img src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-34-512.png" alt="no image" className="outfitContainerPictureSize"/>
        let jewelry = this.props.jewelry ? <img src={this.props.jewelry.image} alt="jewelry" className="outfitContainerPictureSize"/> : <img src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-34-512.png" alt="no image" className="outfitContainerPictureSize"/>
        let jackets = this.props.jackets ? <img src={this.props.jackets.image} alt="jackets" className="outfitContainerPictureSize"/> : <img src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-34-512.png" alt="no image" className="outfitContainerPictureSize"/>
        let shirts = this.props.shirts ? <img src={this.props.shirts.image} alt="shirts" className="outfitContainerPictureSize"/> : <img src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-34-512.png" alt="no image" className="outfitContainerPictureSize"/>
        let belts = this.props.belts ? <img src={this.props.belts.image} alt="belts" className="outfitContainerPictureSize"/> : <img src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-34-512.png" alt="no image" className="outfitContainerPictureSize"/>
        let pants = this.props.pants ? <img src={this.props.pants.image} alt="pants" className="outfitContainerPictureSize"/> : <img src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-34-512.png" alt="no image" className="outfitContainerPictureSize"/>
        let shoes = this.props.shoes ? <img src={this.props.shoes.image} alt="shoes" className="outfitContainerPictureSize"/> : <img src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-34-512.png" alt="no image" className="outfitContainerPictureSize"/>
        return(
            <Link to="/outfitshow" onClick={() => this.props.selectedOutfit(null, this.props.hats, this.props.jewelry, this.props.jackets, this.props.shirts, this.props.belts,this.props.pants, this.props.shoes)}>
                <div className="outfitContainer">
                    {hat}
                    <br/>
                    {jewelry}
                    <br/>
                    {jackets}
                    <br/>
                    {shirts}
                    <br/>
                    {belts}
                    <br/>
                    {pants}
                    <br/>
                    {shoes}
                </div>
            </Link>
        )
    }
}

export default OutfitContainer