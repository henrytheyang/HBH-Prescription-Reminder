import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';

const options = [
  {value: 30, label: 30},
  {value: 60, label: 60},
  {value: 90, label: 90},
  {value: 100, label: 100},
  {value:1230, label: 120},
];


function Input(props) {
  return (
    <div id="inputBlock">
      <div class="inputBoxes">
        <input type="text" name="patientName" onChange={props.handleChange} placeholder="Full Name"/>
        <input type="text" name="email" onChange={props.handleChange} placeholder="Email"/>
      </div>
      <div class="inputBoxes">
        <input type="text" name="drugName" onChange={props.handleChange} placeholder="Medicine Name"/>
        {/* <Select
          value={selectedOption}
          onChange={props.handleChange}
          options={options}
        /> */}
        <select name="daysSupply" onChange={props.handleChange} placeholder = "Days supply of Rx">
          <option value="30">30</option>
          <option value="60">60</option>
          <option value="90" selected>90</option>
          <option value="100">100</option>
          <option value="120">120</option>
        </select>
      </div>
    </div>
  );
}

export default Input;