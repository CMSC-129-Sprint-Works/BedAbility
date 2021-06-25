import React, { Component } from 'react';
import {Container} from 'react-bootstrap';

export class SendCode extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Container className = "App-container">
         <form className = "App-form">
            <h3 className = "App-title">Enter Email Address for Verification</h3>
            <br/>
            <div className="form-group">
                <input type="email" className="form-control" placeholder="Enter email"  onChange={handleChange('email')} defaultValue={values.email} required/>
            </div>
            <br/>
            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
              <button type="submit" className="btn btn-success btn-lg btn-block" onClick  = {this.continue}>Send Code</button>
            </div>
        </form>
      </Container>
    );
  }
}

export default SendCode;