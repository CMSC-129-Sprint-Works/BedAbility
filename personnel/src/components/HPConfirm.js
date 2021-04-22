/*import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import {Form} from 'react-bootstrap'; 
import { MDBBtn } from 'mdb-react-ui-kit';*/

import React, { Component } from 'react';
import {ThemeProvider as MuiThemeProvider, Form, Button} from 'react-bootstrap';
import { List, ListItem, ListItemText } from '@material-ui/core/';


export class HPConfirm extends Component {

  constructor(){
    super();
    this.state = {checked: ' '};
  }

  txtChange(e){
    this.setState({input : e.target.checked});
  }

  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  alert = e => {
   datashare();
  };


  render() {
    const {
      values: { email, passWord, lastName, firstName, Hkey, position, age }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
        <br/>
        <h3>Please Review and Confirm to Register</h3>
        <Form style={{width:"80%", marginLeft:"0%", marginTop:"0%"}}>
            <List>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Birthdate" secondary={age} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Position" secondary={position} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Hospital key" secondary={Hkey} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Username" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Password" secondary={passWord} />
              </ListItem>
            </List>

            <Button color="black" variant="link" onClick={this.alert}>
                 To proceed with your regsitration, please read and agree to the Data Sharing Aggreement
              </Button>
            <input type="checkbox" onChange = {this.txtChange.bind(this)}/>
            <em> I Agree to the Data Sharing Agreement</em>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
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
    );
  }
}

export default HPConfirm;

function datashare() {
    alert("This is the Data Sharing Agreement")
}