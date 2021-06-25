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
        <Form>
        <div className = "App-text" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0"  tabindex="0">
              <p>This data sharing agreement is made and entered by the user and the developer of this application. This is effective until the user deactivates his/her account. This data sharing agreement narrates how we process the information inputted for our BedAbility product presented by the UP Dormers Rawr.</p>
            
              <h4 id="scrollspyHeading2">Data Collection</h4>
              <p>The data that the UP Dormers Rawr collected are those information that the user of this application had inputted including in the signing up for an account and in the admission request form. No information will be collected from the users of the application until they have agreed to the Data Sharing Agreement. We ensure that we will only require what is completely necessary for the application to perform its functions. </p>
            </div>
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