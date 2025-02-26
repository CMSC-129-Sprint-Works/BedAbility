
import React, { Component } from 'react';
import {ThemeProvider as MuiThemeProvider, Form, Button, Container} from 'react-bootstrap';


export class HPRegister extends Component {
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
      <Container className = "App-containerRegister">
      <MuiThemeProvider>
        <>
        <p className = "App-title">Create an Account: Please Fill-up</p>
        <br/>
        <Form>
            <Form.Control
              placeholder="Enter Your Last Name" 
              label="Last Name" 
              onChange={handleChange('lastName')} 
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            />
            <br/>
             <Form.Control
              placeholder="Enter Your First Name" 
              label="First Name" 
              onChange={handleChange('firstName')} 
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <Form.Control
              placeholder="Enter your Birthdate"
              label="Age"
              onChange={handleChange('age')} 
              defaultValue={values.age}
              margin="normal"
              fullWidth
              type = "date"
            />
            <br />
            <Form.Control
              placeholder="Enter your Position / Occupation"
              label="Position"
              onChange={handleChange('position')} 
              defaultValue={values.position}
              margin="normal"
              fullWidth
            />
             <br />
              <Form.Control
              placeholder="Enter Hospital Key"
              label="Hospital Key"
              onChange={handleChange('Hkey')} 
              defaultValue={values.Hkey}
              margin="normal"
              fullWidth
            />
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
            <Form.Control
              placeholder="Enter your Password"
              label="Password"
              onChange={handleChange('passWord')} 
              defaultValue={values.passWord}
              margin="normal"
              fullWidth
            />
             <br />
             <Form.Control
              placeholder="Re-Enter your Password"
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
                >CONTINUE</Button>
            </div>
        </Form>  
        </>
      </MuiThemeProvider>
      </Container>
    );
  }
}

export default HPRegister;