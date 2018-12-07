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
        first: 'John',
        last: 'Smith',
        email: 'johnsmith@email.com',
      },
      drug: {
        name: 'Aspirin',
        daysSupply: 60,
        date: 'May 30',
        symptoms: [
          'Happiness', 'Sleepiness', 'Grumpiness',
        ],
      }
    };
  }

  calculateDate() {
    //Calculate date, then setState the date
  }

  render() {
    return (
      <div id='primary'>
        <Input/>
        <Message patient={this.state.patient} date={this.state.drug.date} drug={this.state.drug.name}/>
        <DrugReactions symptoms={this.state.drug.symptoms}/>
      </div>
    )
  }
}

export default Primary;