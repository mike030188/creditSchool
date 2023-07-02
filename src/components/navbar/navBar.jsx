import React from 'react';
import { Logo, Navbar, Menu, Button, Body, Container1, Wrapper1, Frame, Container2 } from '../styled';
import logo from '../../assets/images/Logo.png';
import smile from '../../assets/images/smile.png';




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
        <h1>A virtual university,<br />
          with real degrees</h1>
        <p>Credischool is an accredited virtual university built<br />
         by top professors from Harvard, Stanford, MIT, and<br />
         many more. The students at Credischool are<br />
         welcome to study at their own pace.</p>
        <Button>Learn more</Button>
        <Frame blue style={{marginLeft:"790px"}}>
          <Container2 left>
            <img src={smile} alt="smile icon"/>
          </Container2>
          <Container2 right>
            <p>Total stipends given</p>
            <h1>$10.508.305</h1>
          </Container2>          
        </Frame>
      </Wrapper1>
    </Body>
     
    
    
  )
}

export default NavBar