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
//import Dashboard  from './components/Dashboard';
import ReactDOM from 'react-dom'


function App() {
  return (
    <>
      <section class = "Form">
       
              <UserForm/>
           
      </section>
    </>
  );
}

export default App;

if (document.getElementById('personnel')) {
    ReactDOM.render(<App />, document.getElementById('personnel'));
}

/*
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Row, Col} from 'react-bootstrap';
import { UserForm } from './components/UserForm';
import Dashboard  from './components/Dashboard';
import ReactDOM, { render } from 'react-dom'


function App() {

  const { step } = this.state;
  state = {
    step: 1,
  };

  switch (step) {
    case 1:
      return (
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
      );
    case 101:
      return (
        <Dashboard/>
    );
   
} 
}

export default App;

if (document.getElementById('personnel')) {
    ReactDOM.render(<App />, document.getElementById('personnel'));
}
*/
