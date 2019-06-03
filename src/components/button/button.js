import React, { Component } from 'react';
import './button.css';

class Button extends Component {

  render() {
    return ( 
        <button onClick={this.props.onClick} className="button">{this.props.text}</button>
    ) 
  } 
}

export default (Button);