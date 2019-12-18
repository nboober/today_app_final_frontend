import React from 'react'
import _ from 'lodash';

class OutfitShowItem extends React.Component{
    render(){
        // {console.log(this.props.type)}
        return(
            this.props.clothingItem ? 

            <div id={this.props.clothingItem.clothes_type} data-interval="false" className="carousel slide" data-ride="carousel" style={{border: "1px solid black", width: "200px", height: "200px", display: "inline-block"}}>
                <ol className="carousel-indicators">
                {_.times(this.props.type.length, (index) => {
                    return <li key={index} data-target={'#' + this.props.clothingItem.clothes_type} data-slide-to={index} className="active"></li>
                })}
                </ol>
                <div className="carousel-inner" >

                    <div className="carousel-item active">
                        <img className="d-block w-100" src={this.props.clothingItem.image} alt={this.props.clothingItem.name}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{this.props.clothingItem.name}</h5>
                            <p>{this.props.clothingItem.location}</p>
                        </div>
                    </div>

                {this.props.type.map(item => {
                    // console.log(item)
                    return  <div key={item.name} className="carousel-item">
                                <img className="d-block w-100" src={item.image} alt={item.name}/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{item.name}</h5>
                                    <p>{item.location}</p>
                                </div>
                            </div>
                })}
                    
                </div>
                <a className="carousel-control-prev" href={'#' + this.props.clothingItem.clothes_type} role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href={'#' + this.props.clothingItem.clothes_type} role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div> : null
            
        )
    }
}

export default OutfitShowItem