import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

export class Hospital extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {   
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const {values: {currentTime}}= this.props;
    
    return (
      <Card className = "App-account">
        <h1 className = "App-title">Hospital Name</h1><br/>
      <Card.Body className="text-center">
          <div className = "App-text">
            <h5>{"As of " + currentTime}</h5> 
          </div><br/>
          <div class="d-grid gap-2 col-4 mx-auto">
              <button type="submit" className="btn btn-success btn-lg" onClick  = {this.continue}>Continue</button>
              <button type="button" className="btn btn-success btn-lg" onClick  = {this.back}>Cancel</button>
          </div>
      </Card.Body>
    </Card>
    );
  }
}

export default Hospital;