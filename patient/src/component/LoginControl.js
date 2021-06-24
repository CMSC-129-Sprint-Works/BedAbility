import React, {Component} from 'react';
import Account from "./Account";
import Application from "./Application";



export class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isLoggedIn: false,
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
      symptoms: '',
      currentTime : new Date().toLocaleTimeString(),};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };  
  

  render() {
    const {passWord, firstName, lastName, address, birthDate, contactNumber, code, email, confirmPassword, symptoms, currentTime} = this.state;
    const values = {passWord, firstName, lastName, address, birthDate, contactNumber, code, email, confirmPassword, symptoms, currentTime};
    const {isLoggedIn} = this.state;

 
    if (isLoggedIn) {
      return(
        <Account
        values = {values}
        handleChange = {this.handleChange}
        handleLogoutClick = {this.handleLogoutClick}
        />
      );
    } else {
      return(
        <Application
        values = {values}
        handleChange = {this.handleChange}
        handleLoginClick = {this.handleLoginClick}/>
      );
    }

  }
}
 export default LoginControl;