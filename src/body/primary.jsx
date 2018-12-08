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
      drugName: 'Aspirin',
      daysSupply: 60,
      date: 'May 30',
      symptoms: [
        'Happiness', 'Sleepiness', 'Grumpiness',
      ],
    };
  }

  handleTextChange(event) {
    console.log(`${event.target.value} was inputted`);
    this.setState({[event.target.name]: event.target.value});
  }

  splitNames(string) {
    let names = string.split(' ');
    console.log(`${names[0]} was split off`);
    console.log(`names[0] = ${names[0]}`);
    let first = ' ' + names[0];
    this.setState({firstName: first});
  }

  handleClick() {
    console.log('button was clicked');
    this.splitNames(this.state.patientName);
    // ajax call for symptoms
    // this.setState to update symptoms, update isSubmitted
  }

  calculateDate() {
    //Calculate date, then setState the date
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
        <Input handleTextChange={this.handleTextChange.bind(this)}/>
        <Message patient={this.state.firstName} email={this.state.email} date={this.state.date} drug={this.state.drugName} handleClick={this.handleClick.bind(this)}/>
        {postSubmission}
      </div>
    )
  }
}

export default Primary;