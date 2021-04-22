import React, { Component } from 'react';
import {ThemeProvider as MuiThemeProvider, Form, Button, Container} from 'react-bootstrap';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn } from 'mdb-react-ui-kit';
export class Login extends Component { //
    skip = e => {
        e.preventDefault();
        this.props.skipStep();
    };
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
                    <h1 className = "App-welcome">Welcome to BedAbility!</h1>
                    <br/>
                    <p className = "App-title">Please Login</p>
                    <Form style={{width:"80%", marginLeft:"0%", marginTop:"10%"}}>
                        <Form.Control
                        placeholder="Enter Username" 
                        label="Username" 
                        onChange={handleChange('userName')} 
                        defaultValue={values.userName}
                        required
                        />
                        <br />
                        <Form.Control
                        placeholder="Enter Password"
                        label="Password" 
                        type = "password"
                        onChange={handleChange('passWord')} 
                        defaultValue={values.passWord}
                        
                        required
                        />
                        <br/>
                        <div class="d-grid gap-2 col-5 mx-auto">
                            <Button className = "App-button" color="black" type="Submit">
                                LOGIN
                            </Button>
                        </div>
                        <div className = "App-button">
                            <Button  variant="link" onClick={this.continue}>
                                Forget your password?
                            </Button>
                            <br/>
                            <Button variant="link" onClick={this.skip}>
                                Don't have an account? Create Account.
                            </Button>
                        </div> 
                    </Form>
                </MuiThemeProvider>
            </Container>
        );
    }
    }

    export default Login;

