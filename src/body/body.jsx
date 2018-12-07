import React from 'react';
import ReactDOM from 'react-dom';
import Primary from './primary.jsx';

function Body() {
  return (
    <div id="body">
      <Primary/>
      <div id='logo'>
        <img src="https://s3-us-west-2.amazonaws.com/hbh-take-home/rx_reminder.png" alt="logo"></img>
      </div>
    </div>
  );
}

export default Body;