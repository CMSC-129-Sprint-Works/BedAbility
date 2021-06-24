import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Hospital from './Hospital'; //  login
import PatientInfo from './PatientInfo'; //ask for user email and send code to verify the owner
import UserFormAcc from './UserFormAcc';

export class Account extends Component {
  render(){
    const {values} = this.props;
    return(
      <div class = "App">
        <Router>
          <header>
            <Navbar expand="lg" bg="background" variant="dark" fixed="top" className="App-headertwo">
              <Navbar.Brand href = "/" defaultActiveKey="" >
              <img
                    alt=""
                    src="/bedAbility.ico"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{' '}
                  <text className="bedability">B e d A b i l i t y</text>
              </Navbar.Brand>
              <Nav className="mr-auto">
              <Nav.Link href="/BasicTable">Hospital</Nav.Link>
              <Nav.Link href="/PatientInfo" >Patient Info</Nav.Link>
            </Nav>
              </Navbar>
              <Switch>
                <Route path = "/BasicTable"><Hospital/></Route>
                <Route path = "/PatientInfo"><PatientInfo/></Route>
                <Route exact path="/"><UserFormAcc values = {values}/></Route>
              </Switch> 
              </header>
          </Router>
      </div>
    );
  }
}

export default Account;