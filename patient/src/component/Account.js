import React, {Component} from 'react';
import Hospital from './Hospital'; //  login
import BasicTable from './BasicTable'; // register
import SendRequest from './SendRequest'; //  successful Registration
import EditForm from './EditForm'; //Data Sharing Agreement
import AdmissionRequest from './AdmissionRequest';//reset password
import PatientInfo from './PatientInfo'; //ask for user email and send code to verify the owner

export class Account extends Component {
  state = {
    step: 1,
    errors: '',
    email:'',
    passWord:'',
    firstName: '',
    lastName: '',
    address: '',
    id: null,
    contactNumber: null,
    birthDate: null,
    code: null,
    confirmPassword: '',
    symptoms: '',
    bedCount: null,
    hospitalName: '',
    totalcapacity: null,
    status: '',
    currentTime : new Date().toLocaleTimeString(),
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
    if(step == 4){
      this.setState({
        step: step - 3
      });
    }
    else{
      this.setState({
        step: step - 2
      });
    }
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };  

  
  render() {
    const {errors} = this.state;
    const {step} = this.state;
    const {passWord, firstName, lastName, address, birthDate, contactNumber, code, email, confirmPassword, currentTime, bedCount, symptoms, id} = this.state;
    const values = {passWord, firstName, lastName, address, birthDate, contactNumber, code, email, confirmPassword, currentTime, bedCount, symptoms, id};
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
            prevStep = {this.prevStep}
            handleChange={this.handleChange}
            errors = {errors}
            values = {values}
          />
        );
      case 3: 
        return (
          <AdmissionRequest
            nextStep = {this.nextStep}
            handleChange={this.handleChange}
            errors = {errors}
            values = {values}
          />
        );
      case 4:
        return (
          <PatientInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <EditForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            errors = {errors}
            values={values}
          />
        );
      case 6:
        return (
          <SendRequest
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      default:
        return <Account/>;
    }
  }
}

export default Account;