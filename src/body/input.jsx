import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';


// const customStyles = {
//   menu: (provided) => ({
//     ...provided,
//     width: 122.8
//   }),
//   container: (provided) => ({
//     ...provided,
//     width: 122.8
//   })
// }

function Input(props) {
  let {daysSupply} = props.daysSupply;
  const options = props.options;
  return (
    <div id="inputBlock">
      <div class="inputRow">
        <input type="text" name="patientName" class="inputField" onChange={props.handleChange} placeholder="Full Name"/>
        <input type="text" name="email" class="inputField" onChange={props.handleChange} placeholder="Email"/>
      </div>
      <div class="inputRow">
        <input type="text" name="drugName" class="inputField" onChange={props.handleChange} placeholder="Medicine Name"/>
        <Select
          className="inputField"
          components={
            {
              IndicatorSeparator: () => null
            }
          }
          // value = {daysSupply}
          // value = {defaultValue}
          onChange = {props.handleSelect}
          options = {options}
          // styles = {customStyles}
          placeholder = 'Days supply of Rx'
        />
        {/* <select name="daysSupply" onChange={props.handleChange} placeholder = "Days supply of Rx">
          <option value="30">30</option>
          <option value="60">60</option>
          <option value="90" selected>90</option>
          <option value="100">100</option>
          <option value="120">120</option>
        </select> */}
      </div>
    </div>
  );
}

export default Input;