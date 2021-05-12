import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col} from 'react-bootstrap';
import UserForm from "./component/UserForm";
import ReactDOM from 'react-dom'



function App() {
  return (
    <>
      <section class = "Form">
        <div class = "container">
          <div class = "row">
            <div class = "col-lg-7">
              <img src = "./bg.jpg" class = "img-fluid" alt = ""/>
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

if (document.getElementById('patient')) {
    ReactDOM.render(<App />, document.getElementById('patient'));
}
