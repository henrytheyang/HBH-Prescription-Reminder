import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input.jsx';
import Message from './message.jsx';
import DrugReactions from './drugReactions.jsx';

class Primary extends React.Component {
  constructor() {
    super();
    this.state = {
      isSubmitted: false,
      patientName: '',
      firstName: '',
      email: '',
      drugName: '',
      daysSupply: 89,
      reminderDate: '',
      symptoms: [
        'Happiness', 'Sleepiness', 'Grumpiness',
      ],
    };
  }

  handleChange(event) {
    console.log(`${event.target.value} was inputted`);
    this.setState({[event.target.name]: event.target.value});
  }

  splitNames(string) {
    let names = string.split(' ');
    // console.log(`names[0] = ${names[0]}`);
    let first = ' ' + names[0];
    this.setState({firstName: first});
  }

  calculateDate() {
    //Calculate date, then setState the date
    // date that is current day plus days supply - 5 days
    let today = Date.now();
    // console.log(`today = ${today}`);
    // ms * s * min * hr * day

    // Check math- discrepancy when going from 90 to 100 days
    let emailingDay =   1000 * 60 * 60 * 24 * (this.state.daysSupply - 5) + today;
    let stringifiedDate = new Date(emailingDay).toString();
    let arrayEmailingDay = stringifiedDate.split(' ');
    let stringifiedSimplifiedDate = `${arrayEmailingDay[1]} ${arrayEmailingDay[2]}`;
    console.log(`stringifiedSimplifiedDate = ${stringifiedSimplifiedDate}`);
    this.setState({reminderDate: stringifiedSimplifiedDate});
  }

  handleClick() {
    // console.log('button was clicked');
    this.splitNames(this.state.patientName);
    // ajax call for symptoms
    // this.setState to update symptoms, update isSubmitted
    this.calculateDate();
    this.setState({isSubmitted: true});
  }

  render() {
    let isSubmitted = this.state.isSubmitted;
    let postSubmission;
    if (isSubmitted) {
      postSubmission =  (
        <div>
          <DrugReactions symptoms={this.state.symptoms}/>
        </div>
      )
    }
    return (
      <div id='primary'>
        <Input handleChange={this.handleChange.bind(this)}/>
        <Message firstName={this.state.firstName} email={this.state.email} reminderDate={this.state.reminderDate} drugName={this.state.drugName} handleClick={this.handleClick.bind(this)}/>
        {postSubmission}
      </div>
    )
  }
}

export default Primary;