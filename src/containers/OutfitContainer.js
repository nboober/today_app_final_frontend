import React from 'react'
import {Link} from 'react-router-dom';

class OutfitContainer extends React.Component{

    render(){
        let hat = this.props.hats ? <img src={this.props.hats.image} alt="hat" style={{width: "50px"}}/> : <img src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-34-512.png" alt="no image" style={{width: "50px"}}/>
        let jewelry = this.props.jewelry ? <img src={this.props.jewelry.image} alt="jewelry" style={{width: "50px"}}/> : <img src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-34-512.png" alt="no image" style={{width: "50px"}}/>
        let jackets = this.props.jackets ? <img src={this.props.jackets.image} alt="jackets" style={{width: "50px"}}/> : <img src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-34-512.png" alt="no image" style={{width: "50px"}}/>
        let shirts = this.props.shirts ? <img src={this.props.shirts.image} alt="shirts" style={{width: "50px"}}/> : <img src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-34-512.png" alt="no image" style={{width: "50px"}}/>
        let belts = this.props.belts ? <img src={this.props.belts.image} alt="belts" style={{width: "50px"}}/> : <img src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-34-512.png" alt="no image" style={{width: "50px"}}/>
        let pants = this.props.pants ? <img src={this.props.pants.image} alt="pants" style={{width: "50px"}}/> : <img src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-34-512.png" alt="no image" style={{width: "50px"}}/>
        let shoes = this.props.shoes ? <img src={this.props.shoes.image} alt="shoes" style={{width: "50px"}}/> : <img src="https://cdn3.iconfinder.com/data/icons/modifiers-essential/48/v-34-512.png" alt="no image" style={{width: "50px"}}/>
        return(
            <Link to="/outfitshow" onClick={() => this.props.selectedOutfit(null, this.props.hats, this.props.jewelry, this.props.jackets, this.props.shirts, this.props.belts,this.props.pants, this.props.shoes)}>
                <div style={{background: "#000000", opacity: "0.8", border: "1px solid black", width: "200px", textAlign: "center", display: "inline-block"}}>
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