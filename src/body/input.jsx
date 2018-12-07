import React from 'react';
import ReactDOM from 'react-dom';

function Input(props) {
  return (
    <div id="inputBlock">
      <div class="inputBoxes">
        <div>First</div>
        <div>Last</div>
      </div>
      <div class="inputBoxes">
        <div>Drug</div>
        <div>Dropdown</div>
      </div>
    </div>
  );
}

export default Input;