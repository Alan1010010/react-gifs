import React, { Component } from 'react';

class SearchBar extends Component {

// componentDidMount(){
//    this.input.focus();
// }

  handleChange = (e) => {
    this.props.searchFunction(e.target.value);
  }

  render() {
    return (
        <input autoFocus="true" type="text" className="form-control form-search" onChange={this.handleChange}/>
      )
  }
}

export default SearchBar;
