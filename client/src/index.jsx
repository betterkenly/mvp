import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import WeatherDetailList from './components/weatherDetailList.jsx';
import HistoryList from './components/historyList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      history: [],
      weatherDetail: []
    }

  }
  setTheState (obj) {
    this.setState({weatherDetail: obj });
  }

  setHistory (hist) {
    this.setState({history: hist});
    console.log('this is the hist', this.state.history);
  }

  search (zipCode) {
    console.log(`${zipCode} was searched`);
    // this.state.history.push(zipCode);
    $.ajax({
      method: 'GET',
      url: '/search',
      type: 'json',
      data: { zipCode: zipCode },
      success: (data) => {
        this.setTheState(JSON.parse(data));
        // console.log(typeof JSON.parse(data));
   
      },
      error: (err) => {
        console.log('unable to send POST request');
        console.log(err);
      } 
    });
  }

  getHistory (e) {
    e.preventDefault();
    $.ajax({
      method:'GET',
      url:'/search/history',
      type: 'json',
      data: {test: 'test, can you see me?'},
      success: (data) => {
        console.log('getHist: ', data);
        this.setHistory(JSON.parse(data));
        // console.log('hiii');
        // console.log(data);
      },
      error: (err) => {
        console.log('can not get history');
        console.log(err);
      }
    })
    // console.log(this.state.history);
  }

  render () {
    return (<div>
      <h1>Weather Information</h1>
      <Search onSearch={this.search.bind(this)}/>
      <WeatherDetailList weatherDetail={this.state.weatherDetail} />
      <HistoryList getHistory={this.getHistory.bind(this)} history={this.state.history}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));