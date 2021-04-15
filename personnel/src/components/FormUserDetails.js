import React, { Component } from 'react';
//import Dialog from '@material-ui/core/Dialog';
//import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
//import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Form} from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';

export class FormUserDetails extends Component { //
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
              placeholder="Enter Username" //
              label="Username" //First Name
              onChange={handleChange('userName')} //firstName
              defaultValue={values.userName}
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
                onClick={this.continue}
              >CREATE ACCOUNT</Button>
              </MDBBtn>
            </div> 
        </Form>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;