import React from 'react';
import ReactDOM from 'react-dom';

function DrugReactions(props) {
  return (
    <div>
      <div>As a service, here are the possible drug reactions you should contact your doctor if you're experiencing:</div>
      {props.symptoms.map(item => (
          <div>*{item}</div>
        ))
      }
    </div>
  )
}

export default DrugReactions;