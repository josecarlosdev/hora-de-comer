import React, { Component } from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap';
import { MdRestaurant } from 'react-icons/md';
import { Link } from "react-router-dom";
import { Text } from './styles';
import Logo from '../../src/images/logo1.png'

class NavBar extends Component {
  render() {
    return (
      <>
       <div className="pt-1" />
        <Navbar bg="white" variant="dark" className="rounded-pill shadow-lg">
          <Navbar.Brand href="/">  <Image src={Logo} fluid ></Image></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to='/home'>
                <Text>INÍCIO |</Text>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/recebimento'>
                <Text>RECEBIMENTO |</Text>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/vendas'>
                <Text>VENDA |</Text>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/filial'>
                <Text>FILIAL |</Text>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar>
      </>
    )
  }
}

export default NavBar;
