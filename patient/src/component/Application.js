import React, {Component } from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UserFormApp from './UserFormApp'; 

export class Application extends Component {
  login = e => {
    this.props.handleLoginClick();
  };
  render() {
    const {values, handleChange} = this.props;
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
                        <UserFormApp 
                        values = {values}
                        handleChange = {this.handleChange}
                        login = {this.login}/>
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
  }
}

export default Application;