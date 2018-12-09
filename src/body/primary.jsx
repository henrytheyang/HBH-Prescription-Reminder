import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input.jsx';
import Message from './message.jsx';
import DrugReactions from './drugReactions.jsx';
import $ from 'jquery';


class Primary extends React.Component {
  constructor() {
    super();
    const options = [
      {value: 30, label: 30},
      {value: 60, label: 60},
      {value: 90, label: 90},
      {value: 100, label: 100},
      {value: 120, label: 120},
    ];
    let medianOptionIndex = Math.floor(options.length/2);
    let defaultValue = options[medianOptionIndex].value;
    this.state = {
      isSubmitted: false,
      patientName: '',
      firstName: '',
      email: '',
      drugName: '',
      daysSupply: defaultValue,
      reminderDate: '',
      symptoms: [],
      options: options,
    };
  }

  handleChange(event) {
    // console.log(`${event.target.value} was inputted`);
    this.setState({[event.target.name]: event.target.value});
  }

  handleSelect(daysSupply) {
    console.log(`${daysSupply.value} was selected`);
    this.setState({daysSupply: daysSupply.value});
  }

  splitNames(string) {
    let names = string.split(' ');
    let first = names[0];
    this.setState({firstName: first});
  }

  calculateDate() {
    //Calculate date, then setState the date
    // date that is current day plus days supply - 5 days
    let today = Date.now();
    // ms * s * min * hr * day
    let emailingDay =   1000 * 60 * 60 * 24 * (this.state.daysSupply - 5) + today;
    let stringifiedDate = new Date(emailingDay).toString();
    let arrayEmailingDay = stringifiedDate.split(' ');
    let stringifiedSimplifiedDate = `${arrayEmailingDay[1]} ${arrayEmailingDay[2]}`;
    // console.log(`stringifiedSimplifiedDate = ${stringifiedSimplifiedDate}`);
    this.setState({reminderDate: stringifiedSimplifiedDate});
  }

  fdaCall() {
    // ajax call for symptoms
    // this.setState to update symptoms, update isSubmitted
    if (this.state.patientName === '' || this.state.email === '' || this.state.drugName === '') {
      alert('Please fill in all input fields');
    }
    $.ajax({
      url: `https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:${this.state.drugName}`,
      success: (data) => {
        // console.log(data.results);
        let reactions = data.results[0].patient.reaction;
        let flatReactions = [];
        for (var i = 0; i < reactions.length; i ++) {
          flatReactions.push(reactions[i].reactionmeddrapt);
          if (i === 4) {
            break;
          }
        }
        this.setState({
          symptoms: flatReactions,
          isSubmitted: true,
        });
      },
      error: () => {
        console.log('Ajax call failed');
        alert('Please enter a valid brand name drug');
      }
    });
  }

  handleClick() {
    this.calculateDate();
    this.splitNames(this.state.patientName);
    this.fdaCall();
  }

  handleEnterPress(event) {
    if (event.key == 'Enter') {
      this.handleClick();
    }
  }

  render() {
    return (
      <div id='primary'>
        <Input daysSupply={this.state.daysSupply} options={this.state.options} handleChange={this.handleChange.bind(this)} handleSelect={this.handleSelect.bind(this)} handleEnterPress={this.handleEnterPress.bind(this)}/>
        <Message firstName={this.state.firstName} email={this.state.email} reminderDate={this.state.reminderDate} drugName={this.state.drugName} handleClick={this.handleClick.bind(this)} isSubmitted={this.state.isSubmitted}/>
        <DrugReactions symptoms={this.state.symptoms} isSubmitted={this.state.isSubmitted}/>
      </div>
    )
  }
}

export default Primary;