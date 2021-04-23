import React, { Component } from 'react';
import {ThemeProvider as MuiThemeProvider, Form, Button} from 'react-bootstrap';

export class DataSharing extends Component { //
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    
    return (
             <MuiThemeProvider>
                <h1 className = "App-welcome">Welcome to BedAbility!</h1>
                <br/>
                <p className = "App-title">Please Login</p>
                <Form style={{width:"80%", marginLeft:"0%", marginTop:"10%"}}>
                    <p className = "App-text">This is the Data Sharing Agreement agree to continue using the application</p>
                    <br/>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Button
                        color="Secondary"
                        onClick={this.back}
                        >DISAGREE</Button>
                    <Button
                        color="primary"
                        onClick={this.continue}
                        >AGREE</Button>
                </div>
                </Form>
            </MuiThemeProvider>
       
    );
  }
}

export default DataSharing;
