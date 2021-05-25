import React, { Component } from 'react';
import {Container} from 'react-bootstrap'


export class DataSharingAgreement extends Component { //
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
      <Container className = "App-container">
          <form>
            <h3 className = "App-title">Data Sharing Agreement</h3>
            <br/>
            <div className = "App-text" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0"  tabindex="0">
              <p>This data sharing agreement is made and entered by the user and the developer of this application. This is effective until the user deactivates his/her account. This data sharing agreement narrates how we process the information inputted for our BedAbility product presented by the UP Dormers Rawr.</p>
              <h4 id="scrollspyHeading1">Background</h4>
              <p>UP Dormers Rawr is a group of students that aims to help the country with the application they have developed. The Hospital personnel can access certain information as it is needed for the patient’s hospital record. The UP Dormers Rawr and the hospital propose this agreement with regards to the hospital’s access of patient’s information.</p>
              <h4 id="scrollspyHeading2">Data Collection</h4>
              <p>The data that the UP Dormers Rawr collected are those information that the user of this application had inputted including in the signing up for an account and in the admission request form. No information will be collected from the users of the application until they have agreed to the Data Sharing Agreement. We ensure that we will only require what is completely necessary for the application to perform its functions. </p>
              <h4 id="scrollspyHeading3">what information we collect?</h4>
              <p>To register an account, the user is required to input the following information:</p>
              <p>Complete Name</p>
              <p>Age</p>
              <p>Present address</p>
              <p>Contact number</p>
              <p>Email address</p>
              <p> To create an admission request, the user is required to input the symptoms the patient is experiencing and update the information of the patient inputted in the registration of the account.</p>
              <h4 id="scrollspyHeading4">Data Sharing</h4>
              <p>The data that the UP Dormers Rawr had collected will be processed by the hospital involved to serve as the patient’s hospital record. The hospital agrees to process the information provided by our application solely only for the purpose of the patient’s hospital record. The hospital needs to access the patient’s data as this will serve as the patient's identity and for the hospital personnel to assess the health situation of the patient. </p>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto">
              <button type="submit" className="btn btn-success btn-lg" onClick  = {this.continue}>Agree</button>
              <button type="submit" className="btn btn-success btn-lg" onClick  = {this.back}>Disagree</button>
            </div>
          </form>
      </Container>
    );
  }
}

export default DataSharingAgreement;