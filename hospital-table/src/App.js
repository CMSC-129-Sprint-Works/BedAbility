import logo from './bedability-logo.png'
import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Alert, Breadcrumb, Card, Form, Container, 
  Row, Col, Icon, Navbar, Nav, NavLink, Table } from 'react-bootstrap'
import BasicTable from './components/BasicTable'


function App() {
  return (
    <div className="App">
      <header className="App-header">
     {/* <Container fluid> */}
        {/* <BootTable /> */}

        <Navbar expand="lg" bg="background" variant="dark" fixed="top">
          <Navbar.Brand>
          <i class="bi bi-bell-fill"></i>
            <img 
              src= {logo}
              height="30"
              width="30"
              alt="Bedability Logo"
              /> {' '}
              <h2 className="bedability">B e d A b i l i t y</h2>
          </Navbar.Brand>

          <Navbar.Text></Navbar.Text>
          
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav defaultActiveKey="hospitals">
              <Nav.Item>
                <Nav.Link className="nav-link" aria-current="page" href="hospitals">HOSPITALS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="patient-info">PATIENT INFO</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          
        </Navbar> 
      <BasicTable />
    {/* </Container> */}
    </header>
    </div>
  );
}

export default App;
