import React, { Component } from 'react';
//import Dialog from '@material-ui/core/Dialog';
//import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import {Container, Form} from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';

export class ConfirmRegistration extends Component {
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
    const {
      values: { userName, passWord, fullName, address, position, age }
    } = this.props;
    return (
     <Container className = 'App-container'>
        <MuiThemeProvider>
        <>
        <br/>
        <h1 className = "App-title">Please Review and Confirm to Register</h1>
        <Form style={{width:"80%", marginLeft:"0%", marginTop:"0%"}}>
            <List className = "App-text">
              <ListItem>
                <ListItemText primary="Full Name" secondary={fullName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Age" secondary={age} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Address" secondary={address} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Position" secondary={position} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Username" secondary={userName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Password" secondary={passWord} />
              </ListItem>
            </List>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <MDBBtn>
              <Button
                onClick={this.back}
                >CANCEL</Button>
              </MDBBtn>
              <MDBBtn className = 'mx-2'>
               <Button
                onClick={this.continue}
                >CONTINUE</Button>
              </MDBBtn>

            </div>
        </Form>
        </>
      </MuiThemeProvider>
     </Container>
    );
  }
}

export default ConfirmRegistration;
