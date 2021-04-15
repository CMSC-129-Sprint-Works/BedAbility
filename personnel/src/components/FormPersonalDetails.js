import React, { Component } from 'react';
//import Dialog from '@material-ui/core/Dialog';
//import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
//import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Form} from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';

export class FormPersonalDetails extends Component {
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
      <MuiThemeProvider>
        <>
        <br/>
        <br/>
        <h1>Create an Account: Please Fill-up</h1>
        <Form style={{width:"80%", marginLeft:"0%", marginTop:"0%"}}>
            <br/>
            <Form.Control
              placeholder="Enter Your Full Name" 
              label="Full Name" //Occupation
              onChange={handleChange('fullName')} //occupation
              defaultValue={values.fullName}
              margin="normal"
              fullWidth
            />
            <br />
            <Form.Control
              placeholder="Enter your Age"
              label="Age"
              onChange={handleChange('age')} //city
              defaultValue={values.age}
              margin="normal"
              fullWidth
            />
            <br />
            <Form.Control
              placeholder="Enter Your Complete Address"
              label="Address"
              onChange={handleChange('address')} //bio
              defaultValue={values.address}
              margin="normal"
              fullWidth
            />
            <br />
            <Form.Control
              placeholder="Enter your Position / Occupation"
              label="Position"
              onChange={handleChange('position')} //bio
              defaultValue={values.position}
              margin="normal"
              fullWidth
            />
             <br />
             <Form.Control
              placeholder="Enter your UserName"
              label="UserName"
              onChange={handleChange('userName')} //bio
              defaultValue={values.userName}
              margin="normal"
              fullWidth
            />
             <br />
            <Form.Control
              placeholder="Enter your Password"
              label="Password"
              onChange={handleChange('passWord')} //bio
              defaultValue={values.passWord}
              margin="normal"
              fullWidth
            />
             <br />
             <Form.Control
              placeholder="Re-Enter your Password"
              label="RePassword"
              onChange={handleChange('repassWord')} //bio
              defaultValue={values.repassWord}
              margin="normal"
              fullWidth
            />
             <br />
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <MDBBtn>
              <Button
                color="Secondary"
                onClick={this.back}
                >CANCEL</Button>
              </MDBBtn>
              <MDBBtn>
               <Button
                color="primary"
                onClick={this.continue}
                >CONTINUE</Button>
              </MDBBtn>
              
            </div>
        </Form>  
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;