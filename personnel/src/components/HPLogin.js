/*import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Form, Container} from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';*/
import React, { Component } from 'react';
import {ThemeProvider as MuiThemeProvider, Form, Button, Container} from 'react-bootstrap';

export class HPLogin extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Container className = "App-container">
      <MuiThemeProvider>
        <>
       
        <br/>
        <br/>
        <h1 className = "App-welcome">Welcome to BedAbility!</h1>
        <p className = "App-title">Please Login</p>
        <Form style={{width:"80%", marginLeft:"0%", marginTop:"5%", marginRight:"10%"}}>
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
              type="password"
              onChange={handleChange('passWord')} 
              defaultValue={values.passWord}
              margin="normal"
              fullWidth
            />
            <br />
            <div class="d-grid gap-2 col-6 mx-auto">
                        <Button className = "App-button" color="black" type="Submit">
                            LOGIN
                        </Button>
            </div>
            <br />
            <br />
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