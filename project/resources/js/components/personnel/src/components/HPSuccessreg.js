
import React, { Component } from 'react';
import {ThemeProvider as MuiThemeProvider, Form, Button, Container} from 'react-bootstrap';

export class HPSuccessreg extends Component {
  
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
      return (
      <Container className = "App-containerLogin">
      <MuiThemeProvider>
        <br/>
        <br/>
     
        <Form>
            <h2>Successfully Registered!</h2>
            <p>Thank you for Registering. Please Login</p>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <Button
                color="Secondary"
                onClick={this.continue}
                >PROCEED TO LOGIN</Button>
            </div>
        </Form>  
      </MuiThemeProvider>
      </Container>
    );
}
}

export default HPSuccessreg;