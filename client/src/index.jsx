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
      weatherDetail: []
    }

  }

  search (zipCode) {
    console.log(`${zipCode} was searched`);
    $.ajax({
      method: 'POST',
      url: '/search',
      type: 'json',
      data: { zipCode: zipCode },
      success: (data) => {
        console.log(data);
      },
      error: () => {
        console.log('unable to send GET request')
      } 
    });
  }

  render () {
    return (<div>
      <h1>Weather Information</h1>
      <WeatherDetailList weatherDetail={this.state.weatherDetail} />
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));