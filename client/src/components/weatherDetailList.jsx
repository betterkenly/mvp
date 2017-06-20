import React from 'react';

const WeatherDetailList = (props) => (
  <div>
    <h4> weather detail of zip code search </h4>
    There are {props.weatherDetail.length}
  </div>
)

export default WeatherDetailList;