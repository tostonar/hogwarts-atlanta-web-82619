import React from 'react';

const HogBack = (props) => {


  return(
    <div className="ui eight wide column" onClick={ props.toggleDetails}>
      <h4>{props.piggy.name}</h4>
      <p>Specialty: {props.piggy.specialty}</p>
      <p>Greased: {props.piggy.greased ? "Yes" : "No" }</p>
      <p>Weight: {props.piggy.weight}</p>
    </div>
  )

}

export default HogBack;