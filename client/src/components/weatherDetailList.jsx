import React from 'react';

const WeatherDetailList = (props) => {
  // console.log(props.weatherDetail.coord.lon);
  var main = props.weatherDetail? props.weatherDetail.main: 'loading';
  console.log(main.temp_max);
  return (
  <div>
    <h4> The Current Weather of {props.weatherDetail['name']}:  </h4>
    <ul>
      <li>Humidity: {props.weatherDetail.main.humidity}%</li>
      <li>Pressure: {props.weatherDetail.main.pressure}hpa</li>
      <li>Temperature: {props.weatherDetail.main.temp}(K) /  {Math.round(props.weatherDetail.main.temp - 273.15)}(°C)</li>
      <li>Temp max: {props.weatherDetail.main.temp_max}(K) / {Math.round(props.weatherDetail.main.temp_max - 273.15)}(°C)</li>
      <li>Temp min: {props.weatherDetail.main.temp_min}(K) / {Math.round(props.weatherDetail.main.temp_min - 273.15)}(°C)</li>
    </ul>
  </div>
  )
}

export default WeatherDetailList;