import React from 'react';
import ReactDOM from 'react-dom';

function Message(props) {
  return (
    <div>
      <div>Hi{props.patient}!</div>
      <div>Thanks for signing up for a reminder for {props.drug}. We'll send it to {props.email} on {props.date} to give you a little notice.</div>
      <button onClick={() => props.handleClick()}>Set Reminder Button</button>
    </div>
  )
}

export default Message;