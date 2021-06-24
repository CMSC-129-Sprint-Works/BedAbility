import React, {Component } from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard"
import Functionality from "./Functionality"
//import BasicTable from './BasicTable'; 
//import PatientInfo from "./PatientInfo";

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
                        src="./img/bedappicon.ico"
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
                              <img src = "./img/bg.jpg"  className = "App-Pic"  alt = ""/>
                          </div>
                          <div class = "col-lg-5">
                            <Account themeSelector = {this.themeSelector}/>
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
          
            <Router>
           
                  <Switch>
                    <Route path = "/Functionality">Functionality</Route>
                    <Route path = "/Functionality">Functionality</Route>
                    <Route exact path="/"><Functionality/></Route>
                  </Switch> 
                
              </Router>
         
        );
    }
   
  }
}

export default UserForm;