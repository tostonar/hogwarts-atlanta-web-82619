import React from 'react';

const HogFront = (props) => {
  let slug = props.piggy.name.toLowerCase().split(" ").join("_");

  return(
    <div className="ui eight wide column" onClick={ props.toggleDetails}>
      <h4>{props.piggy.name}</h4>
      <img src={  require(`../hog-imgs/${slug}.jpg`) } alt={props.piggy.name} ></img>
    </div>
  )

}

export default HogFront;