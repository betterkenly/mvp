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
      weatherDetail: {"coord":{"lon":-122.44,"lat":37.72},
"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"},{"id":521,"main":"Rain","description":"shower rain","icon":"09d"}],
"base":"stations","main":{"temp":302.24,"pressure":1010,"humidity":50,"temp_min":296.15,"temp_max":309.15},"visibility":16093,"wind":{"speed":5.1,"deg":310},"clouds":{"all":1},"dt":1497898560,"sys":{"type":1,"id":478,"message":0.0043,"country":"US","sunrise":1497876486,"sunset":1497929683},"id":0,"name":"San Francisco","cod":200}


    }

  }
  setTheState (obj) {
    this.setState({weatherDetail: obj });
  }

  setHistory (hist) {
    this.setState({history: hist});
    console.log('this is the hist', this.state.history);
  }

  deleteHist () {
    // this.setState({history: null});
    $.ajax({
      method: 'post',
      url: '/deletehist',
      type: 'json',
      data: { data: 'please'},
      success: (data) => {
        this.setState({history: []});
        alert(data);
      },
      error: () => {
        console.log('fail to clean');
      }
    });
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
      <h1>United States Weather Information</h1>
      <button onClick={this.deleteHist.bind(this)}>Clean Up Data Base</button>
      <Search onSearch={this.search.bind(this)}/>
      <WeatherDetailList weatherDetail={this.state.weatherDetail} />
      <HistoryList getHistory={this.getHistory.bind(this)} history={this.state.history}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));