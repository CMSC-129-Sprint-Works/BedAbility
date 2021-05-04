import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col} from 'react-bootstrap';
import UserForm from "./component/UserForm";


function App() {
  return (
    <>
      <section class = "Form">
        <div class = "container">
          <div class = "row">
            <div class = "col-lg-7">
              <img src = "./bg.jpg" class = "img-fluid" alt = ""/>
              <p>waw2</p>
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

ReactDOM.render(<App />, document.getElementById('app'))
