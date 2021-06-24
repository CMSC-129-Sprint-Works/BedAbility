
import React, { Component } from 'react';
import Dashboard from './Dashboard'; //  login
import Hardreset from './Hardreset'; // register

export class Functionality extends Component {
  state = {
    step: 100, 
  };

  // Proceed to next step
    toDash = () => {
    const { step } = this.state;
    this.setState({
        step:100
      });
    };

    toReset = () => {
        const { step } = this.state;
        this.setState({
            step:200
          });
    };
  
  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { total, avail, occup  } = this.state;
    const values = {total, avail, occup};

    switch (step) {
      case 100:
        return (
          <Dashboard
            toDash={this.toDash}
            toReset={this.toReset}
            handleChange={this.handleChange}
          />
        );
      case 200:
        return (
        <Hardreset
            toDash={this.toDash}
            toReset={this.toReset}
            handleChange={this.handleChange}
            values={values}
          /> 
        );

      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default Functionality;
