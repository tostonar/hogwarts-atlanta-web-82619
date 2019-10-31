import React from 'react';
import HogFront from './HogFront';
import HogBack from './HogBack';

class Hog extends React.Component  {
  constructor() {
    super();
    this.state = {
      showFront : true
    }
  }

  showDetails = () => {
    this.setState((prevState, props) => ({
      showFront: !prevState.showFront
    }))
  }

  render() {
    return(
      this.state.showFront ? <HogFront  toggleDetails={this.showDetails} piggy={this.props.piggy}/> : <HogBack piggy={this.props.piggy} toggleDetails={this.showDetails}/>
    )
  }



}

export default Hog;