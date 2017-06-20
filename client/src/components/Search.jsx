import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: ''
    }
  }

  onChange (e) {
    this.setState({
      zipCode: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.zipCode);
  }

  render() {
    return (<div>
      <h4></h4>
      Please enter zip code for current weather: <input value={this.state.zipCode} onChange={this.onChange.bind(this)}/>       
      <button onClick={this.search.bind(this)}> Submit </button>
    </div>) 
  }
}

export default Search;