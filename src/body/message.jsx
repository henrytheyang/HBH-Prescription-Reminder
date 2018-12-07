import React from 'react';
import ReactDOM from 'react-dom';

function Message(props) {
  return (
    <div>
      <div>Hi {props.patient.first}!</div>
      <div>Thanks for signing up for a reminder for medicine name. We'll send it to email address on {props.date} to give you a little notice.</div>
      <button>Set Reminder Button</button>
    </div>
  )
}

export default Message;