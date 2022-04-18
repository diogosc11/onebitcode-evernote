import React, { useState } from 'react';
import { Navbar, Container, Column } from 'rbx';
import logoImage from '../../assets/logo.png';
import "../../styles/header.scss";
import { Link } from 'react-router-dom';

function Header(){
  const [openMenu, setOpenMenu] = useState(false)

  return(
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logoImage} alt="" className="logoImage" />
          </Link>
          <Navbar.Burger
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-menu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Navbar.Burger>
        </Navbar.Brand>
        <Navbar.Menu id="navbar-menu">
        <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
          <Column.Group>
             <Column size={2}>
               <Link to="/register" className="button is-white registerButton">Register</Link>
             </Column>
             <Column size={2}>
               <Link to="/login" className="button is-outlined loginButton">Login</Link>
             </Column>
          </Column.Group>
        </Navbar.Segment>
        </Navbar.Menu>
      </Container>
    </Navbar>
  )
}

export default Header;