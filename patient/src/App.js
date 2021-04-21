import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Image} from 'react-bootstrap';
import UserForm from "./component/UserForm";
//import DataSharingAgreement from "./component/DataSharingAgreement";
import Login from "./component/Login";
import CreateAccount from "./component/CreateAccount";
import ForgetPassword from "./component/ForgetPassword";
import SuccessfulRegistration from "./component/SuccessfulRegistration";

function App() {
  return (
    <>
    <form className="Login Page">
      <div>
      <Row className="landing">
        <Col ><Image src="./bg.jpg" thumbnail style={{border:"none"}} /> </Col>
        <Col ><UserForm/></Col>
      </Row>
      </div>
    </form>
    </>
  );
}

export default App;