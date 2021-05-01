import React, { Component } from 'react';
import {Container} from 'react-bootstrap';




export class SuccessfulRegistration extends Component {
  
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
      return (
      <Container className = "App-container">
        <form className = "App-form">
            <h3 className = "App-title">Successfully Registered!</h3>
            <br/>
            <h4 className = "App-text">Thank you for Registering!</h4>
            <br/>
            <button type="submit" className="btn btn-success btn-lg btn-block" onClick  = {this.continue}>Proceed to Login</button>
        </form>
      </Container>
    );
}
}

export default SuccessfulRegistration;