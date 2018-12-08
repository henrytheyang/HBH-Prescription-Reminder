import React from 'react';
import ReactDOM from 'react-dom';

function Message(props) {
  let isSubmitted = props.isSubmitted;
  let postSubmission;
  if (isSubmitted) {
    postSubmission = (
      <div>
        <div>Hi {props.firstName}!</div>
        <div>Thanks for signing up for a reminder for {props.drugName}. We'll send it to {props.email} on {props.reminderDate} to give you a little notice.</div>
      </div>
    );
  }
  return (
    <div>
      {postSubmission}
      <button onClick={() => props.handleClick()}>Set Reminder</button>
    </div>
  )
}

export default Message;