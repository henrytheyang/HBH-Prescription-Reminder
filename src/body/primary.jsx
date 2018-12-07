import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input.jsx';
import Message from './message.jsx';
import DrugReactions from './drugReactions.jsx';

class Primary extends React.Component {
  constructor() {
    super();
    this.state = {
      patient: {
        fullName: 'John Smith',
        first: 'John',
        last: 'Smith',
        email: 'johnsmith@email.com',
      },
      drug: {
        medicineName: 'Aspirin',
        daysSupply: 60,
        date: 'May 30',
        symptoms: [
          'Happiness', 'Sleepiness', 'Grumpiness',
        ],
      }
    };
  }

  handleTextChange(event) {
    // this.setState.
    console.log('text was inputted');
  }

  parseName() {

  }

  calculateDate() {
    //Calculate date, then setState the date
  }

  render() {
    return (
      <div id='primary'>
        <Input handleTextChange={this.handleTextChange}/>
        <Message patient={this.state.patient} date={this.state.drug.date} drug={this.state.drug.medicineName}/>
        <DrugReactions symptoms={this.state.drug.symptoms}/>
      </div>
    )
  }
}

export default Primary;