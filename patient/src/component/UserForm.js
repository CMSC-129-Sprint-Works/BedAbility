import React, {Component } from 'react';
import Login from './Login'; //  login
import CreateAccount from './CreateAccount'; // register
import ConfirmRegistration from "./ConfirmRegistration"; //confirm registration
import SuccessfulRegistration from './SuccessfulRegistration'; //  successful Registration
import DataSharingAgreement from './DataSharingAgreement'; //Data Sharing Agreement
import ForgetPassword from './ForgetPassword';//reset password
import SendCode from './SendCode'; //ask for user email and send code to verify the owner
import Hospital from './Hospital';
import PatientInfo from './PatientInfo'


export class UserForm extends Component {

  state = {
    theme: 1,
    step: 1,
    email:'',
    passWord:'',
    firstName: '',
    lastName: '',
    address: '',
    position: '',
    contactNumber: null,
    birthDate: null,
    code: null,
    confirmPassword: '',
  };

  toCreateAccount = () => {
    const {step} = this.state;
    this.setState({
      step: step + 3
    });
  };

  toForgetPassword = () => {
    const {step} = this.state;
    this.setState({
      step:step + 1
    });
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
      if(step === 1){
        this.setState({
          step:step + 7
        });
      }
      else{
        this.setState({
          step:step + 1
        });
      }
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    if(step === 3){
      this.setState({
        step: step - 2
      });
    }
    else if(step === 5){
      this.setState({
        step:step - 4
      });
    }
    else if(step === 4){
      this.setState({
        step:step - 3
      });
    }
    else{
      this.setState({
        step: step - 1
      });
    }
  };

 /* themeSelector = () => {
    this.setState({
      step: step + 1
    });
  }*/

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };


  render() {
    const {step} = this.state;
    const {passWord, firstName, lastName, address, position, birthDate, contactNumber, code, email, confirmPassword} = this.state;
    const values = {passWord, firstName, lastName, address, position, birthDate, contactNumber, code, email, confirmPassword};
    switch (step) {
      case 1:
        return (
          <Login
            nextStep = {this.nextStep}
            toForgetPassword = {this.toForgetPassword}
            toCreateAccount={this.toCreateAccount}
            handleChange={this.handleChange}
            themeSelector = {this.themeSelector}
            values={values}
          />
        );
      case 2: 
        return (
          <SendCode
            nextStep = {this.nextStep}
            handleChange={this.handleChange}
            values = {values}
          />
        );
      case 3: 
        return (
          <ForgetPassword
            prevStep = {this.prevStep}
            handleChange={this.handleChange}
            values = {values}
          />
        );
      case 4:
        return (
          <DataSharingAgreement
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <CreateAccount
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <ConfirmRegistration
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 7:
        return (
        <SuccessfulRegistration
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 8:
        return(
          <SuccessfulRegistration
            nextStep={this.nextStep}
            values={values}
          />
        );

      default:
        return <UserForm/>;
    }
  }
}

export default UserForm;