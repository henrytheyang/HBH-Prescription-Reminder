import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';


const customStyles = {
  menu: (provided) => ({
    ...provided,
    width: 180,
    fontSize: 14,
  }),
  container: (provided) => ({
    ...provided,
    width: 180,
    fontSize: 14,
  })
}

function Input(props) {
  let {daysSupply} = props.daysSupply;
  const options = props.options;
  return (
    <div id="inputBlock">
      <div class="inputRow">
        <input type="text" name="patientName" class="inputField" onChange={props.handleChange} placeholder="Full Name" onKeyPress={props.handleEnterPress}/>
        <input type="text" name="email" class="inputField" onChange={props.handleChange} placeholder="Email" onKeyPress={props.handleEnterPress}/>
      </div>
      <div class="inputRow">
        <input type="text" name="drugName" class="inputField" onChange={props.handleChange} placeholder="Medicine Name" onKeyPress={props.handleEnterPress}/>
        <div id="selectField">          
          <Select
            // className="inputField"
            components={
              {
                IndicatorSeparator: () => null
              }
            }
            // value = {daysSupply}
            // value = {defaultValue}
            onChange = {props.handleSelect}
            options = {options}
            styles = {customStyles}
            placeholder = 'Days supply of Rx'
          />
        </div>
      </div>
    </div>
  );
}

export default Input;