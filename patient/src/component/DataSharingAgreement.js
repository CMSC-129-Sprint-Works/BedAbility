import React, { Component } from 'react';
import {ThemeProvider as MuiThemeProvider, Form, Button, Container} from 'react-bootstrap';

export class DataSharingAgreement extends Component { //
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
                    <p className = "App-text">This is the Data Sharing Agreement agree to continue using the application</p>
                    <br/>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <Button className = "App-button" color="black" type="Submit" onClick={this.continue}>
                            Agree
                        </Button>
                        <Button className = "App-button" color="black" type="Submit" onClick={this.back}>
                            Disagree
                        </Button>
                    </div>
                </Form>
            </MuiThemeProvider>
        </Container>

    );
  }
}

export default DataSharingAgreement;

