import React, { Component } from 'react';
import Login from './Login'; //  login
import CreateAccount from './CreateAccount'; // register
import ConfirmRegistration from "./ConfirmRegistration"; //confirm registration
import SuccessfulRegistration from './SuccessfulRegistration'; //  successful Registration
import DataSharingAgreement from './DataSharingAgreement';


export class UserForm extends Component {
  state = {
    step: 1,
    userName:'',
    passWord:'',
    fullName: '',
    address: '',
    position: '',
    age: '',
    confirmPassword: '',
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
    const {choice} = this.props;
    const { userName, passWord, fullName, address, position, age, confirmPassword} = this.state;
    const values = {userName, passWord, fullName, address, position, age, confirmPassword};

    switch (step) {
      case 1:
        return (
          <Login
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <DataSharingAgreement
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <CreateAccount
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <ConfirmRegistration
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 5:
        return (
        <SuccessfulRegistration
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 6:
        return <UserForm />;

      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;