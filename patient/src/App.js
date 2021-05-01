import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UserForm from "./component/UserForm";
import AboutUs from "./component/AboutUs";
import ContactUs from "./component/ContactUs";

function App() {
  return (
    <>
      <section class = "Form">
        <div class = "container">
          <div>
            <Router>
              <Navbar variant="dark" expand = "lg" sticky = "top" className = "App-header">
                <Navbar.Brand href="/">
                  <img
                    alt=""
                    src="/bedability.ico"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{' '}
                  BedAbility
                </Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="/AboutUs">About Us</Nav.Link>
                  <Nav.Link href="/ContactUs" >ContactUs</Nav.Link>
                </Nav>
              </Navbar>
              <br />
              <Switch>
                <Route path="/AboutUs"><AboutUs/></Route>
                <Route path="/ContactUs"><ContactUs/></Route>
                <Route exact path="/">
                  <div class = "row">
                    <div class = "col-lg-7">
                      <img src = "./bg.jpg" class = "img-fluid" alt = ""/>
                    </div>
                    <div class = "col-lg-5">
                      <UserForm/>
                    </div>
                  </div>
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;