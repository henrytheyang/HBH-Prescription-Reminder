import React from 'react';
import ReactDOM from 'react-dom';

function Message(props) {
  return (
    <div>
      <div>Hi{props.firstName}!</div>
      <div>Thanks for signing up for a reminder for {props.drugName}. We'll send it to {props.email} on {props.reminderDate} to give you a little notice.</div>
      <button onClick={() => props.handleClick()}>Set Reminder</button>
    </div>
  )
}

export default Message;