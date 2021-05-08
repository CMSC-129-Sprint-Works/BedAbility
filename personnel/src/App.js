/*
import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col} from 'react-bootstrap';
import LeftSide from "./components/LeftSide";
import { UserForm } from './components/UserForm';

function App() {
  return (
    <>
    <form className="Login Page">
      <div>
      <Row className="landing">
        <Col ><LeftSide /></Col>
        <Col ><UserForm /></Col>
      </Row>
      </div>
    </form>
    </>
  );
}

export default App;
*/

import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Row, Col} from 'react-bootstrap';
import { UserForm } from './components/UserForm';


function App() {
  return (
    <>
      <section class = "Form">
        <div class = "container">
          <div class = "row">
            <div class = "col-lg">
              <img src = "./img/bg.jpg" class = "img-fluid" alt = ""/>
            </div>
            <div class = "col-lg-5">
              <UserForm/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

