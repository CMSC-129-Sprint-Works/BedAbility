import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Container, Form} from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';

export class CreateAccount extends Component {
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
        <h1 className = "App-welcome">Create an Account</h1>
        <h2 className = "App-title">Please Fill-up</h2>
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
              type = "password"
              onChange={handleChange('passWord')} //bio
              defaultValue={values.passWord}
              margin="normal"
              fullWidth
            />
             <br />
             <Form.Control
              placeholder="Re-Enter your Password"
              label="RePassword"
              type = "password"
              onChange={handleChange('repassWord')} //bio
              defaultValue={values.repassWord}
              margin="normal"
              fullWidth
            />
             <br />
            <div className = "App-button">
              <MDBBtn>
                <Button onClick={this.back}>
                  CANCEL</Button>
            X
                <Button
                type = "button"
                  onClick={this.continue}
                  >CONTINUE</Button>
                </MDBBtn>
            </div>
        </Form>  
      </MuiThemeProvider>
      </Container>
    );
  }
}

export default CreateAccount;