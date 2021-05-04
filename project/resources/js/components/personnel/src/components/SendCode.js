//import React, { Component } from 'react';
//import {Container} from 'react-bootstrap'
//import { MDBBtn } from 'mdb-react-ui-kit';
import React, { Component } from 'react';
import {ThemeProvider as MuiThemeProvider, Form, Button, Container} from 'react-bootstrap';

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
      <Container className = "App-containerLogin">
      <MuiThemeProvider>
        <>
        <p className = "App-title">Password Recovery</p>
        <br/>
        <Form>
           <p style={{ color: 'white' }} >Please enter your email to recover your password. The verification code will be sent to the email.</p>
            <br />
              <Form.Control
              placeholder="Enter Your Email Address"
              label="Email"
              onChange={handleChange('email')} 
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
             <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <Button
                color="Secondary"
                onClick={this.back}
                >CANCEL</Button>
               <Button
                color="Primary"
                onClick={this.continue}
                >GET CODE</Button>
            </div>
        </Form>
        </>
      </MuiThemeProvider>
      </Container>
    );
  }
}

export default SendCode;



/*import React, { Component } from 'react';
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

export default SendCode;
*/