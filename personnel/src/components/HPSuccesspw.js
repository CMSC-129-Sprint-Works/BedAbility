import React, { Component } from 'react';
import {ThemeProvider as MuiThemeProvider, Form, Button} from 'react-bootstrap';

export class HPSuccesspw extends Component {
  
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
      return (
      <MuiThemeProvider>
       
        <br/>
        <br/>
     
        <Form style={{marginLeft:"0%", marginTop:"0%"}}>
            <h2>Password changed Successfully!</h2>
            <p>Thank you. Please Login</p>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <Button
                color="Secondary"
                onClick={this.continue}
                >PROCEED TO LOGIN</Button>
            </div>
        </Form>  
        
      </MuiThemeProvider>
    );
}
}

export default HPSuccesspw;