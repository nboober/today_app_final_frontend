import React from 'react'
import {Link} from 'react-router-dom';

class OutfitContainer extends React.Component{

    render(){
        return(
            <Link to="/outfitshow" onClick={() => this.props.selectedOutfit(this.props.hats, this.props.jewelry, this.props.shirts, this.props.belts,this.props.pants, this.props.shoes)}>
                <div style={{border: "1px solid black", width: "200px", textAlign: "center", display: "inline-block"}}>
                    <img src={this.props.hats.image} alt="belt" style={{width: "50px"}}/>
                    <br/>
                    <img src={this.props.jewelry.image} alt="belt" style={{width: "50px"}}/>
                    <br/>
                    <img src={this.props.shirts.image} alt="belt" style={{width: "50px"}}/>
                    <br/>
                    <img src={this.props.belts.image} alt="belt" style={{width: "50px"}}/>
                    <br/>
                    <img src={this.props.pants.image} alt="belt" style={{width: "50px"}}/>
                    <br/>
                    <img src={this.props.shoes.image} alt="belt" style={{width: "50px"}}/>
                </div>
            </Link>
        )
    }
}

export default OutfitContainer