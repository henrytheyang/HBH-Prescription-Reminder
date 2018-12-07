import React from 'react';
import ReactDOM from 'react-dom';

function Message(props) {
  return (
    <div>
      <div>Hi {props.patient.first}!</div>
      <div>Thanks for signing up for a reminder for {props.drug}. We'll send it to {props.patient.email} on {props.date} to give you a little notice.</div>
      <button>Set Reminder Button</button>
    </div>
  )
}

export default Message;