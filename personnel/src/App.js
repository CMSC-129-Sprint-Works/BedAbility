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