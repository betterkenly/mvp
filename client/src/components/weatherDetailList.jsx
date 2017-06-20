import React from 'react';

const WeatherDetailList = (props) => {
  console.log(props.weatherDetail.main.temp_max);
  // var humidity = props.weatherDetail.main.humidity;
  return (
  <div>
    {/*<h4> The Current Weather of {props.weatherDetail['main']['humidity']}:  </h4>*/}
    <ul>
      {/*Humidity: {props.weatherDetail.main.humidity}*/}
      {/*Pressure: {props.weatherDetail.main.pressure}hpa
      Temperature: {props.weatherDetail.main.temp}(K) /  {(props.weatherDetail.main.temp - 273.15)}(°C)
      Temp max: {props.weatherDetail.main.temp_max}
      Temp min: {props.weatherDetail.main.temp_min}*/}

      
    </ul>



    
  </div>
  )
}

export default WeatherDetailList;