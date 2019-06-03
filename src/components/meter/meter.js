import React, { Component } from 'react';
import './meter.css';

class Meter extends Component {

  render() {
    return ( 
        <meter className="meter" min="0" max="100" value={this.props.value} />
    ) 
  } 
}

export default (Meter);