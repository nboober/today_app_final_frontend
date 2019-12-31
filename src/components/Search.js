import React from 'react'

class Search extends React.Component{
    render(){
        return(
            <div style={{color: "white"}}>
                <label>Search</label>
                <input type="text" value={this.props.searchText} onChange={this.props.search}/>
            </div>
        )
    }
}

export default Search