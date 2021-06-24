
import React, { Component } from 'react';
import {ThemeProvider as MuiThemeProvider, Form, Button, Container} from 'react-bootstrap';
import Dashboard  from './Dashboard';

////////////////////
export class HPLogin extends Component {
  

continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

forgetPass = e => {
        e.preventDefault();
        this.props.toForgetPassword();
    };
 
  render() {
    const { values, handleChange, toLogin } = this.props;
    return (
      <Container className = "App-containerLogin">
      <MuiThemeProvider>
        <>
        <h1 className = "App-welcome">Welcome to BedAbility!</h1>
        <p className = "App-title">Please Login</p>
        <br/>
        <Form>
            <Form.Control
              placeholder="Enter Email Address" 
              label="Email" 
              onChange={handleChange('email')} 
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            <Form.Control
              placeholder="Enter Password"
              label="Password" 
              type="password"
              onChange={handleChange('passWord')} 
              defaultValue={values.passWord}
              margin="normal"
              fullWidth
            />
            <br />
            <div class="d-grid gap-2 col-6 mx-auto">
            <Button color="black" onClick  = {toLogin}>
                  LOGIN
              </Button>
            </div>
              <br />
          <div className = "App-button">
              <Button color="black" variant="link" onClick={this.forgetPass}>
                  Forgot Password?
              </Button>
          </div> 
           <div className = "App-button">
              <Button color="black" variant="link" onClick={this.continue}>
                  Don't have an account? Create Account
              </Button>
          </div> 
        </Form>
        </>
      </MuiThemeProvider>
      </Container>
    );
  }
}

export default HPLogin;