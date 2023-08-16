import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';



const Header = () => {
  return (
    <Navbar expand="lg" className="custom-navbar bg-danger-emphasis">
    <Navbar.Brand href="#home" className="brand-title text-light ms-5 fst-italic">READER'S HEAVEN</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Form inline className="search-form">
        <FormControl type="text" placeholder="Search" className="mr-sm-2 ms-5" />
        <Button className='ms-2' variant="outline-light">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Header;
