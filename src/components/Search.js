import React from 'react'

class Search extends React.Component{
    render(){
        return(
            <div>
                <label>Search</label>
                <input type="text" onChange={this.props.search}/>
            </div>
        )
    }
}

export default Search