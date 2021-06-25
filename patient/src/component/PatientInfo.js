import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap';


export class PatientInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {values: {firstName, lastName, email, birthDate, address, contactNumber, symptoms}}= this.props;
    
    return (
     <div className = "App-information">
       <h1 className = "App-title">My Information</h1><br/>
       <div class = "row">
       <ListGroup variant="flush" className = "App-list">
      <ListGroup.Item><dt class="col-sm-15">NAME:</dt>
              <dd class="col-sm-15">{firstName + " " + lastName}</dd></ListGroup.Item>
      <ListGroup.Item><dt class="col-sm-15">EMAIL ADDRESS:</dt>
              <dd class="col-sm-5">{email}</dd></ListGroup.Item>
      <ListGroup.Item><dt class="col-sm-15">DATE OF BIRTH:</dt>
              <dd class="col-sm-15">{birthDate}</dd></ListGroup.Item>
      <ListGroup.Item><dt class="col-sm-15">ADDRESS:</dt>
              <dd class="col-sm-15">{address}</dd></ListGroup.Item>
      <ListGroup.Item><dt class="col-sm-15">CONTACT NUMBER:</dt>
              <dd class="col-sm-5">{contactNumber}</dd></ListGroup.Item>
      <ListGroup.Item><dt class="col-sm-15"> SYMPTOMS:</dt>
              <dd class="col-sm-15">{symptoms}</dd></ListGroup.Item>
    </ListGroup>
    </div>
    <div class="d-grid gap-2 col-5 mx-auto">
            <button type="submit" className="btn btn-success btn-lg" onClick  = {this.continue}>Continue</button>
            <button type="submit" className="btn btn-success btn-lg" onClick  = {this.back}>Back to Hospital</button>
          </div><br/>
     </div>
    );
  }
}

export default PatientInfo;