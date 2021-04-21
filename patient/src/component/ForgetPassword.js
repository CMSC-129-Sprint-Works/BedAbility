import React, { Component } from 'react';
import {ThemeProvider as MuiThemeProvider, Form, Button} from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';

export class ForgetPassword extends Component { //
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
        <h1>Welcome to BedAbility! Please Login</h1>
        <Form style={{width:"80%", marginLeft:"0%", marginTop:"10%"}}>
            <Form.Control
              placeholder="Code" //
              label="Code" //First Name
              onChange={handleChange('Code')} //firstName
              defaultValue={values.Code}
              margin="normal"
              fullWidth
            />
            <br />
            <Form.Control
              placeholder="Enter Password"
              label="Password" // Last Name
              onChange={handleChange('passWord')} //lastName
              defaultValue={values.passWord}
              margin="normal"
              fullWidth
            />
            <br/>
            <Form.Control
              placeholder="Confirm Password"
              label="ConfirmPassword" // Last Name
              onChange={handleChange('ConfirmpassWord')} //lastName
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
            <div class="d-grid gap-2 col-6 mx-auto">
               <MDBBtn>
                <Button
                color="black"
               // variant="contained"
                onClick={this.skip}
              >CREATE ACCOUNT</Button>
              </MDBBtn>
            </div> 
        </Form>
        </>
      </MuiThemeProvider>
    );
  }
}

export default ForgetPassword;

