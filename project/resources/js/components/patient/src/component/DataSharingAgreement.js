
import React, { Component } from 'react';
import {Container, Form, Button} from 'react-bootstrap'
import { MDBBtn } from 'mdb-react-ui-kit';

export class DataSharingAgreement extends Component { //
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <Container className = "App-container">
          <form>
            <h3 className = "App-title">Data Sharing Agreement</h3>
            <br/>
            <p className = "App-text">This is Data Sharing Agreement. Please read.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
              <button type="submit" className="btn btn-success btn-lg" onClick  = {this.continue}>Agree</button>
              <button type="submit" className="btn btn-success btn-lg mx-2" onClick  = {this.back}>Disagree</button>
            </div>
          </form>
      </Container>
    );
  }
}

export default DataSharingAgreement;

