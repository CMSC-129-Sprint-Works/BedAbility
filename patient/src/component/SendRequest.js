import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

export class SendRequest extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {   
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const {values: {firstName}} = this.props;
    return (
      <Card className = "App-account">
        <h1 className = "App-title">{"Hi " + firstName + "!"}</h1><br/>
      <Card.Body className="text-center">
          <div className = "App-text">
            <h5>Your request was sent.</h5> 
            <h5>Kindly proceed to the hospital right away.</h5>
            <h5>Thank You!</h5>
          </div><br/>
          <div class="d-grid gap-2 col-4 mx-auto">
            <button type="button" className="btn btn-success btn-lg" onClick  = {this.back}>Cancel</button>
              <button type="submit" className="btn btn-success btn-lg" onClick  = {this.continue}>Continue</button>
          </div>
      </Card.Body>
    </Card>
    );
  }
}

export default SendRequest;