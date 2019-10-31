import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Hog from './Hog'
import hogs from '../porkers_data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allHogs: hogs,
      filteredPigs : [],
      filter: false,
      sortPigsByName: [],
      sortByName: false,
      sortPigsByWeight: [],
      sortByWeight: false
    }
  }


  filterPigs = () => {
    let greasedPigs = hogs.slice().filter(pig => pig.greased);

    this.setState((prevState, props) => ({
      filter: !prevState.filter,
      filteredPigs: greasedPigs,
      sortByName: false,
      sortByWeight: false
    }))
  }

  alphabetizePigs = () => {
    let alphaPigs = hogs.slice().sort(function(a, b){
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    })
    this.setState({
      sortPigsByName: alphaPigs,
      sortByName: !this.state.sortByName,
      sortByWeight: false,
      filter: false

    })
  }

  sortPigsByWeight = () => {
    let sortedPigs = hogs.slice().sort(function(a,b) {return a.weight - b.weight})
    this.setState({
      sortByWeight: !this.state.sortByWeight,
      sortPigsByWeight: sortedPigs,
      sortByName: false,
      filter: false
    })
  }


  render() {
    let theHogs;
    if (this.state.filter) {
       theHogs = this.state.filteredPigs
    } else if (this.state.sortByName) {
      theHogs = this.state.sortPigsByName
    } else if (this.state.sortByWeight) {
      theHogs =  this.state.sortPigsByWeight
    } else {
      theHogs =  hogs
    }


    const hogCards =  theHogs.map(hog => {
       return <Hog piggy={hog} />
    })

    return (
      <div className="App">
          < Nav
          filterPigs={this.filterPigs}
          alphabetizePigs={this.alphabetizePigs}
          sortPigsByWeight={this.sortPigsByWeight} />
          <div className="ui grid container">
          { hogCards}
          </div>
      </div>
    )
  }
}

export default App;
