import React, { Component } from 'react';
import HPLogin from './HPLogin'; //  login
import HPRegister from './HPRegister'; // register
import HPConfirm from './HPConfirm'; // confirm
import HPSuccessreg from './HPSuccessreg'; // successfl message 
//import DataSharing from './DataSharing';

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
    const { email, passWord, lastName, firstName, Hkey, position, age } = this.state;
    const values = {email, passWord, lastName, firstName, Hkey, position, age};

    switch (step) {
      case 1:
        return (
          <HPLogin
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <HPRegister
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <HPConfirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
     
      case 4:
        return (
        <HPSuccessreg
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
/*
 case 4:
        return (
        <DataSharing
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
*/