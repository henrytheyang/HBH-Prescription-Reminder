import React from 'react';
import ReactDOM from 'react-dom';

function Input(props) {
  return (
    <div id="inputBlock">
      <div class="inputBoxes">
        <input type="text" name="patientName" onChange={props.handleTextChange}/>
        <input type="text" name="email" onChange={props.handleTextChange}/>
      </div>
      <div class="inputBoxes">
        {/* <div>Drug</div> */}
        <input type="text" name="medicineName" onChange={props.handleTextChange}/>
        <div>Dropdown</div>

      </div>
    </div>
  );
}

export default Input;