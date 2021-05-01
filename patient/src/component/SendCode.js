import React, { Component } from 'react';
import {Container} from 'react-bootstrap';

export class sendCode extends Component {
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
            <h3 className = "App-title">Enter Email Address for   Verification</h3>
            <br/>
            <div className="form-group">
                <input type="email" className="form-control" placeholder="Enter email"  onChange={handleChange('email')} defaultValue={values.email} required/>
            </div>


            <button type="submit" className="btn btn-success btn-lg btn-block" onClick  = {this.continue}>Get Code</button>
        </form>
      </Container>
    );
  }
}

export default sendCode;