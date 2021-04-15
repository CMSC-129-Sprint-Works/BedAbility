import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails'; //  login
import FormPersonalDetails from './FormPersonalDetails'; // register
import Confirm from './Confirm'; // confirm
import Success from './Success'; // successfl message 

export class UserForm extends Component {
  state = {
    step: 1,
    userName:'',
    passWord:'',
    fullName: '',
    address: '',
    position: '',
    age: '',
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { userName, passWord, fullName, address, position, age } = this.state;
    const values = {userName, passWord, fullName, address, position, age};

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return (
        <Success
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 5:
        return <UserForm />;

      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;