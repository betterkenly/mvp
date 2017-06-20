import React from 'react';

const HistoryList = (props) => (
  <div>
    <h4>click to get search history</h4>
    /*<button onClick={props.getHistory.bind(this)}>Submit</button>*/
    <h5>{props.history.map((each) => <li>{each}</li>)}</h5>
  </div>
)

export default HistoryList;