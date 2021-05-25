import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UserForm from "./component/UserForm";
import Hospital from "./component/Hospital";
import PatientInfo from "./component/PatientInfo";


function App() {
  //use theme switcher search ni ha
  return (
    <>
      <div>
        <Router>
          <Navbar variant="dark" bg = "background" expand = "lg" className = "App-header">
            <Navbar.Brand href="/">
              <img
                alt=""
                src="/bedability.ico"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              B e d A b i l i t y
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href = "Hospital">HOSPITAL</Nav.Link>
              <Nav.Link href = "PatientInfo">PATIENT INFO</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route path="/Hospital"><Hospital/></Route>
            <Route path="/PatientInfo"><PatientInfo/></Route>
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
                      <UserForm/>
                    </div>
                  </div>
                </div>
              </section>
            </Route>
          </Switch>
        </Router>
      </div>
  </>
  );
}

export default App;