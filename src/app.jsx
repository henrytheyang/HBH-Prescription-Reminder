import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './banner.jsx';
import Body from './body/body.jsx';


const title = 'Here is a react/webpack setup!';

ReactDOM.render(
  <div id="appBlock">
    <Banner/>
    <Body/>
  </div>,
  document.getElementById('app')
);