import React from 'react';

const HistoryList = (props) => (
  <div>
    <h4>show search history from db</h4>
    <h5>{props.history.map((each) => <li>{each}</li>)}</h5>
  </div>
)

export default HistoryList;