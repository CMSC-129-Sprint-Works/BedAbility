
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

/*
  alert = e => {
   datashare();
  };
*/

  render() {
    const {
      values: { email, passWord, lastName, firstName, Hkey, position, age }
    } = this.props;
    return (
     //<Container className = "App-containerRegister">
      <MuiThemeProvider>
        <>
        <br/>
          <p className = "App-title">Please Review and Confirm to Register</p>
      
        <Form style={{marginLeft:"0%", marginTop:"0%"}}>
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

            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <Button
                color="Secondary"
                onClick={this.back}
                >CANCEL</Button>
               <Button
                color="Primary"
                onClick={this.continue}
                >REGISTER</Button>
            </div>
        </Form>  
     
        </>
      </MuiThemeProvider>
       //</Container>
    );
  }
}

export default HPConfirm;