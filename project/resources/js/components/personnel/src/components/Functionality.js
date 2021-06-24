
import React, { Component } from 'react';
import Dashboard from './Dashboard'; //  login
import Hardreset from './Hardreset'; // register
import Admission from './Admission';
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

    toView = () => {
        const { step } = this.state;
        this.setState({
            step:300
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
            toView={this.toView}
            handleChange={this.handleChange}
          />
        );
      case 200:
        return (
        <Hardreset
            toDash={this.toDash}
            toReset={this.toReset}
            toView={this.toView}
            handleChange={this.handleChange}
            values={values}
          /> 
        );

        case 300:
            return (
            <Admission
                toDash={this.toDash}
                toReset={this.toReset}
                toView={this.toView}
                handleChange={this.handleChange}
              /> 
            );

      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default Functionality;
