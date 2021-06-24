
import React, { Component } from 'react';
import HPLogin from './HPLogin'; //  login
import HPRegister from './HPRegister'; // register
import HPConfirm from './HPConfirm'; // confirm 
import HPSuccessreg from './HPSuccessreg'; // successfl message 
import DataSharing from './DataSharing';
import SendCode from './SendCode'; //ask for user email and send code to verify the owner
import ForgetPassword from './ForgetPassword';//reset password
import HPSuccesspw from './HPSuccesspw';//reset password
import Dashboard  from './Dashboard';

export class Account extends Component {
  state = {
    step: 1, 
    userName:'',
    passWord:'',
    fullName: '',
    address: '',
    position: '',
    age: '',
  };

  toLogin = e => {
    e.preventDefault();
    this.props.themeSelector();
};
  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    if(step === 5){
      this.setState({
        step:step - 4
      });
    }
    else if(step === 8){
      this.setState({
        step:step - 7
      });
    }
    else{
      this.setState({
        step: step + 1
      });
    }
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    if(step === 6){
      this.setState({
        step:step - 5
      });
    }
    else{
      this.setState({
      step: step - 1
    });
    }
  };

  
  toForgetPassword = () => {
    const {step} = this.state;
    this.setState({
      step:step + 5
    });
  };

  
  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { email, passWord, lastName, firstName, Hkey, position, age, code, repassWord } = this.state;
    const values = {email, passWord, lastName, firstName, Hkey, position, age, code, repassWord};

    switch (step) {
      case 1:
        return (
          <HPLogin
            nextStep={this.nextStep}
            toForgetPassword = {this.toForgetPassword}
            toLogin = {this.toLogin}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
        <DataSharing
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 3:
        return (
          <HPRegister
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <HPConfirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
     
      case 5:
        return (
        <HPSuccessreg
            nextStep={this.nextStep}
            values={values}
          />
        );

      case 6:
        return (
        <SendCode
            nextStep={this.nextStep}
            prevStep = {this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      
      case 7:
        return (
        <ForgetPassword 
            nextStep={this.nextStep}
            prevStep = {this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

       case 8:
        return (
        <HPSuccesspw
            nextStep={this.nextStep}
            prevStep = {this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      /* case 101:
          return (
            <Dashboard/>
        );*/
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default Account;
