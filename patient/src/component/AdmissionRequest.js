import React, { Component } from 'react';
import {Container} from 'react-bootstrap';

export class AdmissionRequest extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {values, handleChange}= this.props;
    
    return (
      <Container className = "App-account">
        <form><br/>
          <h1 className = "App-title">Admission Request</h1><br/>
          <div className = "App-text">
            <h4>Short description of the situation/symptoms:</h4>
            <textarea 
              id = "symptoms"
              onChange={handleChange('symptoms')} 
              defaultValue={values.symptoms} 
              rows={10}
              cols={60}
            />
          </div><br/>
          <div class="d-grid gap-2 col-4 mx-auto">
              <button type="submit" className="btn btn-success btn-lg mx-2" onClick  = {this.continue}>Continue</button>
          </div>
          <br/>
        </form>
      </Container>  
    );
  }
}

export default AdmissionRequest;