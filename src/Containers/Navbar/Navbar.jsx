import React from 'react'
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav

} from "react-bootstrap";

const NavbarTool = () => (
    
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Ecars 3.0</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="/bookings">Bookings</Nav.Link>
      <NavDropdown title="Rentals" id="basic-nav-dropdown">
        <NavDropdown.Item href="/cars">Returns</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Contracts</NavDropdown.Item>
        <NavDropdown.Item href="/ipc">IPC</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
)


export default NavbarTool;