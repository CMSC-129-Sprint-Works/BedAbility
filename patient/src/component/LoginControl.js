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
     };
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
    const {isLoggedIn} = this.state;

 
    if (isLoggedIn) {
      return(
        <Account
        handleLoginClick = {this.handleLoginClick}
        handleLogoutClick = {this.handleLogoutClick}
        />
      );
    } else {
      return(
        <Application
        handleLoginClick = {this.handleLoginClick}/>
      );
    }

  }
}
 export default LoginControl;