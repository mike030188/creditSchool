import React from 'react';
import { Logo, Navbar, Menu, Button, Body, Container1, Wrapper1, Frame, Container2, Wrapper2, Title} from '../styled';
import logo from '../../assets/images/Logo.png';
import smile from '../../assets/images/smile.png';
import support from '../../assets/images/support.png';
import payment from '../../assets/images/payment.png';
import onlinelect from '../../assets/images/online lect.png';





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
      <Wrapper2>
        <Container1 style={{flexDirection:"column"}}>
          <img src={support} alt="support" />
          <h1>24/7 Support</h1>
          <p>Always online to help you</p>
        </Container1>
        <Container1 style={{flexDirection:"column"}}>
          <img src={payment} alt="payment" />
          <h1>Secure Payments</h1>
          <p>Pay your semesters fast & secure</p>
        </Container1>
        <Container1 style={{flexDirection:"column"}}>
          <img src={onlinelect} alt="online lect" />
          <h1>Online Lectures</h1>
          <p>Study in real time, review later</p>
        </Container1>
      </Wrapper2>
      <Title>Explore the departments</Title>
    </Body>
     
    
    
  )
}

export default NavBar