import React from 'react';

const HistoryList = (props) => {

return(
  <div>
    <h4>click to get search history</h4>
    <button onClick={props.getHistory}>search</button>
    <ul>
    <li>-******-</li>
     {props.history.map( (each, i) => <li key = {i}>   date      :      {each.date}      ,       Zip  Code      :      {each.zip}</li> ) }
    <li>-******-</li>
    </ul>
  </div>
)
}

export default HistoryList;