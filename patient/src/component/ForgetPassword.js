import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Container, Form} from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';

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
      <Container className = "App-container">
        <MuiThemeProvider>
        <br/>
        <h1 className = "App-welcome">Reset Password</h1>
        <Form style={{width:"80%", marginLeft:"0%", marginTop:"0%"}}>
            <br/>
            <Form.Control
              placeholder="Enter code" 
              label="code" 
              onChange={handleChange('code')} //occupation
              defaultValue={values.code}
              margin="normal"
              fullWidth
              required
            />
            <br />
            <Form.Control
              placeholder="Enter your Password"
              label="Password"
              type = "password"
              onChange={handleChange('passWord')} //bio
              defaultValue={values.passWord}
              margin="normal"
              fullWidth
              required
            />
             <br />
             <Form.Control
              placeholder="Re-Enter your Password"
              label="RePassword"
              type = "password"
              onChange={handleChange('confirmPassword')} //bio
              defaultValue={values.confirmPassword}
              margin="normal"
              fullWidth
              required
            />
             <br />
            <div className = "App-button">
              <MDBBtn>
                <Button onClick={this.back}>
                  CONFIRM</Button>
              </MDBBtn>
            </div>
        </Form>  
      </MuiThemeProvider>
      </Container>
    );
  }
}

export default ForgetPassword;