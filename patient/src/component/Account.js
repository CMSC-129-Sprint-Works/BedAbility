import React, {Component} from 'react';
import Hospital from './Hospital'; //  login
import BasicTable from './BasicTable'; // register
import ConfirmRegistration from "./ConfirmRegistration"; //confirm registration
import SuccessfulRegistration from './SuccessfulRegistration'; //  successful Registration
import DataSharingAgreement from './DataSharingAgreement'; //Data Sharing Agreement
import ForgetPassword from './ForgetPassword';//reset password
import SendCode from './SendCode'; //ask for user email and send code to verify the owner

export class Account extends Component {
  state = {
    step: 1,
    errors: '',
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


  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
      this.setState({
        step:step + 1
      });
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

  login = e => {
    e.preventDefault();
    this.props.themeSelector();
};

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };  
  
  render() {
    const {errors} = this.state;
    const {step} = this.state;
    const {passWord, firstName, lastName, address, birthDate, contactNumber, code, email, confirmPassword} = this.state;
    const values = {passWord, firstName, lastName, address, birthDate, contactNumber, code, email, confirmPassword};
    switch (step) {
      case 1:
        return (
          <BasicTable
            nextStep = {this.nextStep}
            handleChange={this.handleChange}
          />
        );
      case 2: 
        return (
          <Hospital
            nextStep = {this.nextStep}
            handleChange={this.handleChange}
            errors = {errors}
            values = {values}
          />
        );
      case 3: 
        return (
          <ForgetPassword
            prevStep = {this.prevStep}
            handleChange={this.handleChange}
            errors = {errors}
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
          <BasicTable
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            errors = {errors}
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
            themeSelector = {this.themeSelector}
          />
        );
      default:
        return <Account/>;
    }
  }
}

export default Account;