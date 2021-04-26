import React, { Component } from 'react';
import {Container} from 'react-bootstrap';


export class Bedability extends Component {
  back = e => {
    e.preventDefault(); 
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <form>
        <img thumbnail style = {{border:"none"}}src="./bg.jpg"/>
      </form>
    );
  }
}

export default Bedability;

