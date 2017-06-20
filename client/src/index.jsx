import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import WeatherDetailList from './components/weatherDetailList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      zipCode: '',
      weatherDetail: ''
    }

  }
  setTheState (obj) {
    this.setState({weatherDetail: obj });
  }

  search (zipCode) {
    console.log(`${zipCode} was searched`);
    $.ajax({
      method: 'GET',
      url: '/search',
      type: 'json',
      data: { zipCode: zipCode },
      success: (data) => {
        this.setTheState(JSON.parse(data));
      },
      error: (err) => {
        console.log('unable to send POST request');
        console.log(err);
      } 
    });
  }

  render () {
    return (<div>
      <h1>Weather Information</h1>
      <Search onSearch={this.search.bind(this)}/>
      <WeatherDetailList weatherDetail={this.state.weatherDetail} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));