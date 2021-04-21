import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Form} from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';

export class HPLogin extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
        <br/>
        <br/>
        <h1>Welcome to BedAbility! Please Login</h1>
        <Form style={{width:"80%", marginLeft:"0%", marginTop:"10%"}}>
            <Form.Control
              placeholder="Enter Username" 
              label="Username" 
              onChange={handleChange('userName')} 
              defaultValue={values.userName}
              margin="normal"
              fullWidth
            />
            <br />
            <Form.Control
              placeholder="Enter Password"
              label="Password" 
              onChange={handleChange('passWord')} 
              defaultValue={values.passWord}
              margin="normal"
              fullWidth
            />
            <br />
            <div class="d-grid gap-2 col-6 mx-auto">
               <MDBBtn>
                <Button
                color="black"
                type="Submit">LOGIN
              </Button>
              </MDBBtn>
            </div>
            <br />
            <h5>Dont have an account?, Create and Register an Account</h5>
            <br />
            <div className = "App-button">
                <Button  variant="link" onClick={this.continue}>
                  Forget your password?
                </Button>
                <br/>
                <Button color="black" variant="link" onClick={this.continue}>
                  Don't have an account? Create Account
                </Button>
            </div> 
        </Form>
        </>
      </MuiThemeProvider>
    );
  }
}

export default HPLogin;