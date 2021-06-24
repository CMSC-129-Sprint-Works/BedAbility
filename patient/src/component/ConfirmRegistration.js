import React, { Component } from 'react';
import {Container} from 'react-bootstrap';

export class ConfirmRegistration extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {values: { firstName, lastName, email, birthDate, address, contactNumber}}= this.props;
    return (
      
     <Container className = "App-container">
        <form>
          <h3 className = "App-title">Please confirm your Registration</h3>
          <br/>
          <div className = "App-list">
            <div class="row">
              <dt className ="col-sm-5">FULL NAME:</dt>
              <dd class="col-sm-5">{firstName + " " + lastName}</dd>

              <dt class="col-sm-5">EMAIL ADDRESS:</dt>
              <dd class="col-sm-5">{email}</dd>

              <dt class="col-sm-5">DATE OF BIRTH:</dt>
              <dd class="col-sm-5">{birthDate}</dd>

              <dt class="col-sm-5">ADDRESS:</dt>
              <dd class="col-sm-5">{address}</dd>

              <dt class="col-sm-5">CONTACT NUMBER:</dt>
              <dd class="col-sm-5">{contactNumber}</dd>
            </div>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="submit" className="btn btn-success btn-lg" onClick  = {this.back}>Cancel</button>
            <button type="submit" className="btn btn-success btn-lg" onClick  = {this.continue}>Register</button>
          </div>
        </form>
     </Container>
    );
  }
}

export default ConfirmRegistration;