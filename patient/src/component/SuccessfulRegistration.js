import React, { Component } from 'react';
import {Container} from 'react-bootstrap';


export class SuccessfulRegistration extends Component {
  
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {values: {firstName}} = this.props;
    return (
      <Container className = "App-container">
        <form className = "App-form">
            <h3 className = "App-title">Successfully Registered!</h3>
            <br/>
            <h4 className = "App-text">{"Thank you for registering " + firstName + "!"}</h4>
            <br/>
            <div class = "d-grid gap-2 d-md-flex justify-content-md-center">
              <button type="submit" className="btn btn-success btn-lg btn-block" onClick  = {this.continue}>Proceed to Login</button>
            </div>
        </form>
      </Container>
    );
}
}

export default SuccessfulRegistration;