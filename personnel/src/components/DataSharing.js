//import React, { Component } from 'react';
//import {Container} from 'react-bootstrap'
//import { MDBBtn } from 'mdb-react-ui-kit';
import React, { Component } from 'react';
import {ThemeProvider as MuiThemeProvider, Form, Button, Container} from 'react-bootstrap';

export class DataSharingAgreement extends Component { //

  constructor(){
    super();
    this.state = {checked: ' '};
  }

  txtChange(e){
    this.setState({input : e.target.checked});
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

   render() {
    
    return (
      <Container className = "App-containerLogin">
      <MuiThemeProvider>
        <>
        <p className = "App-title">Data Sharing Agreement</p>
        <br/>
        <Form>
           <p style={{ color: 'white' }} >This is Data Sharing Agreement. Please read. Agree to continue</p>
            <br />
           <input type="checkbox" onChange = {this.txtChange.bind(this)}/>
            <em style={{ color: 'white' }}> I Agree to the Data Sharing Agreement <br/></em>
            <br/>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <br/>
              <Button
                color="Secondary"
                onClick={this.back}
                >CANCEL</Button>
               <Button disabled = {!this.state.input}
                color="primary"
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

export default DataSharingAgreement;