import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col} from 'react-bootstrap';
import UserForm from "./component/UserForm";
import Bedability from "./component/Bedability";


function App() {
  return (
    <>
    <form className="App">
      <div>
      <Row>
        <Col><Bedability/> </Col>
        <Col ><UserForm/></Col>
      </Row>
      </div>
    </form>
    </>
  );
}

export default App;