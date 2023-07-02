import React from 'react';
import { Logo, Navbar, Menu, Button, Body, Container1, Wrapper1 } from '../styled';
import logo from '../../assets/images/Logo.png';




const NavBar = () => {
  return (
    <Body>
      <Navbar>
      <Container1 left>
        <Logo src={logo}/>
      </Container1>
      <Container1 mid style={{justifyContent:"center"}}>
        <Menu black>Home</Menu>
        <Menu>Campus</Menu>
        <Menu>Education</Menu>
        <Menu>Alumni</Menu>
        <Menu>About</Menu>
      </Container1>
      <Container1 right>
        <Menu black>Login</Menu>
        <Button register>Register</Button>
      </Container1>           
      </Navbar>
      <Wrapper1>
        Hello
      </Wrapper1>
    </Body>
     
    
    
  )
}

export default NavBar