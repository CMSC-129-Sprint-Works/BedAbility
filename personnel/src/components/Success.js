import React, { Component } from 'react';
//import Dialog from '@material-ui/core/Dialog';
//import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import {Form} from 'react-bootstrap';
import Button from '@material-ui/core/Button';

import { MDBBtn } from 'mdb-react-ui-kit';


export class Success extends Component {
  
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

 /*
  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions.</p>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }*/
  render() {
      return (
      <MuiThemeProvider>
       
        <br/>
        <br/>
     
        <Form style={{width:"80%", marginLeft:"0%", marginTop:"0%"}}>
            <h1>Successfully Registered!</h1>
            <p>Thank you for Registering. Please Login</p>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <MDBBtn>
              <Button
                color="Secondary"
                onClick={this.continue}
                >PROCEED TO LOGIN</Button>
              </MDBBtn>
            </div>
        </Form>  
        
      </MuiThemeProvider>
    );
}
}

export default Success;