//import React, { Component } from 'react';
//import {Container} from 'react-bootstrap'
//import { MDBBtn } from 'mdb-react-ui-kit';
import React, { Component } from 'react';
import {ThemeProvider as MuiThemeProvider, Form, Button, Container} from 'react-bootstrap';

export class ForgetPassword extends Component {

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
           <p style={{ color: 'white' }} >Please enter the verification code that we've sent to your email to change your password</p>
            <br />
              <Form.Control
              placeholder="Enter the verification code"
              label="Code"
              onChange={handleChange('code')} 
              defaultValue={values.code}
              margin="normal"
              fullWidth
            />
            <br />
            <Form.Control
              placeholder="Enter your New Password"
              label="Password"
              onChange={handleChange('passWord')} 
              defaultValue={values.passWord}
              margin="normal"
              fullWidth
            />
             <br />
             <Form.Control
              placeholder="Re-Enter your New Password"
              label="RePassword"
              onChange={handleChange('repassWord')} 
              defaultValue={values.repassWord}
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
                >CONFIRM</Button>
            </div>
        </Form>
        </>
      </MuiThemeProvider>
      </Container>
    );
  }
}

export default ForgetPassword;