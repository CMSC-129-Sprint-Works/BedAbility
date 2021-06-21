import React, {Component } from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Application from './Application'; 
import Account from "./Account";
import BasicTable from './BasicTable'; 
import PatientInfo from "./PatientInfo";




export class UserForm extends Component {
  state = {
    theme: true,
  }
  themeSelector = () => {
    const {theme} = this.state;
    this.setState({
      theme:false
    });
  };
  render() {
    const {theme} = this.state;
    switch(theme){
      case true:
        return(
          <div>
            <Router>
              <header  className="App-header">
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
                  </Navbar>
                  <Container className = "App-main">
                  <Switch>
                    <Route exact path="/">
                    <section class = "Form ">
                      <div class = "container">
                        <div class = "row">
                          <div class = "col-lg-7">
                            <div>
                              <img src = "./bg.jpg" class = "img-fluid" alt = ""/>
                            </div>
                          </div>
                          <div class = "col-lg-5">
                            <Application themeSelector = {this.themeSelector}/>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Route>
                  </Switch> 
                  </Container>
                  </header>
              </Router>
          </div>
        );
      case false:
        return(
          <div>
            <Router>
              <header  className = "App-account">
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
                  </Navbar>
                  <Switch>
                    <Route path = "/BasicTable">Hospital</Route>
                    <Route path = "/PatientInfo">Patient Info</Route>
                    <Route exact path="/"><Account/></Route>
                  </Switch> 
                  </header>
              </Router>
          </div>
        );
    }
   
  }
}

export default UserForm;