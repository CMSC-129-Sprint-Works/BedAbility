import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col} from 'react-bootstrap';
import RightSide from "./components/LeftSide";
//import LeftSide from "./components/RightSide";

import { UserForm } from './components/UserForm';
/*
function App() {
  return (
    <div className="App">
      <UserForm />
    </div>
  );
}
<div className="d-none d-lg-block">hide on screens smaller than lg</div>
export default App;
*/

function App() {
  return (
    <>
    <form className="Login Page">
      <div>
      <Row className="landing">
        <Col ><RightSide /></Col>
        <Col ><UserForm /></Col>
      </Row>
      </div>
    </form>
    </>
  );
}

export default App;

/*
function App() {
  return (
    <>
    <form className="Login Page">
      <div> 
      <LeftSide />
      </div>
      <div> 
      <RightSide />
      </div>
    </form>
    </>
     <form className="Login Page">
      <div>
      <Row className="landing">
        <Col ><LeftSide /></Col>
        <Col ><RightSide /></Col>
      </Row>
      </div>
    </form>

  );
}

export default App;*/