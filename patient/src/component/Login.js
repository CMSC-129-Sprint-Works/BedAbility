import React, { Component } from 'react';
import {ThemeProvider as MuiThemeProvider, Form, Button, Container} from 'react-bootstrap';

export class Login extends Component { //
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
        <Container className = "App-container">
             <MuiThemeProvider>
                <h1 className = "App-welcome">Welcome to BedAbility!</h1>
                <br/>
                <p className = "App-title">Please Login</p>
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
                    type = "password"
                    onChange={handleChange('passWord')} //lastName
                    defaultValue={values.passWord}
                    margin="normal"
                    fullWidth
                    />
                    <br/>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <Button className = "App-button" color="black" type="Submit">
                            LOGIN
                        </Button>
                    </div>
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
            </MuiThemeProvider>
        </Container>

    );
  }
}

export default Login;

